const getProducts = () => {
  return (dispatch) => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        dispatch({ type: "GET_PRODUCTS", payload: data });
      });
  };
};

export { getProducts };
