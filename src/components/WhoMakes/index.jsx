
import Photofive from "./Photofive"
import Photofour from "./Photofour"
import Photoone from "./Photoone"
import Photothree from "./Photothree"
import Phototwo from "./Phototwo"
import '../WhoMakes/WhoMakes.css'
import '../WhoMakes/Photoone.css'
import '../WhoMakes/Phototwo.css'
import '../WhoMakes/Photothree.css'
import '../WhoMakes/Photofour.css'
import '../WhoMakes/Photofour.css'



const WhoMakes = () => {
  return (
    <div >
      <h2 className="title">¿Porque Elegir  <span style= {{color:"#FF8126",}}>Calidad Premium en Vinos</span>?</h2>
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