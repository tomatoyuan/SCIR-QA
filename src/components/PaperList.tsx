import { useTranslation } from 'react-i18next'
import type { Paper } from '../data/researchData'

interface PaperListProps {
  papers: Paper[]
}

function PaperList({ papers }: PaperListProps) {
  const { t } = useTranslation()

  const resolveThumbnailSrc = (thumbnail?: string) => {
    if (!thumbnail) return undefined
    // 绝对 URL（如 https:// 或 http://）直接使用
    if (/^https?:\/\//.test(thumbnail)) return thumbnail

    const base = import.meta.env.BASE_URL || '/'
    const cleanBase = base.endsWith('/') ? base.slice(0, -1) : base

    // 以 /images 开头的路径（来自 public/images），需要拼上 base，适配 GitHub Pages 的 /SCIR-QA/ 前缀
    if (thumbnail.startsWith('/')) {
      return `${cleanBase}${thumbnail}`
    }

    // 其它相对路径，直接拼 base
    return `${cleanBase}/${thumbnail}`
  }

  return (
    <div className="space-y-6">
      <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
        <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          {t('research.papers')}
        </span>
        <span className="ml-3 text-sm font-normal text-gray-500">
          ({papers.length})
        </span>
      </h3>
      {papers.map((paper, index) => (
        <article
          key={index}
          className="group relative bg-gradient-to-br from-white via-white to-blue-50/30 rounded-2xl shadow-md border border-gray-200 overflow-hidden hover:shadow-2xl hover:border-blue-300 transition-all duration-300 hover:-translate-y-1"
        >
          {/* 装饰性渐变背景 */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-blue-100/50 via-purple-100/50 to-pink-100/50 rounded-full blur-3xl opacity-0 group-hover:opacity-40 transition-opacity duration-700 -translate-y-32 translate-x-32"></div>
          
          {/* 顶部彩色条 */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>

          <div className="relative flex flex-col md:flex-row md:items-center px-4 md:px-6">
            {/* 左侧论文配图区域 */}
            <div className="md:w-56 lg:w-64 h-48 md:h-40 lg:h-44 bg-gradient-to-br from-gray-50 to-gray-100 flex-shrink-0 flex items-center justify-center overflow-hidden rounded-lg my-4 md:my-4 md:mr-6 border border-gray-200 group-hover:border-blue-200 transition-colors duration-300">
              {resolveThumbnailSrc(paper.thumbnail) ? (
                <img
                  src={resolveThumbnailSrc(paper.thumbnail)}
                  alt={paper.title}
                  className="w-full h-full object-contain object-center p-4 group-hover:scale-105 transition-transform duration-300"
                />
              ) : (
                <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-gray-50 to-gray-200 text-gray-400 text-sm px-4">
                  <span className="text-4xl mb-2 group-hover:scale-110 transition-transform duration-300">📄</span>
                  <span className="text-center leading-snug">
                    Add figure from
                    <br />
                    your paper here
                  </span>
                </div>
              )}
            </div>

            {/* 右侧文字信息区域 */}
            <div className="flex-1 p-5 md:p-6 flex flex-col justify-between">
              <div>
                <h4 className="text-lg md:text-xl font-bold text-gray-900 mb-3 leading-tight group-hover:text-blue-700 transition-colors duration-300">
                  {paper.title}
                </h4>
                
                <div className="space-y-2 mb-4">
                  <p className="text-gray-700 text-sm md:text-base flex items-start">
                    <svg className="w-4 h-4 mr-2 mt-0.5 text-gray-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                    <span className="font-medium text-gray-500 mr-1.5">Authors:</span>
                    <span className="text-gray-700">{paper.authors}</span>
                  </p>
                  
                  <div className="flex items-center flex-wrap gap-2">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-r from-blue-100 to-blue-200 text-blue-800 border border-blue-300">
                      {paper.venue}
                    </span>
                    {paper.year && (
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-700 border border-gray-200">
                        <svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        {paper.year}
                      </span>
                    )}
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mt-3 md:mt-4">
                {paper.links.paper && (
                  <a
                    href={paper.links.paper}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/btn inline-flex items-center px-4 py-2 rounded-lg bg-gradient-to-r from-blue-500 to-blue-600 text-white text-sm font-medium hover:from-blue-600 hover:to-blue-700 shadow-sm hover:shadow-md transition-all duration-200 transform hover:scale-105"
                  >
                    <svg className="w-4 h-4 mr-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    {t('research.paper')}
                  </a>
                )}
                {paper.links.website && (
                  <a
                    href={paper.links.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/btn inline-flex items-center px-4 py-2 rounded-lg bg-gradient-to-r from-sky-500 to-sky-600 text-white text-sm font-medium hover:from-sky-600 hover:to-sky-700 shadow-sm hover:shadow-md transition-all duration-200 transform hover:scale-105"
                  >
                    <svg className="w-4 h-4 mr-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                    </svg>
                    {t('research.website')}
                  </a>
                )}
                {paper.links.code && (
                  <a
                    href={paper.links.code}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/btn inline-flex items-center px-4 py-2 rounded-lg bg-gradient-to-r from-emerald-500 to-emerald-600 text-white text-sm font-medium hover:from-emerald-600 hover:to-emerald-700 shadow-sm hover:shadow-md transition-all duration-200 transform hover:scale-105"
                  >
                    <svg className="w-4 h-4 mr-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                    </svg>
                    {t('research.code')}
                  </a>
                )}
                {paper.links.demo && (
                  <a
                    href={paper.links.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/btn inline-flex items-center px-4 py-2 rounded-lg bg-gradient-to-r from-purple-500 to-purple-600 text-white text-sm font-medium hover:from-purple-600 hover:to-purple-700 shadow-sm hover:shadow-md transition-all duration-200 transform hover:scale-105"
                  >
                    <svg className="w-4 h-4 mr-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {t('research.demo')}
                  </a>
                )}
              </div>
            </div>
          </div>
        </article>
      ))}
    </div>
  )
}

export default PaperList

