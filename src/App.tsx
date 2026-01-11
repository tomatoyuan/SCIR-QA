import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import ResearchDirection from './pages/ResearchDirection'
import ResearchPoint from './pages/ResearchPoint'
import LanguageSwitcher from './components/LanguageSwitcher'

function App() {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <div className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-4 py-8">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-3xl font-bold text-gray-800">
              Research Directions
            </h1>
            <LanguageSwitcher />
          </div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/research/:directionId" element={<ResearchDirection />} />
            <Route path="/research/:directionId/:pointId" element={<ResearchPoint />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App

