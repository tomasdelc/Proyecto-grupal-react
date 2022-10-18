
import '../WhoMakes/Photothree.css'
<<<<<<< HEAD
import { MdOutlineThumbsUpDown } from "react-icons/md" ;  

const Photothree = () => {
  return (
    <figure className="Photo3">
        < MdOutlineThumbsUpDown size={"4rem"} / > 
        <div>
          <p className="manos">Apoya a tu  <br></br> comunidad</p>
        </div>
        <div >
            <p className="texto3">Al comprar al por mayor a productores locales y nacionale, está ayudando a hacer crecer nuestro ecosistema alimentario local, creando empleos y apoyando a familias y empresarios en su comunidad.</p>
=======
import manos from "../../imagenes/manos.jpg"

const Photothree = () => {
  return (
    <figure>
        <div className='manos'>
            <img src={manos} alt="manos" />
        </div>
        <div>
          <p className="cinco">Apoya a tu  <br></br> comunidad</p>
        </div>
        <div >
            <p className="seis">Al comprar al por mayor a productores locales y nacionale, está ayudando a hacer crecer nuestro ecosistema alimentario local, creando empleos y apoyando a familias y empresarios en su comunidad.</p>
>>>>>>> 12a3c7282dc3a929de7d2a9f923847a886e02672
        </div>
      </figure>
  )
}

export default Photothree