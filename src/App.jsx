
import { useState } from 'react'
import './App.css'
import FetchApi from './components/FetchApi'
import NavBar from './components/NavBar'

function App() {
  const [search,setSearch] = useState("Iron man")
 

  return (
    <>
      <NavBar setSearch={setSearch} />
     <FetchApi search={search} />
    </>
  )
}

export default App
