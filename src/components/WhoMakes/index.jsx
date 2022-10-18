
import Photofive from "./Photofive"
import Photofour from "./Photofour"
import Photoone from "./Photoone"
import Photothree from "./Photothree"
import Phototwo from "./Phototwo"
import '../WhoMakes/WhoMakes.css'

const WhoMakes = () => {
  return (
    <div className="WhoMakes">
      <h2 className="title">¿Porque Elegir Queseriasinunvino?</h2>
    <div className="contenedor">
      <Photoone className="uno"/>
      <Phototwo className="dos"/>
      <Photothree className="tres"/>
      <Photofour className="cuatro"/>
      <Photofive className="cinco"/>  
    </div>
    </div>
  
  )
  
}

export default WhoMakes