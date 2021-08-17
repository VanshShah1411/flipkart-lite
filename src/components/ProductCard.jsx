import React from "react";

// material ui
import {
  makeStyles,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Button,
} from "@material-ui/core";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 240,
    width: 340,
    objectFit: "contain",
  },
}));

const ProductCard = ({ product, ind }) => {
  const classes = useStyles();
  return (
    <Card
      className={classes.root}
      style={{ marginTop: "2rem", backgroundColor: "#424242" }}
    >
      {/* Link  */}
      <Link to={`/product/${product.id}`}>
        <CardActionArea style={{ color: "#fff" }}>
          <CardMedia
            className={classes.media}
            component="img"
            alt="Contemplative Reptile"
            height="140"
            image={product.image}
            title={product.title}
          />
          <CardContent>
            <h5>{product.title.slice(0, 20) + "..."}</h5>
            <p className="mb-0">Price: ₹ {product.price * 1000}</p>
          </CardContent>
        </CardActionArea>
      </Link>
      {/* Buttons */}
      <CardActions>
        <Button size="small" color="primary">
          Buy Now
        </Button>
        <Button size="small" color="primary">
          Add to Cart
        </Button>
      </CardActions>
    </Card>
  );
};

export default ProductCard;
