import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom'
import FlowDiagram from '../components/FlowDiagram'
import { researchDirections } from '../data/researchData'

function Home() {
  const { t, i18n } = useTranslation()
  const navigate = useNavigate()
  const lang = i18n.language as 'zh' | 'en'

  return (
    <div className="space-y-12">
      <div className="text-center mb-8">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">{t('home.title')}</h2>
        <p className="text-lg text-gray-600">{t('home.subtitle')}</p>
      </div>

      {researchDirections.map((direction) => (
        <div key={direction.id} className="mb-12">
          <div className="mb-6 flex items-center justify-between">
            <div>
              <h3 className="text-3xl font-bold text-gray-800 mb-2">
                {direction.title[lang]}
              </h3>
              <p className="text-gray-600 text-lg">{direction.description[lang]}</p>
            </div>
            <button
              onClick={() => navigate(`/research/${direction.id}`)}
              className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors font-medium"
            >
              {t('research.viewDetails')}
            </button>
          </div>
          <FlowDiagram diagram={direction.flowDiagram} directionId={direction.id} />
        </div>
      ))}
    </div>
  )
}

export default Home

