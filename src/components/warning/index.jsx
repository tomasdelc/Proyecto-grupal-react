
import { useState } from "react"


const Warning = () => {
  const estiloWarning = {
    color: "white",
    margin: "10px",
    padding: "3px",
    border: "solid black 5px",
    backgroundColor: "purple",
    textAlign: "center"
  }
  const estiloCerrar = {
    float: "right"
  }
  const [visible, setVisible] = useState(true)
  
  if (visible) {
  return (
    <div style={estiloWarning}>Free Delinery Over $ 10.000. Free gift for purchgitase over $ 20.000 <button  style={estiloCerrar} onClick={() => setVisible(false)}>X</button></div>)}
  }

export default Warning