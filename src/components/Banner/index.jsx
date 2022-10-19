import React from 'react'
import '../Banner/Banner.css'
import Button from '@mui/material/Button';


const Banner = () => {
  return(
    <div className="banner">
      <div className= "banner-info">
        <h1>Viví una experiencia para tus sentidos <br/>disfrutando nuestra amplia variedad de vinos</h1>
        <Button className='boton-banner'>Shop Now</Button>
      </div>
    </div>
  )
}
export default Banner