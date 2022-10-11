import React from 'react'
import '../WhyChoose/WhyChoose.css'
import { Button } from "@mui/material"
import Targetfive from "./Targetfive"
import Targetfour from "./Targetfour"
import Targetone from "./Targetone"
import Targetthree from "./Targetthree"
import Targettwo from "./Targettwo"
import vid from "../../imagenes/vid.jpg"


const WhyChoose = () => {
  return (
    <div className="principal">
      <img className='foto' src={vid} alt="vid"/>
      <figcaption className='figuras'>
        <h2 className='titulo'><span style={{color:"#FF8126"}}>Quien hace</span> tu comida?</h2>
        <p className='parrafo'>Nuestra misión es ayudar a hacer crecer el ecosistema alimentario local en todo el territorio Nacional. ¿Por qué?</p>
       <Targetone/>
       <Targettwo/>
        <Targetthree/>
        <Targetfour/>
        <Targetfive/>
        <Button className='boton' variant="contained" style={{
          marginTop:"310px",
          marginLeft:"10px",
          color:"black",
          backgroundColor:"#FF8126"
        }}>Descubre nuestros productos</Button>
      </figcaption>
    </div>
  )
}

export default WhyChoose