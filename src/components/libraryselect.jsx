import { Link } from 'react-router-dom'

function LibrarySelect() {
   return (
      <>
         <li><Link className="text-[#264de4] font-semibold" to="/css"><img src="./css.svg" className="w-5 mr-1" />CSS</Link></li>
         <li><Link className="text-[#38bdf8] font-semibold" to="/tailwindcss"><img src="./tailwindcss.svg" className="w-5 mr-1" />Tailwind CSS</Link></li>
         <li><Link className="text-[#ff9903] font-semibold" to="/daisyui"><img src="./daisyui.svg" className="w-5 mr-1" />DaisyUI</Link></li>
         <li><Link className="text-[#6e10f4] font-semibold" to="/bootstrap"><img src="./bootstrap.svg" className="w-5 mr-1" />Bootstrap</Link></li>
         <li><Link className="text-[#00d1b2] font-semibold" to="/bulma"><img src="./bulma.svg" className="w-5 mr-1" />Bulma</Link></li>
      </>
   )
}

export default LibrarySelect