import { useNavigate } from 'react-router-dom'

function SemanticParsingDiagram() {
  const navigate = useNavigate()
  
  // 根据base路径设置图片URL
  const baseUrl = import.meta.env.BASE_URL
  const imageUrl = `${baseUrl}text2sql.png`

  const gotoPoint = (pointId: string) => {
    navigate(`/research/semantic-parsing/${pointId}`)
  }

  return (
    <div style={{
      backgroundColor: 'transparent',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      margin: 0,
      fontFamily: 'system-ui, -apple-system, sans-serif',
      width: '100%'
    }}>
      <div className="chart-container" style={{
        position: 'relative',
        width: '100%',
        maxWidth: '1200px',
        height: 'auto',
        borderRadius: '8px',
        overflow: 'hidden',
        background: '#fff',
        lineHeight: 0
      }}>
        {/* 底图层 */}
        <img 
          src={imageUrl}
          alt="Text2SQL Architecture" 
          className="base-img"
          style={{
            width: '100%',
            height: 'auto',
            display: 'block',
            transition: 'filter 0.4s ease, transform 0.4s ease',
            willChange: 'filter, transform'
          }}
        />

        {/* 聚焦卡片层 - 研究点1 */}
        <div 
          className="focus-card card-1" 
          data-label="Point 1: 弱监督推理"
          onClick={() => gotoPoint('weakly-supervised')}
          style={{
            position: 'absolute',
            zIndex: 10,
            borderRadius: '12px',
            backgroundImage: `url(${imageUrl})`,
            backgroundSize: '400% auto',
            backgroundRepeat: 'no-repeat',
            opacity: 0,
            cursor: 'pointer',
            transition: 'opacity 0.2s ease, transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1), box-shadow 0.4s ease, border-color 0.3s ease',
            border: '1px solid rgba(255,255,255,0)',
            left: '31.5%',
            top: '11%',
            width: '25.0%',
            height: '33.6%',
            backgroundPosition: '42% 16.57%'
          }}
        />
        
        {/* 聚焦卡片层 - 研究点2 */}
        <div 
          className="focus-card card-2" 
          data-label="Point 2: 逻辑一致性"
          onClick={() => gotoPoint('logic-consistency')}
          style={{
            position: 'absolute',
            zIndex: 10,
            borderRadius: '12px',
            backgroundImage: `url(${imageUrl})`,
            backgroundSize: '400% auto',
            backgroundRepeat: 'no-repeat',
            opacity: 0,
            cursor: 'pointer',
            transition: 'opacity 0.2s ease, transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1), box-shadow 0.4s ease, border-color 0.3s ease',
            border: '1px solid rgba(255,255,255,0)',
            left: '57.8%',
            top: '11%',
            width: '25.0%',
            height: '33.8%',
            backgroundPosition: '77.07% 16.62%'
          }}
        />

        {/* 聚焦卡片层 - 研究点3 */}
        <div 
          className="focus-card card-3" 
          data-label="Point 3: 组合泛化"
          onClick={() => gotoPoint('sql-combinatorial')}
          style={{
            position: 'absolute',
            zIndex: 10,
            borderRadius: '12px',
            backgroundImage: `url(${imageUrl})`,
            backgroundSize: '400% auto',
            backgroundRepeat: 'no-repeat',
            opacity: 0,
            cursor: 'pointer',
            transition: 'opacity 0.2s ease, transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1), box-shadow 0.4s ease, border-color 0.3s ease',
            border: '1px solid rgba(255,255,255,0)',
            left: '31.5%',
            top: '57%',
            width: '25.0%',
            height: '33.8%',
            backgroundPosition: '42% 85.9%'
          }}
        />

        {/* 聚焦卡片层 - 研究点4 */}
        <div 
          className="focus-card card-4" 
          data-label="Point 4: 参数共享"
          onClick={() => gotoPoint('parameter-sharing')}
          style={{
            position: 'absolute',
            zIndex: 10,
            borderRadius: '12px',
            backgroundImage: `url(${imageUrl})`,
            backgroundSize: '400% auto',
            backgroundRepeat: 'no-repeat',
            opacity: 0,
            cursor: 'pointer',
            transition: 'opacity 0.2s ease, transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1), box-shadow 0.4s ease, border-color 0.3s ease',
            border: '1px solid rgba(255,255,255,0)',
            left: '57.8%',
            top: '57%',
            width: '25.0%',
            height: '33.8%',
            backgroundPosition: '77.07% 85.9%'
          }}
        />

        {/* 聚焦卡片层 - 研究点5 */}
        <div 
          className="focus-card card-5" 
          data-label="Point 5: 隐私安全"
          onClick={() => gotoPoint('privacy-aware')}
          style={{
            position: 'absolute',
            zIndex: 10,
            borderRadius: '12px',
            backgroundImage: `url(${imageUrl})`,
            backgroundSize: '740.74% auto',
            backgroundRepeat: 'no-repeat',
            opacity: 0,
            cursor: 'pointer',
            transition: 'opacity 0.2s ease, transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1), box-shadow 0.4s ease, border-color 0.3s ease',
            border: '1px solid rgba(255,255,255,0)',
            left: '85.0%',
            top: '11%',
            width: '13.5%',
            height: '76.0%',
            backgroundPosition: '98.27% 50.5%'
          }}
        />

        {/* 内联样式标签用于hover效果和伪元素 */}
        <style dangerouslySetInnerHTML={{__html: `
          .chart-container:has(.focus-card:hover) .base-img {
            filter: brightness(0.35) blur(2px);
            transform: scale(1);
          }

          .focus-card:hover {
            opacity: 1 !important;
            z-index: 20;
            transform: scale(1.05);
            box-shadow: 0 20px 40px -10px rgba(0, 0, 0, 0.8), inset 0 0 0 3px rgba(64, 158, 255, 0.7);
            border: 3px solid rgba(64, 158, 255, 1) !important;
          }

          .focus-card::after {
            content: attr(data-label);
            position: absolute;
            top: -45px;
            left: 50%;
            transform: translateX(-50%) translateY(15px);
            background: rgba(0, 0, 0, 0.7);
            backdrop-filter: blur(5px);
            border: 1px solid rgba(255, 255, 255, 0.2);
            color: #fff;
            padding: 6px 14px;
            border-radius: 6px;
            font-size: 13px;
            white-space: nowrap;
            opacity: 0;
            pointer-events: none;
            transition: all 0.3s ease 0.1s;
            line-height: normal;
          }

          .focus-card:hover::after {
            opacity: 1;
            transform: translateX(-50%) translateY(0);
          }
        `}} />
      </div>
    </div>
  )
}

export default SemanticParsingDiagram


