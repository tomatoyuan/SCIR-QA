import { useTranslation } from 'react-i18next'

function LanguageSwitcher() {
  const { i18n } = useTranslation()

  const toggleLanguage = () => {
    const newLang = i18n.language === 'zh' ? 'en' : 'zh'
    i18n.changeLanguage(newLang)
  }

  return (
    <button
      onClick={toggleLanguage}
      className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
    >
      {i18n.language === 'zh' ? 'English' : '中文'}
    </button>
  )
}

export default LanguageSwitcher

