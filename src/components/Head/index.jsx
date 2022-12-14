import logo from '../../assets/glass.png';
import imagen from '../../assets/Imagen.jpg';
import { Button } from '@mui/material';
import { BsCartPlus } from "react-icons/bs";
import { BsFillPersonFill } from "react-icons/bs";


const Head = ({cart}) => {
const estiloHeadFondo = {
    height: "600px",
    padding: "3px",
    margin: "10px",
    //border: "solid black 5px",
    backgroundColor: "#7b1fa2"
  }
  const estiloLogo ={
    display: "flex",
    float: "left"
  
  }
  const estiloLista ={
    listStyle: "none",
    display: "flex",
    flexFlow: "row",
    justifyContent: "space-between",
    padding: "15px"
  }
  

  return (
    <header style={estiloHeadFondo}>
    <p> contador: {cart}

    </p>
    <div style={estiloLogo}><img style = {{height: "60px", maxWidth: "60px",}}src={logo}/></div>
    <nav>
      <ul style={estiloLista}>
        <li><Button style = {{color: "white"}}>Categorias</Button></li>
        <li><Button style = {{color: "white"}}>Bodegas</Button></li>
        <li><BsFillPersonFill style = {{color: "white", fontSize: "30px"}}/></li>
        <li> <BsCartPlus style = {{color: "white", fontSize: "30px"}}/> {cart}</li>
      </ul>
    </nav>
    <div><img style = {{width: "100%", height: "470px"}}src={imagen}/> <Button style = {{fontSize: "50px", color: "white", position: "absolute", top: "50%", left: "50%"}}>Upcoming Events</Button></div>
    </header>)
    
 }

export default Head