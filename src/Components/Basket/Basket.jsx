import {
  Button,
  Container,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import React from "react";
import "./Basket.css";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import { useContext } from "react";
import { basketContext } from "../../context/BasketContextProvider";
import { useEffect } from "react";

const Basket = () => {
  const {
    productsInBasket,
    getBasket,
    changeProductCount,
    deleteBasketProduct,
  } = useContext(basketContext);

  useEffect(() => {
    getBasket();
  }, []);

  return (
    <>
      <Container maxWidth="lg">
        <Typography variant="h3">My Basket</Typography>
        {productsInBasket ? (
          <>
            <TableContainer component={Paper}>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell sx={{ fontWeight: "bold" }}>Title</TableCell>
                    <TableCell sx={{ fontWeight: "bold" }}>Model</TableCell>
                    <TableCell sx={{ fontWeight: "bold" }}>Image</TableCell>
                    <TableCell sx={{ fontWeight: "bold" }}>Price</TableCell>
                    <TableCell sx={{ fontWeight: "bold" }}>Count</TableCell>
                    <TableCell sx={{ fontWeight: "bold" }}>SubPrice</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {productsInBasket.products.map(elem => (
                    <TableRow key={elem.item.id}>
                      <TableCell>{elem.item.title}</TableCell>
                      <TableCell>{elem.item.model}</TableCell>
                      <TableCell>
                        <img src={elem.item.img1} width={50} />
                      </TableCell>
                      <TableCell>{elem.item.price}</TableCell>
                      <TableCell>
                        <input
                          min="1"
                          type="number"
                          style={{ width: "40px" }}
                          value={elem.count}
                          onChange={e =>
                            changeProductCount(elem.item.id, e.target.value)
                          }
                        />
                      </TableCell>
                      <TableCell>{elem.subPrice} £</TableCell>
                      <TableCell
                        onClick={() => deleteBasketProduct(elem.item.id)}>
                        <DeleteForeverIcon className="deleteIconBasket" />
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
            <Button variant="contained" sx={{ margin: "20px auto" }}>
              Buy now for {productsInBasket.totalPrice}
            </Button>
          </>
        ) : (
          <h1>Loading...</h1>
        )}
      </Container>
    </>
  );
};

export default Basket;
