import cata from '../../imagenes/cata.jpg'
import evento from '../../imagenes/evento.png'
import { Button } from "@mui/material"
import '../Partner/Partner.css'


const Partner = () => {
  return (
     <div className='fotoimg'>
   <img src={cata} alt="cata" className='imagen'/>
   <h2 className='socio'>Nuestro socio caritativo, Events</h2>
   <img src={evento} alt="evento" className='logo'/>  
     <Button className='boton' variant="contained">Más información sobre Events</Button>
  </div>
  )
}

export default Partner