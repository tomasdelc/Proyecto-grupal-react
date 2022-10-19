
import '../WhoMakes/Photothree.css'
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
        </div>
      </figure>
  )
}

export default Photothree