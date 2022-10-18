
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
        </div>
      </figure>
  )
}

export default Photofive