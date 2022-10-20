
import '../WhoMakes/Photothree.css'
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
        </div>
      </figure>
  )
}

export default Photothree