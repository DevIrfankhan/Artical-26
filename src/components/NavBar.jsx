import { useState } from "react"
import "./NavBar.css"

const NavBar = ({ setSearch }) => {
  const [isValue,setIsValue] = useState("")
  const changeHandlor = (e) => {
    setIsValue(e.target.value)
    console.log(isValue)
  }
  const searchButton = () => {
    setSearch(isValue)
  }
  
  return (
    <div>
          <div className="container">
              <div className="navdiv">
                  <div className="logo">IRFAN KHAN</div>
                  <div className="inputDiv">
                      <input type="text" placeholder="Type Somthing Hear" className="searchINput" value={isValue} onChange={changeHandlor}/>
                      <button className="searchBtn" onClick={searchButton}>Search</button>
                  </div>
              </div>
      </div>
    </div>
  )
}

export default NavBar
