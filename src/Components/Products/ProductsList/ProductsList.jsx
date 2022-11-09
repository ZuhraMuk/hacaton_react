import { Grid, Pagination, Typography } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { productContext } from "../../../context/ProductContextProvider";
import Filter from "../../Filter/Filter";
import ProductCard from "../ProductCard/ProductCard";

const ProductsList = () => {
  const { productsArr, readProduct, pageTotalCount } =
    useContext(productContext);

  const [paramsSearch, setParamsSearch] = useSearchParams();
  const [category, setCategory] = useState("all");
  const [price, setPrice] = useState([0, 200000]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    if (category === "all") {
      setParamsSearch({
        price_gte: price[0],
        price_lte: price[1],
        q: paramsSearch.get("q") || "",
        _page: page,
        _limit: 9,
      });
    } else {
      setParamsSearch({
        category: category,
        price_gte: price[0],
        price_lte: price[1],
        q: paramsSearch.get("q") || "",
        _page: page,
        _limit: 9,
      });
    }
  }, [paramsSearch, category, price, page]);

  useEffect(() => {
    readProduct();
  }, [paramsSearch, pageTotalCount]);
  return (
    <>
      <Grid sx={{ width: "40%" }} ml="40px" my="20px">
        <Typography variant="h4">Filter</Typography>
        <Filter
          category={category}
          setCategory={setCategory}
          price={price}
          setPrice={setPrice}
        />
      </Grid>
      <Grid
        container
        direction="row"
        justifyContent="space-around"
        alignItems="flex-start"
        sx={{ width: "90%" }}
        mx="auto"
        my="40px">
        {productsArr
          ? productsArr.map(item => <ProductCard obj={item} />)
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
