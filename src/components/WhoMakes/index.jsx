
import Photofive from "./Photofive"
import Photofour from "./Photofour"
import Photoone from "./Photoone"
import Photothree from "./Photothree"
import Phototwo from "./Phototwo"
import '../WhoMakes/WhoMakes.css'
<<<<<<< HEAD

const WhoMakes = () => {
  return (
    <div className="WhoMakes">
      <h2 className="title">¿Porque Elegir Queseriasinunvino?</h2>
=======
import '../WhoMakes/Photoone.css'
import '../WhoMakes/Phototwo.css'
import '../WhoMakes/Photothree.css'
import '../WhoMakes/Photofour.css'
import '../WhoMakes/Photofour.css'



const WhoMakes = () => {
  return (
    <div >
      <h2 className="title">¿Porque Elegir  <span style= {{color:"#FF8126",}}>Calidad Premium en Vinos</span>?</h2>
>>>>>>> 12a3c7282dc3a929de7d2a9f923847a886e02672
    <div className="contenedor">
      <Photoone className="uno"/>
      <Phototwo className="dos"/>
      <Photothree className="tres"/>
      <Photofour className="cuatro"/>
<<<<<<< HEAD
      <Photofive className="cinco"/>  
=======
      <Photofive className="cinco"/>
>>>>>>> 12a3c7282dc3a929de7d2a9f923847a886e02672
    </div>
    </div>
  
  )
  
}

export default WhoMakes