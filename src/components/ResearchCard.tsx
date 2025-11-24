import { useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import type { ResearchPoint } from '../data/researchData'

interface ResearchCardProps {
  researchPoint: ResearchPoint
  directionId: string
}

function ResearchCard({ researchPoint, directionId }: ResearchCardProps) {
  const navigate = useNavigate()
  const { i18n, t } = useTranslation()

  const handleClick = () => {
    navigate(`/research/${directionId}/${researchPoint.id}`)
  }

  const lang = i18n.language as 'zh' | 'en'

  return (
    <div
      onClick={handleClick}
      className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow cursor-pointer border border-gray-200 hover:border-blue-500"
    >
      <h3 className="text-xl font-bold text-gray-800 mb-3">
        {researchPoint.title[lang]}
      </h3>
      <p className="text-gray-600 mb-4 line-clamp-3">
        {researchPoint.description[lang]}
      </p>
      <div className="flex items-center text-blue-600 font-medium">
        {t('research.viewDetails')} →
      </div>
    </div>
  )
}

export default ResearchCard

