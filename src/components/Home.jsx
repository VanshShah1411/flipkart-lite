import React, { useEffect } from "react";

// Redux
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../actions/index";

// Material UI
import { makeStyles, Grid, Paper } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexGrow: 1,
    justifyContent: "center",
    width: "100vw",
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
  },
}));

const Home = () => {
  const products = useSelector((state) => state.products);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
  }, []);

  const classes = useStyles();

  return (
    <div>
      <h1>Home Page</h1>
      <div className={classes.root}>
        <Grid container spacing={6}>
          <Grid item xs={3}>
            <Paper className={classes.paper}>xs=3</Paper>
          </Grid>
          <Grid item xs={3}>
            <Paper className={classes.paper}>xs=3</Paper>
          </Grid>
          <Grid item xs={3}>
            <Paper className={classes.paper}>xs=3</Paper>
          </Grid>
        </Grid>
        {/* {products.map((product) => (
        <h1>{product.id}</h1>
      ))} */}
      </div>
    </div>
  );
};

export default Home;
