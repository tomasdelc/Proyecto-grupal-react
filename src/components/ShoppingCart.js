import { TYPES } from "./actions";
import { useReducer } from "react";
import { shoppingInitialState, shoppingReducer } from "./shoppingReducer";
import React from "react";
import Product from "./Product";
import CartItem from "./CartItem";

const ShoppingCart = () => {
  const [state, dispatch] = useReducer(shoppingReducer, shoppingInitialState);
  const { products, cart } = state;
  //Funciones de dispatch
  const addToCart = (id) => {
    dispatch({ type: TYPES.ADD_TO_CART, payload: id });
  };

  const deleteFromCart = (id, all = false) => {
    if (all) {
      console.log(id);
      dispatch({ type: TYPES.REMOVE_ALL_PRODUCTS, payload: id });
    } else {
      dispatch({ type: TYPES.REMOVE_ONE_PRODUCT, payload: id });
    }
  };
  const cleanCart = () => dispatch({ type: TYPES.CLEAR_CART });

  return (
    <>
      <h2>Carrito de compras</h2>
      <h3>Productos</h3>
      <div>
        {products.map((product) => (
          <Product key={product.id} data={product} addToCart={addToCart} />
        ))}
      </div>
      <h3>Carrito</h3>
      <div>
        {cart.map((item, index) => (
          <CartItem key={index} data={item} deleteFromCart={deleteFromCart} />
        ))}
      </div>
      <button onClick={cleanCart}>Limpiar carrito</button>
    </>
  );
};

export default ShoppingCart;
