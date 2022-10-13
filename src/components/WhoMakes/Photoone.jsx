
import '../WhoMakes/Photoone.css';
import Vector from "../../imagenes/Vector.jpg"

const Photoone = () => {
  return (
    <figure>
      <div className='telescopio'>
          <img  src={Vector} alt="Vector" />
      </div>
      <div>
          <p className='uno'>Descubrir nuevos <br></br> sabores y personas</p>
      </div>
      <div >
          <p className='dos'>Descubre nuevos gustos, sabores, snacks y recetas para hacer comidas maravillosas. También averigüe de dónde viene su comida y quién la hace.</p>
      </div>
      </figure>
  )
}

export default Photoone