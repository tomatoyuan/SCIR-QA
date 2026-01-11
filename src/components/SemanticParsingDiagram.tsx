import { useNavigate } from 'react-router-dom'

function SemanticParsingDiagram() {
  const navigate = useNavigate()

  const gotoPoint = (pointId: string) => {
    navigate(`/research/semantic-parsing/${pointId}`)
  }

  return (
    <div className="semantic-diagram">
      <div className="container">
        {/* 左侧栏：研究目标 */}
        <div className="col-left box-border">
          <div className="header">
            <h1 className="main-title">研究目标</h1>
            <div className="sub-title-u">提升低资源场景下语义解析效果</div>
          </div>

          {/* 1. 查询 */}
          <div className="dashed-box-left">
            <div className="query-row">
              <div className="vertical-text-left">
                自然
                <br />
                语言
                <br />
                查询
              </div>
              <div className="query-bubble">
                A地区近一个月
                <br />
                人员在位率最高
                <br />
                的单位是哪个？
              </div>
              {/* 交互SVG */}
              <svg
                width="24"
                height="20"
                viewBox="0 0 24 20"
                style={{ flexShrink: 0 }}
              >
                <path
                  d="M4 10h16 M4 10l5-5 M4 10l5 5 M20 10l-5-5 M20 10l-5 5"
                  stroke="#5b9bd5"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                />
              </svg>
              <div className="db-wrapper">
                {/* 数据库SVG */}
                <svg width="28" height="32" viewBox="0 0 30 34" className="svg-icon">
                  <path
                    d="M5 6c0-2.5 4.5-4 10-4s10 1.5 10 4"
                    fill="none"
                    stroke="#3b5a9a"
                    strokeWidth="2"
                  />
                  <path
                    d="M5 6v20c0 2.5 4.5 4 10 4s10-1.5 10-4V6"
                    fill="none"
                    stroke="#3b5a9a"
                    strokeWidth="2"
                  />
                  <ellipse cx="15" cy="6" rx="10" ry="4" fill="#3b5a9a" />
                  <path
                    d="M5 14c0 2.5 4.5 4 10 4s10-1.5 10-4"
                    fill="none"
                    stroke="#3b5a9a"
                    strokeWidth="2"
                  />
                  <path
                    d="M5 21c0 2.5 4.5 4 10 4s10-1.5 10-4"
                    fill="none"
                    stroke="#3b5a9a"
                    strokeWidth="2"
                  />
                </svg>
                <div className="db-text">
                  数据库
                  <br />
                  (静态/动态)
                </div>
              </div>
            </div>
          </div>

          <div className="arrow-wrapper">
            <svg className="arrow-svg" viewBox="0 0 12 12">
              <path d="M6 12L1 5h3V0h4v5h3z" />
            </svg>
          </div>

          {/* 2. 模型 */}
          <div className="model-row">
            {/* 机器人SVG */}
            <svg width="36" height="36" viewBox="0 0 36 36" className="svg-icon">
              <line x1="18" y1="2" x2="18" y2="8" stroke="#3b5a9a" strokeWidth="2" />
              <circle cx="18" cy="2" r="2" fill="#d96d00" />
              <rect x="8" y="8" width="20" height="14" rx="4" fill="#3b5a9a" />
              <circle cx="13" cy="15" r="2" fill="#fff" />
              <circle cx="23" cy="15" r="2" fill="#fff" />
              <path
                d="M6 24h24v6a2 2 0 01-2 2H8a2 2 0 01-2-2v-6z"
                fill="#3b5a9a"
                opacity="0.8"
              />
              <path
                d="M8 14H4v6"
                fill="none"
                stroke="#3b5a9a"
                strokeWidth="2"
                strokeLinecap="round"
              />
              <path
                d="M28 14h4v6"
                fill="none"
                stroke="#3b5a9a"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
            <div className="model-label">安全感知的语义解析模型</div>
          </div>

          <div className="arrow-wrapper">
            <svg className="arrow-svg" viewBox="0 0 12 12">
              <path d="M6 12L1 5h3V0h4v5h3z" />
            </svg>
          </div>

          {/* 3. 代码与推理 */}
          <div className="dashed-box-left">
            <div className="content-split">
              {/* SQL */}
              <div className="left-col-inner">
                <div className="code-block">
                  <span className="kw">SELECT</span> <span className="var">unit</span>
                  <br />
                  <span className="kw">FROM</span> <span className="var">region_a</span>
                  <br />
                  <span className="kw">ORDER BY</span> <span className="var">rate</span>{' '}
                  <span className="kw">DESC</span>
                  <br />
                  <span className="kw">LIMIT</span> <span className="num">1</span>;
                </div>
                <div className="tag-row">
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#4472c4"
                    strokeWidth="2"
                  >
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                    <polyline points="14 2 14 8 20 8" />
                    <line x1="12" y1="18" x2="12" y2="12" />
                    <line x1="9" y1="15" x2="15" y2="15" />
                  </svg>
                  <span>可执行SQL</span>
                </div>
              </div>
              {/* 推理 */}
              <div className="right-col-inner">
                <div className="reasoning-bubble">
                  <div style={{ fontWeight: 'bold', color: '#444' }}>
                    A地区
                    <br />
                    一个月
                    <br />
                    在位率
                  </div>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#1ba193"
                    strokeWidth="2"
                  >
                    <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                    <line x1="3" y1="9" x2="21" y2="9" />
                    <line x1="9" y1="21" x2="9" y2="9" />
                  </svg>
                </div>
                <div className="tag-row" style={{ justifyContent: 'center' }}>
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    stroke="#0099cc"
                    strokeWidth="2"
                    fill="#0099cc"
                  >
                    <circle cx="12" cy="5" r="2.5" />
                    <circle cx="6" cy="18" r="2.5" />
                    <circle cx="18" cy="18" r="2.5" />
                    <line x1="12" y1="5" x2="6" y2="18" />
                    <line x1="12" y1="5" x2="18" y2="18" />
                    <line x1="6" y1="18" x2="18" y2="18" />
                  </svg>
                  <span>程序化推理</span>
                </div>
              </div>
            </div>
          </div>

          <div className="arrow-wrapper">
            <svg className="arrow-svg" viewBox="0 0 12 12">
              <path d="M6 12L1 5h3V0h4v5h3z" />
            </svg>
          </div>

          {/* 4. 执行器 */}
          <div className="exec-wrapper">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#000"
              strokeWidth="2"
            >
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
              <polyline points="14 2 14 8 20 8" />
              <path d="M10 12l4 3l-4 3z" fill="#000" stroke="none" />
            </svg>
            <div className="exec-btn">(执行器)</div>
          </div>

          <div className="arrow-wrapper">
            <svg className="arrow-svg" viewBox="0 0 12 12">
              <path d="M6 12L1 5h3V0h4v5h3z" />
            </svg>
          </div>

          {/* 5. 结果 */}
          <div className="result-row">
            <span>安全结果</span>
            <div className="result-tag">XX单位</div>
            <span style={{ fontWeight: 'normal', fontSize: 11 }}>(非保护信息)</span>
          </div>
        </div>

        {/* 中间栏：核心内容 */}
        <div className="col-center">
          <div className="problem-bar">
            <div className="problem-text">
              (无标注程序)
              <br />
              问题1：程序标注监督弱 ——📈→
            </div>
            <div className="problem-text">
              泛化性/可解释性 (非人工标注程序)
              <br />
              问题2：模型推理一致性差
            </div>
          </div>

          {/* 静态数据 */}
          <div className="center-row">
            <div className="data-label-vertical">静态数据</div>
            <div className="research-quadrant">
              <div
                className="research-box research-box-clickable"
                onClick={() => gotoPoint('weakly-supervised')}
              >
                <div className="rb-title">
                  研究点1：
                  <span style={{ fontWeight: 'normal', color: '#333' }}>
                    弱监督下推理线索驱动的语义解析方法
                  </span>
                </div>
                <div className="rb-header">
                  <span className="tag">自然语言</span>
                  <span className="tag">表格</span>
                  <span className="tag">答案</span>
                </div>
                <div className="dashed-box-center">
                  <div style={{ textAlign: 'center' }}>⬇</div>
                  <div className="flow-row">
                    <div className="flow-block">推理线索发掘</div>
                    <div className="flow-block">自监督学习</div>
                  </div>
                  <div className="flow-row">
                    <div className="flow-block">对比实例构造</div>
                    <div style={{ fontSize: 16 }}>⤴</div>
                  </div>
                </div>
              </div>

              <div
                className="research-box research-box-clickable"
                onClick={() => gotoPoint('logic-consistency')}
              >
                <div className="rb-title">
                  研究点2：
                  <span style={{ fontWeight: 'normal', color: '#333' }}>
                    无监督下逻辑一致性驱动的语义解析方法
                  </span>
                </div>
                <div className="rb-header">
                  <span className="tag">程序</span>
                  <span className="tag">表格</span>
                  <span className="tag">无偏解析</span>
                </div>
                <div className="dashed-box-center">
                  <div style={{ textAlign: 'center' }}>⬇</div>
                  <div className="flow-row">
                    <div className="flow-block">
                      LLM内部偏见
                      <br />
                      发掘与归纳
                    </div>
                    <div style={{ fontSize: 12 }}>→</div>
                    <div className="flow-block">上下文学习</div>
                  </div>
                  <div className="flow-row">
                    <div className="flow-block">实例原型</div>
                    <div style={{ fontSize: 12 }}>→</div>
                    <div className="flow-block">指令微调</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="transition-text">
            推动知识积累迁移、提高模型泛化能力、缓解对程序标注依赖
          </div>

          {/* 动态数据 */}
          <div className="center-row">
            <div className="data-label-vertical">动态数据</div>
            <div className="research-quadrant">
              <div
                className="research-box research-box-clickable"
                onClick={() => gotoPoint('sql-combinatorial')}
              >
                <div className="rb-title">
                  研究点3：
                  <span style={{ fontWeight: 'normal', color: '#333' }}>
                    面向SQL组合泛化的持续语义解析方法
                  </span>
                </div>
                <div className="rb-header">
                  <span className="tag">自然语言</span>
                  <span className="tag">数据库</span>
                  <span className="tag">答案</span>
                </div>
                <div className="dashed-box-center">
                  <div style={{ textAlign: 'center' }}>⬇</div>
                  <div
                    style={{
                      background: '#cfe2f3',
                      padding: 4,
                      textAlign: 'center',
                      borderRadius: 4,
                      marginBottom: 5,
                      fontSize: 11,
                    }}
                  >
                    基于LLM记忆重建
                  </div>
                  <div className="flow-row">
                    <div className="flow-block">
                      📖 记忆回放
                      <br />
                      知识传递
                    </div>
                    <div style={{ fontSize: 16 }}>🔄</div>
                    <div className="flow-block">
                      语义解析
                      <br />
                      模型
                    </div>
                  </div>
                </div>
              </div>

              <div
                className="research-box research-box-clickable"
                onClick={() => gotoPoint('parameter-sharing')}
              >
                <div className="rb-title">
                  研究点4：
                  <span style={{ fontWeight: 'normal', color: '#333' }}>
                    面向参数知识共享的持续语义解析方法
                  </span>
                </div>
                <div className="rb-header">
                  <span className="tag">自然语言</span>
                  <span className="tag">数据库</span>
                  <span className="tag">答案</span>
                </div>
                <div className="dashed-box-center">
                  <div style={{ textAlign: 'center' }}>⬇</div>
                  <div
                    style={{
                      background: '#cfe2f3',
                      padding: 4,
                      textAlign: 'center',
                      borderRadius: 4,
                      marginBottom: 5,
                      fontSize: 11,
                    }}
                  >
                    LLM自适应预热 🔄
                  </div>
                  <div className="flow-row">
                    <div className="flow-block">
                      多专家元
                      <br />
                      学习
                    </div>
                    <div className="flow-block">
                      动态协作
                      <br />
                      推理
                    </div>
                    <div style={{ textAlign: 'center', fontSize: 9 }}>🛢️ SQL</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="problem-bar">
            <div className="problem-text">
              问题3：知识覆盖遗忘快 ——📈→
              <br />
              <span style={{ fontWeight: 'normal', color: '#333', fontSize: 11 }}>
                (少量流式标注程序-数据高效)
              </span>
            </div>
            <div className="problem-text">
              问题4：多模型间协作难
              <br />
              <span style={{ fontWeight: 'normal', color: '#333', fontSize: 11 }}>
                学习效率 (少量流式标注程序-参数高效)
              </span>
            </div>
          </div>
        </div>

        {/* 右侧栏：数据安全 */}
        <div className="col-right">
          <div
            className="problem-text cursor-pointer"
            style={{ textAlign: 'center' }}
            onClick={() => gotoPoint('privacy-aware')}
          >
            (安全对齐数据匮乏)
            <br />
            问题5：数据安全风险高
          </div>

          <div
            className="box-border cursor-pointer"
            style={{ flex: 1, display: 'flex', flexDirection: 'column' }}
            onClick={() => gotoPoint('privacy-aware')}
          >
            <div
              className="rb-title cursor-pointer hover:text-blue-700 transition-colors"
              style={{ textAlign: 'center' }}
              onClick={() => gotoPoint('privacy-aware')}
            >
              研究点5：
              <span style={{ fontWeight: 'normal', color: '#333' }}>
                数据库隐私安全感知的LLM语义解析方法
              </span>
            </div>

            <div className="attack-list">
              <strong>恶意模式归纳</strong>
              <div style={{ margin: '4px 0' }}>直接攻击</div>
              <div style={{ margin: '4px 0' }}>基于先验</div>
              <div style={{ margin: '4px 0' }}>基于推理</div>
              <div>...</div>
            </div>

            <div className="arrow-down">⬇</div>

            <div className="synthesis-box">
              <strong>数据自动合成</strong>
              <br />
              攻击性SQL
              <br />
              反事实推理
              <br />
              SQL-to-Text
            </div>

            <div className="arrow-down">⬇</div>

            <div className="defense-box">
              <strong>安全推理预热</strong>
              <br />
              &amp;
              <br />
              <strong>交替偏好优化</strong>
            </div>

            <div
              style={{
                borderTop: '1px solid #333',
                marginTop: 'auto',
                paddingTop: 10,
                textAlign: 'center',
                fontWeight: 'bold',
                fontSize: 14,
              }}
            >
              <u style={{ textUnderlineOffset: 4 }}>
                防范数据库敏感
                <br />
                数据泄露
              </u>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SemanticParsingDiagram


