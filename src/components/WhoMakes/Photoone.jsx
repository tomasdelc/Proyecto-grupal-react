<<<<<<< HEAD
import { VscTelescope} from 'react-icons/vsc' ;
import '../WhoMakes/Photoone.css'

const Photoone = () => {
  return (
    <figure className='Photo1'>
        <div>
        < VscTelescope size={"4rem"} / > 
        </div>
        <div>
          <p className='telescopio'>Descubrir nuevos <br></br> sabores y personas</p>
        </div>
        <div >
            <p className='texto1'>Descubre nuevos gustos, sabores, snacks y recetas para hacer comidas maravillosas. También averigüe de dónde viene su comida y quién la hace.</p>
        </div>
=======

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
>>>>>>> 12a3c7282dc3a929de7d2a9f923847a886e02672
      </figure>
  )
}

export default Photoone