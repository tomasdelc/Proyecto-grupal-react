
<<<<<<< HEAD
import '../WhoMakes/Photofive.css'
import { MdFavoriteBorder } from "react-icons/md" ;   

const Photofive = () => {
  return (
    <figure className="Photo5">
        < MdFavoriteBorder size={"4rem"} / > 
        <div>
          <p className="corazon">Disfrute del servicio de nivel Club</p>
        </div>
        <div >
            <p className="texto5">Como miembro de nuestro club, nos aseguraremos de que esté satisfecho con nuestro servicio o lo haremos bien!</p>
=======
import '../WhoMakes/Photofive.css'   
import corazon from "../../imagenes/corazon.jpg"

const Photofive = () => {
  return (
    <figure>
        <div className='corazon'>
            <img src={corazon} alt="corazon" />
        </div>
        <div>
          <p className="nueve">Disfrute del servicio de nivel Club</p>
        </div>
        <div >
            <p className="diez">Como miembro de nuestro club, nos aseguraremos de que esté satisfecho con nuestro servicio o lo haremos bien!</p>
>>>>>>> 12a3c7282dc3a929de7d2a9f923847a886e02672
        </div>
      </figure>
  )
}

export default Photofive