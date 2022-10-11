import { TYPES } from "./actions";

export const shoppingInitialState = {
  products: [
    { precioviejo: 3500, precionuevo: 2917, id: 1 },
    { precioviejo: 3800, precionuevo: 3167, id: 2 },
    { precioviejo: 3400, precionuevo: 2834, id: 3 },
    { precioviejo: 4500, precionuevo: 3750, id: 4 },

    // { id: 1, name: "Producto A", price: 10 },
    // { id: 2, name: "Producto B", price: 100 },
    // { id: 3, name: "Producto C", price: 1000 },
    // { id: 4, name: "Producto D", price: 10000 },
    // { id: 5, name: "Producto E", price: 100000 },
  ],
  cart: [],
};

export function shoppingReducer(state, action) {
  switch (action.type) {
    case TYPES.ADD_TO_CART: {
      let newItem = state.products.find(
        (product) => product.id === action.payload
      );
      // let carrito = state.cart;
      // return { ...state, cart: [...carrito, newItem] };
      // break;
      let itemInCart = state.cart.find((item) => item.id === newItem.id);

      return itemInCart
        ? {
            ...state,
            cart: state.cart.map((item) =>
              item.id === newItem.id
                ? { ...item, quantity: item.quantity + 1 }
                : item
            ),
          }
        : {
            ...state,
            cart: [...state.cart, { ...newItem, quantity: 1 }],
          };
    }
    case TYPES.REMOVE_ONE_PRODUCT: {
      let itemToDelete = state.cart.find((item) => item.id === action.payload);
      return itemToDelete.quantity > 1
        ? {
            ...state,
            cart: state.cart.map((item) =>
              item.id === action.payload
                ? { ...item, quantity: item.quantity - 1 }
                : item
            ),
          }
        : {
            ...state,
            cart: state.cart.filter((item) => item.id !== action.payload),
          };
    }
    case TYPES.REMOVE_ALL_PRODUCTS: {
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload),
      };
    }
    case TYPES.CLEAR_CART: {
      return shoppingInitialState;
    }
    default:
      return state;
      break;
  }
}
