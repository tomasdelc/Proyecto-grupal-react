
import '../WhoMakes/Phototwo.css';
import casa from "../../imagenes/casa.jpg"


const Phototwo = () => {
  return (
    <figure>
      <div className='casa'>
        <img src={casa} alt="casa" />
      </div>
        <div>
            <p className='tres'>Comprar  <br></br> al por mayor</p>
        </div>
        <div >
            <p className='cuatro'>Ofrecemos formatos a granel, estuches variados y cajas de descubrimiento para que pueda ahorrar dinero en alimentos deliciosos comprando a precios de mayorista.</p>
        </div>
      </figure>
  )
}

export default Phototwo