import { useTranslation } from 'react-i18next'
import type { Paper } from '../data/researchData'

interface PaperListProps {
  papers: Paper[]
}

function PaperList({ papers }: PaperListProps) {
  const { t } = useTranslation()

  return (
    <div className="space-y-4">
      <h3 className="text-2xl font-bold text-gray-800 mb-4">{t('research.papers')}</h3>
      {papers.map((paper, index) => (
        <div key={index} className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
          <h4 className="text-lg font-semibold text-gray-800 mb-2">{paper.title}</h4>
          <p className="text-gray-600 mb-2">
            <span className="font-medium">Authors:</span> {paper.authors}
          </p>
          <p className="text-gray-600 mb-2">
            <span className="font-medium">{paper.venue}</span> {paper.year}
          </p>
          <div className="flex flex-wrap gap-2 mt-4">
            {paper.links.paper && (
              <a
                href={paper.links.paper}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
              >
                {t('research.paper')}
              </a>
            )}
            {paper.links.code && (
              <a
                href={paper.links.code}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors"
              >
                {t('research.code')}
              </a>
            )}
            {paper.links.demo && (
              <a
                href={paper.links.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition-colors"
              >
                {t('research.demo')}
              </a>
            )}
            {paper.links.website && (
              <a
                href={paper.links.website}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors"
              >
                {t('research.website')}
              </a>
            )}
          </div>
        </div>
      ))}
    </div>
  )
}

export default PaperList

