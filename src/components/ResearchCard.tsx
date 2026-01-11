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
      className="group relative bg-gradient-to-br from-white to-gray-50 rounded-xl shadow-md p-6 hover:shadow-2xl transition-all duration-300 cursor-pointer border border-gray-200 hover:border-blue-400 hover:-translate-y-1 overflow-hidden"
    >
      {/* 装饰性渐变背景 */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full blur-3xl opacity-0 group-hover:opacity-30 transition-opacity duration-500 -translate-y-16 translate-x-16"></div>
      
      {/* 标题部分 */}
      <div className="relative">
        <div className="flex items-start justify-between mb-3">
          <h3 className="text-xl font-bold text-gray-800 group-hover:text-blue-600 transition-colors duration-300 flex-1 leading-tight">
            {researchPoint.title[lang]}
          </h3>
          <div className="ml-2 text-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </div>
        </div>

        {/* 描述文字 */}
        <p className="text-gray-600 mb-5 line-clamp-3 leading-relaxed text-sm">
          {researchPoint.description[lang]}
        </p>

        {/* 论文数量标签 */}
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800 border border-blue-200">
              <svg className="w-3 h-3 mr-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              {researchPoint.papers.length} {t('research.papers', '篇论文')}
            </span>
          </div>
          
          <div className="flex items-center text-blue-600 font-medium text-sm group-hover:translate-x-1 transition-transform duration-300">
            {t('research.viewDetails')}
          </div>
        </div>
      </div>

      {/* 底部渐变线 */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
    </div>
  )
}

export default ResearchCard

