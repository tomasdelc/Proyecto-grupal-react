

import { maxWidth } from "@mui/system";
import { MdFavoriteBorder } from "react-icons/md" ;   

const Photofive = () => {
  return (
    <figure style={{
        height:"15.625rem",
        width:"13.125rem",
        position:"absolute",
        marginLeft:"63.4375rem"
      }}>
        < MdFavoriteBorder size={"4rem"} / > 
        <div>
          <p style={{
            fontSize:"25px",
            position:"absolute",
            fontStyle:"normal",
            fontWeight:"43.75rem",
            lineHeight:"1.5625rem",
            margin:"0rem",
            fontFamily:"Cormorant Garamond , serif",
          }}>Disfrute del servicio de nivel Club</p>
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
             }}>Como miembro de nuestro club, nos aseguraremos de que esté satisfecho con nuestro servicio o lo haremos bien!</p>
        </div>
      </figure>
  )
}

export default Photofive