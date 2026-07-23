import "./NavBar.css"

const NavBar = () => {
  return (
    <div>
          <div className="container">
              <div className="navdiv">
                  <div className="logo">IRFAN KHAN</div>
                  <div className="inputDiv">
                      <input type="text" placeholder="Type Somthing Hear" />
                      <button>Search</button>
                  </div>
              </div>
      </div>
    </div>
  )
}

export default NavBar
