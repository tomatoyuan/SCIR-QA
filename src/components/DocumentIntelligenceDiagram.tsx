import { useNavigate } from 'react-router-dom'
import type { ResearchDirection } from '../data/researchData'

interface DocumentIntelligenceDiagramProps {
  direction: ResearchDirection
}

const researchPointMapping = [
  'reasoning-data',
  'positioning',
  'retrieval-augmentation',
  'reinforcement-learning',
]

function DocumentIntelligenceDiagram({ direction }: DocumentIntelligenceDiagramProps) {
  const navigate = useNavigate()

  const handleNavigate = (researchPointId: string) => {
    navigate(`/research/${direction.id}/${researchPointId}`)
  }

  return (
    <div className="doc-main-container">
      <div className="column col-left">
        <h1>研究目标</h1>
        <div className="goal-desc">
          提升文档智能背景下
          <br />
          <span className="hl-blue">复杂布局文档</span>和
          <span className="hl-blue">多页文档</span>的问答能力
        </div>

        <div className="scenario-box sb-green">
          <div className="top-row">
            <div className="doc-icon-single">
              <div className="doc-line dl-1" />
              <div className="doc-line dl-2" />
              <div className="doc-line dl-3" />
              <div className="doc-line dl-4" />
              <div className="doc-highlight" />
            </div>
            <div className="question-wrapper">
              <div className="q-box">
                如何有效理解
                <br />
                复杂布局文档？
              </div>
              <div className="pain-points">证据遗漏，定位不准，推理不足……</div>
            </div>
          </div>
          <div className="arrow-layout">
            <div className="arrow-text-left">跨区域</div>
            <div className="thick-arrow-down">
              <div className="ta-shaft" />
              <div className="ta-head" />
            </div>
            <div className="arrow-text-right">推理</div>
          </div>
          <div className="process-row">
            <div className="black-box bb-wide">
              定位跨区域
              <br />
              证据信息
            </div>
            <div className="small-black-arrow">→</div>
            <div className="black-box bb-normal">结构化输出</div>
          </div>
        </div>

        <div className="transition-arrow">
          <div className="thick-arrow-down">
            <div className="ta-shaft ta-shaft-light" />
            <div className="ta-head ta-head-light" />
          </div>
        </div>

        <div className="scenario-box sb-orange">
          <div className="top-row">
            <div className="doc-stack-wrapper">
              <div className="doc-page dp-1" />
              <div className="doc-page dp-2" />
              <div className="doc-page dp-3">
                <div className="doc-line dl-2 doc-line-wide" />
                <div className="doc-line dl-3 doc-line-wide" />
              </div>
            </div>
            <div className="question-wrapper">
              <div className="q-box">
                如何有效理解
                <br />
                多页文档？
              </div>
              <div className="pain-points">信息冗余，定位不准，推理不足，低效……</div>
            </div>
          </div>
          <div className="arrow-layout">
            <div className="arrow-text-left">
              <div>粗粒度检索</div>
              <div className="arrow-subtext">细粒度tokens筛选</div>
            </div>
            <div className="thick-arrow-down">
              <div className="ta-shaft tall" />
              <div className="ta-head" />
            </div>
            <div className="arrow-text-right">
              <div>跨页</div>
              <div>推理</div>
            </div>
          </div>
          <div className="process-row">
            <div className="black-box bb-wide">
              定位跨页证据
              <br />
              信息
            </div>
            <div className="small-black-arrow">→</div>
            <div className="black-box bb-normal">结构化输出</div>
          </div>
        </div>
      </div>

      <div className="connector-col">
        <div className="arrow-lg-body" />
        <div className="arrow-lg-head" />
      </div>

      <div className="column col-center">
        <h1>研究方法</h1>
        <div className="grid-methods">
          {/* P1: 构造文档推理数据 */}
          <div
            className="method-card"
            role="button"
            tabIndex={0}
            onClick={() => handleNavigate(researchPointMapping[0])}
            onKeyDown={(e) => e.key === 'Enter' && handleNavigate(researchPointMapping[0])}
          >
            <h2>研究点1：构造文档推理数据</h2>
            <div className="p1-canvas">
              {/* 学生模型 */}
              <div className="p1-student">学生模型</div>
              {/* 结构化输出 */}
              <div className="p1-output">结构化输出</div>
              {/* 箭头: 学生 -> 输出 */}
              <div
                className="arrow-line"
                style={{ left: 95, top: 14, width: 65, height: 1.5 }}
              >
                <div
                  className="arrow-head"
                  style={{
                    left: 0,
                    top: -3,
                    borderTop: '4px solid transparent',
                    borderBottom: '4px solid transparent',
                    borderRight: '8px solid #000',
                  }}
                />
              </div>
              {/* 教师区域 */}
              <div className="p1-teacher-area">
                <div className="p1-cot">
                  思维链数据
                  {/* 箭头: 虚线框 -> 学生 */}
                  <div
                    className="arrow-line"
                    style={{
                      top: -22,
                      left: '50%',
                      width: 1.5,
                      height: 20,
                      transform: 'translateX(-50%)',
                    }}
                  >
                    <div
                      className="arrow-head"
                      style={{
                        top: 0,
                        left: -3,
                        borderLeft: '4px solid transparent',
                        borderRight: '4px solid transparent',
                        borderBottom: '8px solid #000',
                      }}
                    />
                  </div>
                </div>
                {/* 教师模型图标和文字 */}
                <svg width="24" height="24" viewBox="0 0 24 24" fill="#7f7f7f">
                  <rect x="3" y="6" width="18" height="14" rx="3" />
                  <circle cx="8" cy="11" r="1.5" fill="white" />
                  <circle cx="16" cy="11" r="1.5" fill="white" />
                  <path
                    d="M12 6V3M10 3h4"
                    stroke="#7f7f7f"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
                <div style={{ fontSize: 13, color: '#000', marginTop: 2 }}>教师模型</div>
                <div
                  className="arrow-line"
                  style={{ bottom: -12, width: 2, height: 12 }}
                />
              </div>
              {/* 模板或样例 */}
              <div className="p1-template">
                模板
                <br />
                或
                <br />
                样例
              </div>
              {/* 箭头: 模板 -> 教师 */}
              <div
                className="arrow-line"
                style={{ left: 85, bottom: 45, width: 35, height: 1.5 }}
              >
                <div
                  className="arrow-head"
                  style={{
                    right: 0,
                    top: -3,
                    borderTop: '4px solid transparent',
                    borderBottom: '4px solid transparent',
                    borderLeft: '8px solid #000',
                  }}
                />
              </div>
            </div>
          </div>

          {/* P2: 增强模型定位能力 */}
          <div
            className="method-card"
            role="button"
            tabIndex={0}
            onClick={() => handleNavigate(researchPointMapping[1])}
            onKeyDown={(e) => e.key === 'Enter' && handleNavigate(researchPointMapping[1])}
          >
            <h2>研究点2：增强模型定位能力</h2>
            <div className="p2-container">
              {/* 左侧虚线组 */}
              <div className="p2-left-dash">
                <div className="p2-box-blue">跨模态特征</div>
                <div className="arr-up-sm" />
                <div className="p2-box-grey">跨模态注意力机制</div>
                <div style={{ display: 'flex', width: '100%', justifyContent: 'space-around' }}>
                  <div className="arr-up-sm" />
                  <div className="arr-up-sm" />
                </div>
                <div className="p2-inputs">
                  <div className="p2-box-yellow">文本</div>
                  <div className="p2-box-blue">视觉</div>
                </div>
              </div>
              {/* 中间宽箭头 */}
              <div
                style={{
                  width: 30,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 4px',
                }}
              >
                <div
                  style={{
                    width: '100%',
                    height: 10,
                    background: '#ccc',
                    position: 'relative',
                  }}
                >
                  <div
                    style={{
                      position: 'absolute',
                      right: -8,
                      top: -5,
                      width: 0,
                      height: 0,
                      borderTop: '10px solid transparent',
                      borderBottom: '10px solid transparent',
                      borderLeft: '10px solid #ccc',
                    }}
                  />
                </div>
              </div>
              {/* 右侧流程 */}
              <div className="p2-right-col">
                <div className="p2-box-purple">文本引导</div>
                <div className="arr-down-sm" />
                <div className="p2-box-llm">LLM</div>
                <div className="arr-up-sm" />
                <div className="p2-box-purple">平衡注意力</div>
              </div>
            </div>
          </div>

          {/* P3: 设计检索增强方法 */}
          <div
            className="method-card"
            role="button"
            tabIndex={0}
            onClick={() => handleNavigate(researchPointMapping[2])}
            onKeyDown={(e) => e.key === 'Enter' && handleNavigate(researchPointMapping[2])}
          >
            <h2>研究点3：设计检索增强方法</h2>
            <div className="p3-container">
              {/* 文档图片 */}
              <div className="p3-doc">
                文档
                <br />
                图片
              </div>
              {/* 箭头 */}
              <div
                className="arrow-line"
                style={{ position: 'relative', width: 20, height: 1.5 }}
              >
                <div
                  className="arrow-head"
                  style={{
                    right: 0,
                    top: -3,
                    borderTop: '4px solid transparent',
                    borderBottom: '4px solid transparent',
                    borderLeft: '6px solid #000',
                  }}
                />
              </div>
              {/* 中间栈 */}
              <div className="p3-dash-group">
                <div className="p3-item p3-ocr">
                  <span style={{ fontWeight: 'bold', fontFamily: 'sans-serif' }}>OCR</span>
                  文本检索
                </div>
                <div className="p3-item p3-multi">
                  多模态相似度
                  <br />
                  检索
                </div>
                <div className="p3-item p3-key">
                  关键词置信度
                  <br />
                  检索
                </div>
              </div>
              {/* 箭头 */}
              <div
                className="arrow-line"
                style={{ position: 'relative', width: 20, height: 1.5 }}
              >
                <div
                  className="arrow-head"
                  style={{
                    right: 0,
                    top: -3,
                    borderTop: '4px solid transparent',
                    borderBottom: '4px solid transparent',
                    borderLeft: '6px solid #000',
                  }}
                />
              </div>
              {/* 答案生成 */}
              <div className="p3-answer">答案生成</div>
            </div>
          </div>

          {/* P4: 设计强化学习方法 */}
          <div
            className="method-card"
            role="button"
            tabIndex={0}
            onClick={() => handleNavigate(researchPointMapping[3])}
            onKeyDown={(e) => e.key === 'Enter' && handleNavigate(researchPointMapping[3])}
          >
            <h2>研究点4：设计强化学习方法</h2>
            <div className="p4-container">
              {/* 左侧 */}
              <div className="p4-data-gen">
                强化
                <br />
                学习
                <br />
                数据
                <br />
                生成
              </div>
              {/* 箭头 */}
              <div
                className="arrow-line"
                style={{ position: 'relative', width: 15, height: 1.5 }}
              >
                <div
                  className="arrow-head"
                  style={{
                    right: 0,
                    top: -3,
                    borderTop: '4px solid transparent',
                    borderBottom: '4px solid transparent',
                    borderLeft: '6px solid #000',
                  }}
                />
              </div>
              {/* 中间 */}
              <div className="p4-mid-stack">
                <div style={{ fontSize: 12 }}>参考模型</div>
                <div
                  style={{
                    height: 15,
                    width: 1.5,
                    background: '#000',
                    position: 'relative',
                  }}
                >
                  <div
                    style={{
                      position: 'absolute',
                      top: 0,
                      left: -2,
                      borderLeft: '3px solid transparent',
                      borderRight: '3px solid transparent',
                      borderBottom: '4px solid #000',
                    }}
                  />
                  <div
                    style={{
                      position: 'absolute',
                      bottom: 0,
                      left: -2,
                      borderLeft: '3px solid transparent',
                      borderRight: '3px solid transparent',
                      borderTop: '4px solid #000',
                    }}
                  />
                  <div
                    style={{
                      position: 'absolute',
                      left: 4,
                      top: 2,
                      fontSize: 10,
                    }}
                  >
                    KL
                  </div>
                </div>
                <div className="p4-policy">
                  文档理解
                  <br />
                  策略模型
                </div>
                <div
                  style={{
                    height: 15,
                    width: 1.5,
                    background: '#000',
                    position: 'relative',
                  }}
                >
                  <div
                    style={{
                      position: 'absolute',
                      top: 0,
                      left: -2,
                      borderLeft: '3px solid transparent',
                      borderRight: '3px solid transparent',
                      borderBottom: '4px solid #000',
                    }}
                  />
                  <div
                    style={{
                      position: 'absolute',
                      bottom: 0,
                      left: -2,
                      borderLeft: '3px solid transparent',
                      borderRight: '3px solid transparent',
                      borderTop: '4px solid #000',
                    }}
                  />
                </div>
                <div style={{ fontSize: 12 }}>奖励模型</div>
              </div>
              {/* 箭头 */}
              <div
                className="arrow-line"
                style={{ position: 'relative', width: 15, height: 1.5 }}
              >
                <div
                  className="arrow-head"
                  style={{
                    right: 0,
                    top: -3,
                    borderTop: '4px solid transparent',
                    borderBottom: '4px solid transparent',
                    borderLeft: '6px solid #000',
                  }}
                />
              </div>
              {/* 右侧奖励列表 */}
              <div className="p4-rewards-box">
                <div className="p4-reward-item">格式奖励</div>
                <div className="p4-reward-item">证据页奖励</div>
                <div className="p4-reward-item">答案奖励</div>
                <div className="p4-reward-item">一致性奖励</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="connector-col">
        <div className="arrow-lg-body" />
        <div className="arrow-lg-head" />
      </div>

      <div className="column col-right">
        <h1>应用研究</h1>

        <div className="app-section">
          <div className="app-title">效率</div>
          <div className="app-box-container">
            <div className="app-item app-pink">冗余视觉信息裁剪</div>
            <div className="arr-down-sm" />
            <div className="app-item app-blue">关键tokens融合</div>
            <div className="arr-down-sm" />
            <div className="app-item app-orange">多专家模型</div>
          </div>
        </div>

        <div className="app-section">
          <div className="app-title">性能</div>
          <div className="app-box-container">
            <div className="app-item app-grey">数据增强</div>
            <div className="arr-down-sm" />
            <div className="app-item app-green">多模态信息对齐与融合</div>
            <div className="arr-down-sm" />
            <div className="app-item app-yellow">多智能体</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DocumentIntelligenceDiagram

