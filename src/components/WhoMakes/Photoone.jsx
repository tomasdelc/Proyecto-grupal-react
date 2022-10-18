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
      </figure>
  )
}

export default Photoone