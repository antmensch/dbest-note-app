import { React, useEffect } from "react"
import { Link, useNavigate } from "react-router-dom"

function Home() {
  const navigate = useNavigate();

  return (
    <div className="home--wrapper">
      <h2 className="home--header">Welcome To the Best Note-App</h2>
      <p className="home--paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at arcu dui. Lorem ipsum dolor sit amet, consectetur adipisce placerat mauris nisl. Proin vitae urna eu <Link to="/contact">sem pellentesque</Link> laoreet. </p>
      <img className="home--image" src="./home-image.png"></img>
      <button onClick={() => navigate('/notes')} className="button home--button">Go to notes</button>
    </div>
  )
}

export default Home