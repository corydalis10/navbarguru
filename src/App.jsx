import './App.css'
import Navbar from './components/navbar'

function App() {
  return (
    <>
      <Navbar />
      <div className="flex h-160">
        <div className="m-auto">
          <details className="dropdown">
            <summary className="btn btn-xl m-1">Choose library</summary>
            <ul className="menu dropdown-content bg-base-100 rounded-box z-1 w-52 p-2 text-lg shadow-sm">
              <li><a className="text-[#264de4] font-semibold"><img src="./css.svg" className="w-5 mr-1" />Vanila</a></li>
              <li><a className="text-[#38bdf8] font-semibold"><img src="./tailwindcss.svg" className="w-5 mr-1" />Tailwind CSS</a></li>
              <li><a className="text-[#ff9903] font-semibold"><img src="./daisyui.svg" className="w-5 mr-1" />DaisyUI</a></li>
              <li><a className="text-[#6e10f4] font-semibold"><img src="./bootstrap.svg" className="w-5 mr-1" />Bootstrap</a></li>
              <li><a className="text-[#00d1b2] font-semibold"><img src="./bulma.svg" className="w-5 mr-1" />Bulma</a></li>
            </ul>
          </details>
        </div>
      </div>
    </>
  )
}

export default App
