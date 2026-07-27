
import "./HeroSection.css"
const HeroSection = ({ movies }) => {
  console.log(movies)
  return (
    <div className="heroDiv">
      {
        movies.map((list, i) => {
          return (
            <div key={i} className="heroContainer">
              
              <div className="imgDiv">

                <img className="heroImgs" src={list.Poster} alt="" />
              </div>
              <p> {list.Title} </p>
              <span>{list.Year}</span>
            </div>
          )
        })
      }
    </div>
  )
}

export default HeroSection
