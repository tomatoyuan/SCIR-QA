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

const nodeTypes: NodeTypes = {
  default: ({ data }: { data: { label: string } }) => (
    <div className="px-4 py-2 bg-white border-2 border-gray-300 rounded-lg shadow-md hover:border-blue-500 transition-colors cursor-pointer">
      <div className="text-sm font-medium text-gray-800">{data.label}</div>
    </div>
  ),
  input: ({ data }: { data: { label: string } }) => (
    <div className="px-4 py-2 bg-green-100 border-2 border-green-500 rounded-lg shadow-md hover:border-green-600 transition-colors cursor-pointer">
      <div className="text-sm font-medium text-gray-800">{data.label}</div>
    </div>
  ),
  output: ({ data }: { data: { label: string } }) => (
    <div className="px-4 py-2 bg-blue-100 border-2 border-blue-500 rounded-lg shadow-md hover:border-blue-600 transition-colors cursor-pointer">
      <div className="text-sm font-medium text-gray-800">{data.label}</div>
    </div>
  ),
}

function FlowDiagram({ diagram, directionId }: FlowDiagramProps) {
  const navigate = useNavigate()
  const { i18n } = useTranslation()

  const onNodeClick = useCallback(
    (_event: React.MouseEvent<Element, MouseEvent>, node: Node) => {
      const researchPointId = diagram.researchPointMapping[node.id]
      if (researchPointId) {
        navigate(`/research/${directionId}/${researchPointId}`)
      } else if (node.id === 'input' || node.id === 'output' || node.id === 'model') {
        // Navigate to direction page for main nodes
        navigate(`/research/${directionId}`)
      }
    },
    [diagram, directionId, navigate]
  )

  const nodes: Node[] = diagram.nodes.map((node) => ({
    id: node.id,
    type: node.type || 'default',
    position: node.position,
    data: {
      label: node.label[i18n.language as 'zh' | 'en'] || node.label.zh,
    },
  }))

  const edges: Edge[] = diagram.edges.map((edge) => ({
    id: edge.id,
    source: edge.source,
    target: edge.target,
    animated: true,
    style: { stroke: '#6366f1' },
  }))

  return (
    <div style={{ width: '100%', height: '600px' }} className="border rounded-lg bg-gray-50">
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodeClick={onNodeClick}
        nodeTypes={nodeTypes}
        fitView
        fitViewOptions={{ padding: 0.2 }}
      >
        <Background />
        <Controls />
        <MiniMap />
      </ReactFlow>
    </div>
  )
}

export default FlowDiagram

