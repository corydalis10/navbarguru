import LibrarySelect from '../components/libraryselect'

function Home() {
   return (
      <>
         <div className="flex h-140">
            <div className="m-auto">
               <details className="dropdown">
                  <summary className="btn btn-xl m-1">Choose library</summary>
                  <ul className="menu dropdown-content bg-base-100 rounded-box z-1 w-52 p-2 text-lg shadow-sm">
                     <LibrarySelect />
                  </ul>
               </details>
            </div>
         </div>
      </>
   )
}

export default Home