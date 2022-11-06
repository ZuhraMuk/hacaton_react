import { Grid } from "@mui/material";
import React, { useContext, useEffect } from "react";
import { productContext } from "../../../context/ProductContextProvider";
import ProductCard from "../ProductCard/ProductCard";

const ProductsList = () => {
  const { productsArr, readProduct } = useContext(productContext);
  useEffect(() => {
    readProduct();
  }, []);
  return (
    <>
      <Grid
        container
        direction="row"
        justifyContent="space-around"
        alignItems="flex-start"
        sx={{ width: "90%" }}
        mx="auto"
        my="40px">
        {productsArr
          ? productsArr.map(item => (
              <Grid item={true} xs={3.5} mb={7} key={item.id}>
                <ProductCard obj={item} />
              </Grid>
            ))
          : null}
      </Grid>
    </>
  );
};

export default ProductsList;
