import { Grid, Pagination } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { productContext } from "../../../context/ProductContextProvider";
import ProductCard from "../ProductCard/ProductCard";

const ProductsList = () => {
  const { productsArr, readProduct, pageTotalCount } =
    useContext(productContext);

  const [paramsSearch, setParamsSearch] = useSearchParams();

  const [page, setPage] = useState(1);

  useEffect(() => {
    setParamsSearch({
      _page: page,
      _limit: 9,
      q: paramsSearch.get("q") || "",
    });
  }, [paramsSearch, page]);

  useEffect(() => {
    readProduct();
  }, [paramsSearch, pageTotalCount]);
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
      <Grid
        sx={{ width: "30%", display: "flex", justifyContent: "center" }}
        mx="auto"
        my="20px">
        <Pagination
          count={+pageTotalCount}
          color="secondary"
          page={+page}
          onChange={(e, value) => setPage(value)}
        />
      </Grid>
    </>
  );
};

export default ProductsList;
