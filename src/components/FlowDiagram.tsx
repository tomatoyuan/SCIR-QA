import { useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import ReactFlow, {
  type Node,
  type Edge,
  Background,
  Controls,
  MiniMap,
  type NodeTypes,
} from 'reactflow'
import 'reactflow/dist/style.css'
import type { FlowDiagram as FlowDiagramType } from '../data/researchData'

interface FlowDiagramProps {
  diagram: FlowDiagramType
  directionId: string
}

// 语义解析方向的节点样式（参考HTML设计）
const semanticNodeTypes: NodeTypes = {
  default: ({ data }: { data: { label: string } }) => (
    <div className="semantic-goal-desc semantic-parsing-node cursor-pointer hover:shadow-lg transition-all min-w-[180px] max-w-[320px]">
      <div className="text-xs leading-relaxed whitespace-pre-line">{data.label}</div>
    </div>
  ),
  input: ({ data }: { data: { label: string; isDashed?: boolean } }) => {
    // 数据库节点使用虚线边框
    if (data.isDashed) {
      return (
        <div className="semantic-database-node semantic-parsing-node cursor-pointer hover:shadow-xl transition-all min-w-[200px] max-w-[320px]">
          <div className="text-xs leading-relaxed whitespace-pre-line">{data.label}</div>
        </div>
      )
    }
    // 普通输入节点
    return (
      <div className="semantic-input-node semantic-parsing-node cursor-pointer hover:shadow-xl transition-all min-w-[200px] max-w-[320px]">
        <div className="text-xs leading-relaxed whitespace-pre-line">{data.label}</div>
      </div>
    )
  },
  output: ({ data }: { data: { label: string } }) => (
    <div className="semantic-output-node semantic-parsing-node cursor-pointer hover:shadow-xl transition-all min-w-[200px] max-w-[320px]">
      <div className="text-xs leading-relaxed whitespace-pre-line">{data.label}</div>
    </div>
  ),
  core: ({ data }: { data: { label: string } }) => (
    <div className="semantic-core-node semantic-parsing-node cursor-pointer hover:shadow-2xl transition-all min-w-[240px] max-w-[380px]">
      <div className="text-sm leading-tight whitespace-pre-line">{data.label}</div>
    </div>
  ),
  executor: ({ data }: { data: { label: string } }) => (
    <div className="semantic-executor-node semantic-parsing-node cursor-pointer hover:shadow-xl transition-all min-w-[100px] max-w-[180px]">
      <div className="text-sm leading-relaxed whitespace-pre-line">{data.label}</div>
    </div>
  ),
  'research-point': ({ data }: { data: { label: string } }) => (
    <div className="semantic-research-point semantic-parsing-node cursor-pointer min-w-[320px] max-w-[480px]">
      <div className="text-xs leading-relaxed whitespace-pre-line">{data.label}</div>
    </div>
  ),
  process: ({ data }: { data: { label: string } }) => (
    <div className="px-5 py-3 bg-gradient-to-br from-cyan-50 to-cyan-100 border-2 border-cyan-400 rounded-lg shadow-md hover:border-cyan-600 hover:shadow-lg transition-all cursor-pointer min-w-[140px] max-w-[250px]">
      <div className="text-xs font-semibold text-cyan-800 text-center whitespace-pre-line leading-relaxed">{data.label}</div>
    </div>
  ),
}

// 文档智能方向的节点样式（保持原有样式）
const documentNodeTypes: NodeTypes = {
  default: ({ data }: { data: { label: string } }) => (
    <div className="px-4 py-3 bg-white border-2 border-gray-400 rounded-lg shadow-lg hover:border-blue-500 hover:shadow-xl transition-all cursor-pointer min-w-[150px] max-w-[300px]">
      <div className="text-xs font-semibold text-gray-800 text-center whitespace-pre-line leading-relaxed">{data.label}</div>
    </div>
  ),
  input: ({ data }: { data: { label: string } }) => (
    <div className="px-5 py-4 bg-gradient-to-br from-green-50 to-green-100 border-[3px] border-green-500 rounded-xl shadow-lg hover:border-green-600 hover:shadow-xl transition-all cursor-pointer min-w-[200px] max-w-[300px]">
      <div className="text-xs font-bold text-green-800 text-center whitespace-pre-line leading-relaxed">{data.label}</div>
    </div>
  ),
  output: ({ data }: { data: { label: string } }) => (
    <div className="px-5 py-4 bg-gradient-to-br from-blue-50 to-blue-100 border-[3px] border-blue-500 rounded-xl shadow-lg hover:border-blue-600 hover:shadow-xl transition-all cursor-pointer min-w-[200px] max-w-[300px]">
      <div className="text-xs font-bold text-blue-800 text-center whitespace-pre-line leading-relaxed">{data.label}</div>
    </div>
  ),
  core: ({ data }: { data: { label: string } }) => (
    <div className="px-6 py-5 bg-gradient-to-br from-purple-100 to-purple-200 border-[3px] border-purple-600 rounded-xl shadow-xl hover:border-purple-700 hover:shadow-2xl transition-all cursor-pointer min-w-[220px] max-w-[350px]">
      <div className="text-sm font-bold text-purple-900 text-center leading-tight">{data.label}</div>
    </div>
  ),
  executor: ({ data }: { data: { label: string } }) => (
    <div className="px-5 py-3 bg-gradient-to-br from-orange-100 to-orange-200 border-[3px] border-orange-500 rounded-xl shadow-lg hover:border-orange-600 hover:shadow-xl transition-all cursor-pointer min-w-[120px] max-w-[200px]">
      <div className="text-sm font-bold text-orange-800 text-center whitespace-pre-line">{data.label}</div>
    </div>
  ),
  'research-point': ({ data }: { data: { label: string } }) => (
    <div className="px-5 py-4 bg-gradient-to-br from-indigo-50 to-indigo-100 border-2 border-indigo-400 rounded-lg shadow-md hover:border-indigo-600 hover:shadow-lg transition-all cursor-pointer min-w-[300px] max-w-[450px]">
      <div className="text-xs font-semibold text-indigo-800 text-center whitespace-pre-line leading-relaxed">{data.label}</div>
    </div>
  ),
  process: ({ data }: { data: { label: string } }) => (
    <div className="px-5 py-3 bg-gradient-to-br from-cyan-50 to-cyan-100 border-2 border-cyan-400 rounded-lg shadow-md hover:border-cyan-600 hover:shadow-lg transition-all cursor-pointer min-w-[140px] max-w-[250px]">
      <div className="text-xs font-semibold text-cyan-800 text-center whitespace-pre-line leading-relaxed">{data.label}</div>
    </div>
  ),
}

function FlowDiagram({ diagram, directionId }: FlowDiagramProps) {
  const navigate = useNavigate()
  const { i18n } = useTranslation()

  // 根据研究方向选择不同的节点样式
  const nodeTypes = directionId === 'semantic-parsing' ? semanticNodeTypes : documentNodeTypes

  const onNodeClick = useCallback(
    (_event: React.MouseEvent<Element, MouseEvent>, node: Node) => {
      const researchPointId = diagram.researchPointMapping[node.id]
      if (researchPointId) {
        navigate(`/research/${directionId}/${researchPointId}`)
      } else if (node.id === 'input' || node.id === 'output' || node.id === 'model' || node.id === 'database' || node.id === 'executor' || node.id === 'result' || node.id === 'complex-layout' || node.id === 'multi-page') {
        // Navigate to direction page for main nodes
        navigate(`/research/${directionId}`)
      }
    },
    [diagram, directionId, navigate]
  )

  const nodes: Node[] = diagram.nodes.map((node) => {
    const label = node.label[i18n.language as 'zh' | 'en'] || node.label.zh
    
    // 为语义解析方向的特殊节点添加处理
    if (directionId === 'semantic-parsing') {
      if (node.id === 'goal-title') {
        return {
          id: node.id,
          type: 'default',
          position: node.position,
          data: { label },
          className: 'semantic-goal-title',
        }
      }
      // 数据库节点使用虚线边框
      if (node.id === 'database') {
        return {
          id: node.id,
          type: 'input',
          position: node.position,
          data: { label, isDashed: true },
        }
      }
    }
    
    return {
      id: node.id,
      type: node.type || 'default',
      position: node.position,
      data: { label },
    }
  })

  // 为语义解析方向使用更柔和的连接线颜色
  const edgeColor = directionId === 'semantic-parsing' ? '#4a6b8a' : '#6366f1'
  const edgeStrokeWidth = directionId === 'semantic-parsing' ? 2 : 2.5

  const edges: Edge[] = diagram.edges.map((edge) => ({
    id: edge.id,
    source: edge.source,
    target: edge.target,
    animated: true,
    style: { 
      stroke: edgeColor,
      strokeWidth: edgeStrokeWidth,
    },
  }))

  // 为语义解析方向使用特殊的背景样式
  const containerClass = directionId === 'semantic-parsing' 
    ? 'border-2 border-[#1a3b5c] rounded-[20px] bg-white shadow-lg overflow-hidden'
    : 'border-2 border-gray-300 rounded-xl bg-gradient-to-br from-gray-50 via-white to-gray-50 shadow-inner overflow-hidden'

  return (
    <div style={{ width: '100%', height: directionId === 'semantic-parsing' ? '1100px' : '1400px' }} className={containerClass}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodeClick={onNodeClick}
        nodeTypes={nodeTypes}
        fitView
        fitViewOptions={{ padding: 0.3, maxZoom: 1.2, minZoom: 0.3 }}
        defaultEdgeOptions={{
          type: 'smoothstep',
          animated: true,
        }}
        connectionLineStyle={{ stroke: edgeColor, strokeWidth: 2 }}
        minZoom={0.2}
        maxZoom={2}
      >
        <Background 
          gap={20} 
          size={1}
          color="#cbd5e1"
        />
        <Controls 
          className="bg-white border border-gray-300 rounded-lg shadow-md"
          showInteractive={false}
        />
        <MiniMap 
          className="bg-white border border-gray-300 rounded-lg shadow-md"
          nodeColor={(node) => {
            if (node.type === 'input') return '#10b981'
            if (node.type === 'output') return '#3b82f6'
            if (node.type === 'core') return '#9333ea'
            if (node.type === 'executor') return '#f97316'
            if (node.type === 'research-point') return '#6366f1'
            if (node.type === 'process') return '#06b6d4'
            return '#6b7280'
          }}
          maskColor="rgba(0, 0, 0, 0.1)"
        />
      </ReactFlow>
    </div>
  )
}

export default FlowDiagram

