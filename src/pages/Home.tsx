import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom'
import FlowDiagram from '../components/FlowDiagram'
import DocumentIntelligenceDiagram from '../components/DocumentIntelligenceDiagram'
import SemanticParsingDiagram from '../components/SemanticParsingDiagram'
import { researchDirections } from '../data/researchData'

function Home() {
  const { t, i18n } = useTranslation()
  const navigate = useNavigate()
  const lang = i18n.language as 'zh' | 'en'

  // 在主页上将“文档智能问答”放在“低资源场景下语义解析”之前
  const orderedDirections = [...researchDirections].sort((a, b) => {
    const order: Record<string, number> = {
      'document-intelligence': 0,
      'semantic-parsing': 1,
    }
    return (order[a.id] ?? 99) - (order[b.id] ?? 99)
  })

  return (
    <div className="space-y-16">
      <div className="text-center mb-12">
        <h2 className="text-5xl font-bold text-gray-800 mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          {t('home.title')}
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">{t('home.subtitle')}</p>
      </div>

      {orderedDirections.map((direction, index) => (
        <div key={direction.id} className={`mb-16 ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'} rounded-2xl p-8 shadow-lg`}>
          <div className="mb-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div className="flex-1">
              <h3 className="text-4xl font-bold text-gray-800 mb-3">
                {direction.title[lang]}
              </h3>
              <p className="text-gray-600 text-lg leading-relaxed max-w-4xl">{direction.description[lang]}</p>
            </div>
            <button
              onClick={() => navigate(`/research/${direction.id}`)}
              className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-xl hover:from-blue-600 hover:to-purple-700 transition-all font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 whitespace-nowrap"
            >
              {t('research.viewDetails')} →
            </button>
          </div>
          {direction.id === 'document-intelligence' ? (
            <DocumentIntelligenceDiagram direction={direction} />
          ) : direction.id === 'semantic-parsing' ? (
            <SemanticParsingDiagram />
          ) : (
            <FlowDiagram diagram={direction.flowDiagram} directionId={direction.id} />
          )}
        </div>
      ))}
    </div>
  )
}

export default Home

