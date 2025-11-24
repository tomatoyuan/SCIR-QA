import { useParams, useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import PaperList from '../components/PaperList'
import { researchDirections } from '../data/researchData'

function ResearchPoint() {
  const { directionId, pointId } = useParams<{ directionId: string; pointId: string }>()
  const navigate = useNavigate()
  const { i18n, t } = useTranslation()

  const direction = researchDirections.find((d) => d.id === directionId)
  const researchPoint = direction?.researchPoints.find((p) => p.id === pointId)

  if (!direction || !researchPoint) {
    return (
      <div className="text-center py-12">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Research point not found</h2>
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
          onClick={() => navigate(`/research/${directionId}`)}
          className="px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition-colors"
        >
          ← {t('research.back')}
        </button>
      </div>

      <div className="bg-white rounded-lg shadow-md p-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">
          {researchPoint.title[lang]}
        </h2>
        <p className="text-gray-600 text-lg mb-8">{researchPoint.description[lang]}</p>

        <PaperList papers={researchPoint.papers} />

        {researchPoint.demos && researchPoint.demos.length > 0 && (
          <div className="mt-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">{t('research.demos')}</h3>
            <div className="space-y-4">
              {researchPoint.demos.map((demo, index) => (
                <div
                  key={index}
                  className="bg-gray-50 rounded-lg p-6 border border-gray-200"
                >
                  <h4 className="text-lg font-semibold text-gray-800 mb-2">{demo.title}</h4>
                  {demo.description && (
                    <p className="text-gray-600 mb-4">
                      {demo.description[lang]}
                    </p>
                  )}
                  <a
                    href={demo.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block px-4 py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition-colors"
                  >
                    {t('research.demo')} →
                  </a>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default ResearchPoint

