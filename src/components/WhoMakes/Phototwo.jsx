
import { MdOutlineCottage} from 'react-icons/md' ;


const Phototwo = () => {
  return (
    <figure style={{
        height:"15.625rem",
        width:"13.125rem",
        position:"absolute",
        marginLeft:"17.125rem",
        margin:"0rem",
        display:"block",
      }}>
        < MdOutlineCottage size={"4rem"} / > 
        <div>
          <p style={{
            fontSize:"25px",
            position:"relative",
            fontStyle:"normal",
            fontWeight:"43.75rem",
            lineHeight:"1.5625rem",
            margin:"0rem",
            fontFamily:"Cormorant Garamond , serif",
          }}>Comprar  <br></br> al por mayor</p>
        </div>
        <div >
            <p style={{
              position:"relative",
              marginTop:"0.75rem",
              fontSize:"16px",
              fontStyle:"normal",
              lineHeight:"1.5rem",
              color:"#1F1F1F",
              fontFamily: "Noto Sans Balinese sans-serif",
            }}>Ofrecemos formatos a granel, estuches variados y cajas de descubrimiento para que pueda ahorrar dinero en alimentos deliciosos comprando a precios de mayorista.</p>
        </div>
      </figure>
  )
}

export default Phototwo