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

const Basket = () => {
  return (
    <>
      <Container maxWidth="lg">
        <Typography variant="h3">My Basket</Typography>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }}>
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
              <TableRow>
                <TableCell>Dress</TableCell>
                <TableCell>Spring Strawberry</TableCell>
                <TableCell>
                  <img
                    src="https://softech.kg/image/cache/46148fda07614998a56cbb35a0ca760c.png"
                    alt="dress"
                    width={50}
                  />
                </TableCell>
                <TableCell>20000</TableCell>
                <TableCell>
                  <input
                    min="1"
                    type="number"
                    style={{ width: "40px" }}
                    // value={elem.count}
                    value="1"
                    // onChange={(e) =>
                    //   changeProductCount(elem.item.id, e.target.value)
                    // }
                  />
                </TableCell>
                <TableCell>20000 сом</TableCell>
                <TableCell
                // onClick={() => deleteBasketProduct(elem.item.id)}
                >
                  <DeleteForeverIcon className="deleteIconBasket" />
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
        <Button variant="contained" sx={{ margin: "20px auto" }}>
          {/* Buy now for {productsInBasket.totalPrice} */}
          Buy now for 20000
        </Button>
      </Container>
    </>
  );
};

export default Basket;
