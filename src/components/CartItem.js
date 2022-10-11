import React from "react";

const CartItem = ({ data, deleteFromCart }) => {
  const { id, name, precionuevo, quantity } = data;
  return (
    <div className="cart-item">
      <h4>{name}</h4>
      <h5>
        $ {precionuevo} x {quantity} = ${precionuevo * quantity}
      </h5>
      <button onClick={() => deleteFromCart(id)}>Eliminar uno</button>
      <button onClick={() => deleteFromCart(id, true)}>Eliminar todos</button>
    </div>
  );
};

export default CartItem;
