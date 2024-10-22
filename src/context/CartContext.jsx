import { createContext, useState } from "react";

export const CartContext = createContext();
function CartContextprovider({ children }) {
  const [cartItems, setCartItems] = useState([]);

  //add item to cart
  function addItemToCart(item) {
    // console.log("Add item function called");
    const arr = cartItems;
    const itemIndex = cartItems.findIndex((data) => data.id ==item.id);
    if (itemIndex == -1) {
      arr.push({ ...item, quantity: 1 });
    } else {
      arr[itemIndex].quantity++;
    }
    setCartItems([...arr]);

  }
  //removeItem
  function removeItemFromCart(id) {
    const arr = cartItems;
    const itemIndex = cartItems.findIndex((data) => data.id ==id);
    arr.splice(itemIndex, 1);
    setCartItems([...arr]);
  }
  //ifItemAdded
  function isItemAdded(id) {
    const arr = cartItems;
    const itemIndex = cartItems.findIndex((data) => data.id == id);
    if (itemIndex == -1) {
      return null;
    } else {
      return arr[itemIndex];
    }
  }
  return (
    <CartContext.Provider
      value={{ cartItems, addItemToCart, removeItemFromCart, isItemAdded }}>
      {children}
    </CartContext.Provider>
  );
}

export default CartContextprovider;
