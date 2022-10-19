import React from 'react'
import '../WhyChoose/WhyChoose.css'
import { Button } from "@mui/material"
import Targetfive from "./Targetfive"
import Targetfour from "./Targetfour"
import Targetone from "./Targetone"
import Targetthree from "./Targetthree"
import Targettwo from "./Targettwo"


const WhyChoose = () => {
  return (
    <div className="WhyChoose">
      <figure className='foto5'></figure>
      <figcaption className='figuras'>
        <h2 className='titulo'>Quien hace tu Vino?</h2>
        <p className='parrafo'>Nuestra misión es colaborar con el crecimiento de la vitivinicultura en todo el territorio nacional ¿Por qué?</p>
        <div className='targetas'>
       <Targetone/>
       <Targettwo/>
        <Targetthree/>
        <Targetfour/>
        <Targetfive/>
        </div>
        <div>
        <Button className='boton2' variant="contained">Descubre nuestros productos</Button>
        </div>
      </figcaption>
    </div>
  )
}

export default WhyChoose