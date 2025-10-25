export const addDecimal = (num) => {
  return (Math.round(num * 100) / 100).toFixed(2);
};

export const updateCart = (state) => {
  //calculate item price
  state.itemPrice = addDecimal(
    state.cartItems.reduce((acc, item) => acc + item.price * item.qty, 0)
  );
  //calculate total price
  state.totalPrice =
    Number(state.itemPrice) +
    Number(state.shippingPrice) +
    Number(state.taxPrice).toFixed(2);

  //calculate tax price
  state.taxPrice = addDecimal(0.15 * state.totalPrice);
  //calculate shipping price(if total > 100 free shipping else 10)
  state.shippingPrice = addDecimal(state.totalPrice > 100 ? 0 : 10);

  localStorage.setItem("cart", JSON.stringify(state));
  return state;
};
