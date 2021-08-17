import React from "react";
import { Button } from "@material-ui/core";

const BuyNow = ({ size, variant }) => {
  return (
    <Button variant={variant} size={size} color="primary">
      Buy Now
    </Button>
  );
};

export default BuyNow;
