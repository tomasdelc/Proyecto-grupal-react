import { Button } from "@mui/material"



const boton = () => {
  return (
    <div>
       <Button
      onClick={() => {
    alert('clicked');
  }}>
  Click me
</Button>
    
    </div>
  )
}

export default boton