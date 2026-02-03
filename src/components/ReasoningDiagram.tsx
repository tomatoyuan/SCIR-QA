import { useNavigate } from 'react-router-dom'

function ReasoningDiagram() {
  const navigate = useNavigate()
  
  const baseUrl = import.meta.env.BASE_URL
  const imageUrl = `${baseUrl}pic_reason.png`

  const gotoPoint = (pointId: string) => {
    navigate(`/research/reasoning/${pointId}`)
  }

  // Adjusted coordinates based on the provided image
  const points = [
    { 
      id: 'rp1', 
      label: '研究点1: 推理过程量化分析', 
      left: '32.5%', 
      top: '22.5%', 
      width: '65%', 
      height: '21%', 
      bgPos: '92.86% 28.48%',
      bgSize: '153.85% auto' 
    },
    { 
      id: 'rp2', 
      label: '研究点2: 分布外空间知识对齐', 
      left: '32.5%', 
      top: '45.5%', 
      width: '32%', 
      height: '22%', 
      bgPos: '47.79% 58.33%',
      bgSize: '312.5% auto'
    },
    { 
      id: 'rp3', 
      label: '研究点3: 比较式多模态推理学习', 
      left: '65.5%', 
      top: '45.5%', 
      width: '32%', 
      height: '22%', 
      bgPos: '96.32% 58.33%',
      bgSize: '312.5% auto'
    },
    { 
      id: 'rp4', 
      label: '研究点4: 多模态注意力开关', 
      left: '32.5%', 
      top: '68%', 
      width: '32%', 
      height: '22%', 
      bgPos: '47.79% 87.18%',
      bgSize: '312.5% auto' 
    },
    { 
      id: 'rp5', 
      label: '研究点5: 多模态隐式思维链', 
      left: '65.5%', 
      top: '68%', 
      width: '32%', 
      height: '22%', 
      bgPos: '96.32% 87.18%',
      bgSize: '312.5% auto'
    },
  ]

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
        {/* Base Image layer */}
        <img 
          src={imageUrl}
          alt="Reasoning Architecture" 
          className="base-img"
          style={{
            width: '100%',
            height: 'auto',
            display: 'block',
            transition: 'filter 0.4s ease, transform 0.4s ease',
            willChange: 'filter, transform'
          }}
        />

        {/* Hover Styles */}
        <style dangerouslySetInnerHTML={{
          __html: `
            .focus-card:hover {
              opacity: 1 !important;
              transform: scale(1.02) translateY(-2px);
              box-shadow: 0 10px 30px rgba(0,0,0,0.15), 0 0 0 1px rgba(255,255,255,0.5);
              border-color: rgba(255,255,255,0.8) !important;
              z-index: 20 !important;
            }
            .focus-card:active {
              transform: scale(0.98);
            }
            .focus-card::after {
              content: attr(data-label);
              position: absolute;
              bottom: 100%;
              left: 50%;
              transform: translateX(-50%) translateY(-10px);
              background: rgba(0,0,0,0.8);
              color: white;
              padding: 6px 12px;
              border-radius: 6px;
              font-size: 14px;
              white-space: nowrap;
              pointer-events: none;
              opacity: 0;
              transition: opacity 0.2s, transform 0.2s;
            }
            .focus-card:hover::after {
              opacity: 1;
              transform: translateX(-50%) translateY(-15px);
            }
          `
        }} />

        {/* Research Points */}
        {points.map((p) => (
            <div 
            key={p.id}
            className="focus-card" 
            data-label={p.label}
            onClick={() => gotoPoint(p.id)}
            style={{
                position: 'absolute',
                zIndex: 10,
                borderRadius: '12px',
                backgroundImage: `url(${imageUrl})`,
                /* Note: backgroundSize should generally match the ratio of the container width to the slice width if using that technique, 
                   or just 'cover' if it's simpler. Existing code used '400% auto'. 
                   For now using 100% auto assuming we crop from the same scale? 
                   Actually keeping it consistent with 'cover' might be safer if we don't know the math.
                   But to match the "pop out" effect correctly, one needs to calculate:
                   backgroundSize = (100 / width_percentage) * 100 + "%"
                   backgroundPosition = (left_percentage / (100 - width_percentage)) * 100 + "%" ... complex math.
                   I'll leave backgroundSize as '100% 100%' for now which will just stretch the image in the card (incorrect visual),
                   but allows the user to see it works.
                */
                backgroundSize: p.bgSize, 
                backgroundRepeat: 'no-repeat',
                opacity: 0, 
                cursor: 'pointer',
                transition: 'opacity 0.2s ease, transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1), box-shadow 0.4s ease, border-color 0.3s ease',
                border: '1px solid rgba(255,255,255,0)',
                left: p.left,
                top: p.top,
                width: p.width,
                height: p.height,
                backgroundPosition: p.bgPos
            }}
            />
        ))}
      </div>
    </div>
  )
}

export default ReasoningDiagram
