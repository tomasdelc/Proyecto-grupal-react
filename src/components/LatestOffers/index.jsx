import React from 'react'
import '../LatestOffers/Offers.css'
import img_offers1 from '../../images/img_offers1.jpg'
import img_offers2 from '../../images/img_offers2.jpg'
import img_offers3 from '../../images/img_offers3.jpg'
import bodega from '../../images/bodega.jpg'
import combo1 from '../../images/combo1.jpg'
import combo2 from '../../images/combo2.jpg'
import combo3 from '../../images/combo3.jpg'
import combo4 from '../../images/combo4.jpg'
import logo from '../../images/logo.jpg'
import Button from '@mui/material/Button'
import Swal from 'sweetalert2'
 
const LastOffers = ({cart,setCart}) => {
  const openModal = () => {
    //el codigo del sweetalert
    Swal.fire({
      title: '<strong>¡Gracias por elegirnos!</strong>',
      html: '<P>El producto ha sido agregado al carrito para que puedas continuar con su compra</p>',
      imageUrl: logo,
      imageAlt:'Logo de Que seria sin un vino',
      imageWidth: 300,
      imageHeight: 300,
      showDenyButton: true,
      denyButtonText: 'Ir al Carrito',
      confirmButtonText: 'Seguir Comprando',
      confirmButtonColor: '#8C031C',
      denyButtonColor: '#8C031C' 
    })
    }
  const productos = [{imagen: img_offers1, precioviejo:"$3500", precionuevo: "$2917", id: 1},
                     {imagen: img_offers2, precioviejo: "$3800", precionuevo: "$3167", id: 2},
                     {imagen: img_offers3, precioviejo: "$3400", precionuevo: "$2834", id: 3},
                     {imagen: bodega, precioviejo: "$4500", precionuevo: "$3750", id: 4},
] 
  const productos2 = [ {imagen: combo1, id: 5, nombre: "Combo 1"},
                       {imagen: combo2, id: 6, nombre: "Combo 11"}, 
                       {imagen: combo3, id: 7, nombre: "Combo 111"},
                       {imagen: combo4, id: 8, nombre: "Combo 1V"},
  ]
  return (
    <div className="offers" id="offers">
      <h1 className="titulo parpadea">Este mes deleitate con estos combos imperdibles!</h1>
      <h3 className="subtitulo" id='subtitulo'>Nuestras ofertas en bodegas... Llevate 6 al precio de 5!!</h3>
     <div className="offers-cards">
        {productos.map((item)=><div className="card">
          <img src={item.imagen} alt="" />
          <ul><li><del>{item.precioviejo}</del></li>
          <li><big>{item.precionuevo}</big></li></ul>
        <Button className="boton" variant="text"  onClick={()=> setCart(cart+1)}>Agregar al carrito</Button>
        </div>)}
      </div>

      <div className= "offers" id= "offers">
        <h3 className="subtitulo">Nuestros combos en vinos ideales para compartir entre amigos y familia</h3>
       <div className="offers-cards">
       {productos2.map((item)=><div className="card">
         <h4>{item.nombre}</h4>
          <img src={item.imagen} alt="" />
          <Button className="boton" onClick={()=> setCart(cart+1)}>Agregar al carrito</Button> 
        </div>)}
      
      </div>

     </div>
       
    </div>  
  )
}

export default LastOffers
    
