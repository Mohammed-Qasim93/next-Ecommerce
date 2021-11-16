export const ACTIONS = {
  NOTIFY: "NOTIFY",
  AUTH: "AUTH",
  ADD_CART: "ADD_CART",
  SIDE_CART: "SIDE_CART",
};

export const addToCart = (product, cart) => {
  if (product.stock === 0)
    return {
      type: "NOTIFY",
      payload: { error: "this product is out of stock" },
    };

  const check = cart.every((item) => {
    return item._id !== product._id;
  });

  if (!check)
    return {
      type: "NOTIFY",
      payload: { error: "this product is already added to cart" },
    };

  return { type: "ADD_CART", payload: [...cart, { ...product, quantity: 1 }] };
};
