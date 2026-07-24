
import "./HeroSection.css"
const HeroSection = ({ movies }) => {
    console.log(movies)
  return (
    <div className="heroDiv">
          { 
              movies.map((list,i) => {
                  return (
                      <div key={i} className="heroContainer">

                          <img className="heroImgs" src={list.Poster} alt="" />
                          <p> {list.Title} </p>
                      </div>
                )
              })
      }
    </div>
  )
}

export default HeroSection
