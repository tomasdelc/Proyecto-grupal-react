
import evento from '../../imagenes/evento.png'
import { Button } from "@mui/material"
import '../Partner/Partner.css'


const Partner = () => {
  return (
     <div className='Partner'>
   <h2 className='titulo1'>Nuestro socio caritativo, Events</h2>
   <img src={evento} alt="evento" className='logo'/>   
    <div>
      <Button 
     className='boton1' variant="contained" color="success" size="large" fullWidth
     >Más información sobre Events
     </Button>
     </div>
  </div>
  )
}

export default Partner