import { useParams, useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import ResearchCard from '../components/ResearchCard'
import FlowDiagram from '../components/FlowDiagram'
import DocumentIntelligenceDiagram from '../components/DocumentIntelligenceDiagram'
import SemanticParsingDiagram from '../components/SemanticParsingDiagram'
import { researchDirections } from '../data/researchData'

function ResearchDirection() {
  const { directionId } = useParams<{ directionId: string }>()
  const navigate = useNavigate()
  const { i18n, t } = useTranslation()

  const direction = researchDirections.find((d) => d.id === directionId)

  if (!direction) {
    return (
      <div className="text-center py-12">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Direction not found</h2>
        <button
          onClick={() => navigate('/')}
          className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
        >
          {t('research.back')}
        </button>
      </div>
    )
  }

  const lang = i18n.language as 'zh' | 'en'

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between mb-6">
        <button
          onClick={() => navigate('/')}
          className="px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition-colors"
        >
          ← {t('research.back')}
        </button>
      </div>

      <div className="bg-white rounded-lg shadow-md p-8 mb-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">{direction.title[lang]}</h2>
        <p className="text-gray-600 text-lg mb-6">{direction.description[lang]}</p>
        {direction.id === 'document-intelligence' ? (
          <DocumentIntelligenceDiagram direction={direction} />
        ) : direction.id === 'semantic-parsing' ? (
          <SemanticParsingDiagram />
        ) : (
          <FlowDiagram diagram={direction.flowDiagram} directionId={direction.id} />
        )}
      </div>

      <div>
        <h3 className="text-2xl font-bold text-gray-800 mb-6">{t('research.researchPoints')}</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {direction.researchPoints.map((point) => (
            <ResearchCard
              key={point.id}
              researchPoint={point}
              directionId={direction.id}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default ResearchDirection

