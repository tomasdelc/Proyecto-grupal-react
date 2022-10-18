
import '../WhoMakes/Photofour.css'
<<<<<<< HEAD
import { MdThumbUpOffAlt } from "react-icons/md" ;

const Photofour = () => {
  return (
    <figure className="Photo4">
        < MdThumbUpOffAlt size={"4rem"} / > 
        <div>
          <p className="mano2">
          Disfruta de la mejor  <br></br> calidad</p>
        </div>
        <div >
            <p className="texto4">Solo ofrecemos gran sabor, todos los alimentos naturales que son mejores para usted y orgánicos si es posible.</p>
=======
import ok from "../../imagenes/ok.jpg"

const Photofour = () => {
  return (
    <figure>
        <div className='ok'>
            <img src={ok} alt="ok" />
        </div> 
        <div>
          <p className="siete">
          Disfruta de la mejor  <br></br> calidad</p>
        </div>
        <div >
            <p className="ocho">Solo ofrecemos gran sabor, todos los alimentos naturales que son mejores para usted y orgánicos si es posible.</p>
>>>>>>> 12a3c7282dc3a929de7d2a9f923847a886e02672
        </div>
      </figure>
  )
}

export default Photofour