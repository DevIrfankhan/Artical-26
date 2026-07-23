

const HeroSection = ({ movies }) => {
    console.log(movies)
  return (
    <div>
          { 
              movies.map((list,i) => {
                  return (
                      <div key={i}>

                          <img src={list.Poster} alt="" />
                          <p> {list.Title} </p>
                      </div>
                )
              })
      }
    </div>
  )
}

export default HeroSection
