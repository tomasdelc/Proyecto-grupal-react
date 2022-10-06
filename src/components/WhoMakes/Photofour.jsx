

import { MdThumbUpOffAlt } from "react-icons/md" ;

const Photofour = () => {
  return (
    <figure style={{
        height:"15.625rem",
        width:"13.125rem",
        position:"absolute",
        marginLeft:"48.4375rem"
      }}>
        < MdThumbUpOffAlt size={"4rem"} / > 
        <div>
          <p style={{
            fontSize:"25px",
            position:"absolute",
            fontStyle:"normal",
            fontWeight:"43.75rem",
            lineHeight:"1.5625rem",
            margin:"0rem",
            fontFamily:"Cormorant Garamond , serif",
          }}>
          Disfruta de la mejor  <br></br> calidad</p>
        </div>
        <div >
            <p style={{
              position:"absolute",
              marginTop:"3.75rem",
              fontSize:"1rem",
              fontStyle:"normal",
              lineHeight:"1.5rem",
              color:"#1F1F1F",
              fontFamily: "Noto Sans Balinese sans-serif",
            }}>Solo ofrecemos gran sabor, todos los alimentos naturales que son mejores para usted y orgánicos si es posible.</p>
        </div>
      </figure>
  )
}

export default Photofour