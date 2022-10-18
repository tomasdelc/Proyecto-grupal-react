import { VscTelescope} from 'react-icons/vsc' ;

const Photoone = () => {
  return (
    <figure style={{
        height:"15.625rem",
        width:"13.125rem",
        position:"relative",
        margin:"0rem",
        display:"block",
      }}>
        < VscTelescope size={"4rem"} / > 
        <div>
          <p style={{
            fontSize:"25px",
            position:"relative",
            fontStyle:"normal",
            fontWeight:"43.75rem",
            lineHeight:"1.5625rem",
            margin:"0rem",
            fontFamily:"Cormorant Garamond , serif",
          }}>Descubrir nuevos <br></br> sabores y personas</p>
        </div>
        <div >
            <p style={{
              position:"relative",
              marginTop:"0.75rem",
              fontSize:"1rem",
              fontStyle:"normal",
              lineHeight:"1.5rem",
              color:"#1F1F1F",
              fontFamily: "Noto Sans Balinese sans-serif",
            }}>Descubre nuevos gustos, sabores, snacks y recetas para hacer comidas maravillosas. También averigüe de dónde viene su comida y quién la hace.</p>
        </div>
      </figure>
  )
}

export default Photoone