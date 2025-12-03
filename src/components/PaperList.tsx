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
      <h3 className="text-2xl font-bold text-gray-800 mb-4">{t('research.papers')}</h3>
      {papers.map((paper, index) => (
        <article
          key={index}
          className="bg-white rounded-2xl shadow-md border border-gray-200 overflow-hidden hover:shadow-xl transition-shadow"
        >
          <div className="flex flex-col md:flex-row md:items-center px-4 md:px-6">
            {/* 左侧论文配图区域 */}
            <div className="md:w-56 lg:w-64 h-48 md:h-40 lg:h-44 bg-gray-100 flex-shrink-0 flex items-center justify-center overflow-hidden">
              {resolveThumbnailSrc(paper.thumbnail) ? (
                <img
                  src={resolveThumbnailSrc(paper.thumbnail)}
                  alt={paper.title}
                  className="w-full h-full object-contain object-center p-4"
                />
              ) : (
                <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-gray-50 to-gray-200 text-gray-400 text-sm px-4">
                  <span className="text-4xl mb-2">📄</span>
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
                <h4 className="text-lg md:text-xl font-semibold text-gray-900 mb-2">
                  {paper.title}
                </h4>
                <p className="text-gray-700 text-sm md:text-base mb-1">
                  <span className="font-medium">Authors: </span>
                  {paper.authors}
                </p>
                <p className="text-gray-600 text-sm md:text-base mb-3">
                  <span className="font-semibold">{paper.venue}</span>
                  {paper.year ? <span className="ml-1 text-gray-500">· {paper.year}</span> : null}
                </p>
              </div>

              <div className="flex flex-wrap gap-2 mt-3 md:mt-4">
                {paper.links.paper && (
                  <a
                    href={paper.links.paper}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-1.5 rounded-full bg-blue-500 text-white text-sm font-medium hover:bg-blue-600 transition-colors"
                  >
                    {t('research.paper')}
                  </a>
                )}
                {paper.links.website && (
                  <a
                    href={paper.links.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-1.5 rounded-full bg-sky-500 text-white text-sm font-medium hover:bg-sky-600 transition-colors"
                  >
                    {t('research.website')}
                  </a>
                )}
                {paper.links.code && (
                  <a
                    href={paper.links.code}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-1.5 rounded-full bg-emerald-500 text-white text-sm font-medium hover:bg-emerald-600 transition-colors"
                  >
                    {t('research.code')}
                  </a>
                )}
                {paper.links.demo && (
                  <a
                    href={paper.links.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-1.5 rounded-full bg-purple-500 text-white text-sm font-medium hover:bg-purple-600 transition-colors"
                  >
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

