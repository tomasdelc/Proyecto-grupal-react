

import { MdOutlineThumbsUpDown } from "react-icons/md" ;  

const Photothree = () => {
  return (
    <figure style={{
        height:"15.625rem",
        width:"13.125rem",
        position:"absolute",
        marginLeft:"33.4375rem"
      }}>
        < MdOutlineThumbsUpDown size={"4rem"} / > 
        <div>
          <p style={{
            fontSize:"25px",
            position:"absolute",
            fontStyle:"normal",
            fontWeight:"43.75rem",
            lineHeight:"1.5625rem",
            margin:"0rem",
            fontFamily:"Cormorant Garamond , serif",
          }}>Apoya a tu  <br></br> comunidad</p>
        </div>
        <div >
            <p style={{
              position:"absolute",
              marginTop:"3.75rem",
              fontSize:"16px",
              fontStyle:"normal",
              lineHeight:"1.5rem",
              color:"#1F1F1F",
              fontFamily: "Noto Sans Balinese sans-serif",
            }}>Al comprar al por mayor a productores locales y nacionale, está ayudando a hacer crecer nuestro ecosistema alimentario local, creando empleos y apoyando a familias y empresarios en su comunidad.</p>
        </div>
      </figure>
  )
}

export default Photothree