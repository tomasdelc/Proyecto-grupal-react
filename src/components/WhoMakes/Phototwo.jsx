<<<<<<< HEAD
import '../WhoMakes/Phototwo.css'
import { MdOutlineCottage} from 'react-icons/md' ;
=======

import '../WhoMakes/Phototwo.css';
import casa from "../../imagenes/casa.jpg"
>>>>>>> 12a3c7282dc3a929de7d2a9f923847a886e02672


const Phototwo = () => {
  return (
<<<<<<< HEAD
    <figure className='Photo2'>
        < MdOutlineCottage size={"4rem"} / > 
        <div>
          <p className='casa'>Comprar  <br></br> al por mayor</p>
        </div>
        <div >
            <p className='texto2'>Ofrecemos formatos a granel, estuches variados y cajas de descubrimiento para que pueda ahorrar dinero en alimentos deliciosos comprando a precios de mayorista.</p>
=======
    <figure>
      <div className='casa'>
        <img src={casa} alt="casa" />
      </div>
        <div>
            <p className='tres'>Comprar  <br></br> al por mayor</p>
        </div>
        <div >
            <p className='cuatro'>Ofrecemos formatos a granel, estuches variados y cajas de descubrimiento para que pueda ahorrar dinero en alimentos deliciosos comprando a precios de mayorista.</p>
>>>>>>> 12a3c7282dc3a929de7d2a9f923847a886e02672
        </div>
      </figure>
  )
}

export default Phototwo