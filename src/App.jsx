import { Routes, Route } from 'react-router-dom'
import Navbar from './components/navbar'
import Home from './pages/home'
import CSS from './pages/css'
import TailwindCSS from './pages/tailwindcss'
import DaisyUI from './pages/daisyui'
import Bootstrap from './pages/bootstrap'
import Bulma from './pages/bulma'
import NotFound from './pages/notfound'
import './App.css'

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/css" element={<CSS />} />
        <Route path="/tailwindcss" element={<TailwindCSS />} />
        <Route path="/daisyui" element={<DaisyUI />} />
        <Route path="/bootstrap" element={<Bootstrap />} />
        <Route path="/bulma" element={<Bulma />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  )
}

export default App
