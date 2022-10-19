import React from "react";

const Product = ({ data, addToCart }) => {
  const { id, precionuevo, precioviejo } = data;
  return (
    <div>
      <h5>${precioviejo}</h5>
      <h4>$ {precionuevo} </h4>
      <button onClick={() => addToCart(id)}>Agregar</button>
    </div>
  );
};

export default Product;
