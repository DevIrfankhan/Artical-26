
import { useState } from 'react'
import './App.css'
import FetchApi from './components/FetchApi'
import NavBar from './components/NavBar'
import Footer from './components/Footer'

function App() {
  const [search,setSearch] = useState("Iron man")
 

  return (
    <>
      <NavBar setSearch={setSearch} />
      <FetchApi search={search} />
      <Footer/>
    </>
  )
}

export default App
