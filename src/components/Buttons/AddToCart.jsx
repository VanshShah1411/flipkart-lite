import React from "react";
import { Button } from "@material-ui/core";
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../../actions/index";

const AddToCart = ({ id, size, variant }) => {
  // const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  // console.log(cart);

  return (
    <Button
      variant={variant}
      size={size}
      color="primary"
      onClick={() => dispatch(addToCart(id))}
    >
      Add to Cart
    </Button>
  );
};

export default AddToCart;
