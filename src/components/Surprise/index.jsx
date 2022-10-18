import '../Surprise/styles.css'
import React from 'react'
import surprise from '../../img/surprise.jpg'
import Button from '@mui/material/Button';


const Surprise = () => {
  return (
    <div className='container-all'>
      <img src={surprise} alt="" />
<h2 className='sub-title'>SORPRENDE A UN AMIGO Y ENVÍALE UNO DE NUESTROS PRODUCTOS</h2>
    <p>
    Conoces a alguien que trabaja mucho desde casa? Nuestra caja personalizada es el mejor regalo. <br /><br />
    Cuenta con 3 vinos a elección para que puedan disfrutar entre amigos y colegas.
    <br /><br /> Pedinos el tuyo, clickeando en el boton de aqui abajo.</p>  
      <div className='btn'>
      <Button clasName="button" variant="outlined" >Comprar Aquí</Button>
      </div>
      </div>
      
  )
}

export default Surprise