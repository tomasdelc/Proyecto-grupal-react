
import '../WhoMakes/Photofour.css'
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
        </div>
      </figure>
  )
}

export default Photofour