import {
  Alert,
  Box,
  Button,
  Container,
  Grid,
  Paper,
  Typography,
} from "@mui/material";
import React, { useContext, useState } from "react";
import { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { productContext } from "../../../context/ProductContextProvider";
import { Link, useNavigate, useParams } from "react-router-dom";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import "./ProductDetails.css";
import SwiperCore, { Thumbs } from "swiper";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import ShoppingCartSharpIcon from "@mui/icons-material/ShoppingCartSharp";
import { basketContext } from "../../../context/BasketContextProvider";
import { authContext } from "../../../context/AuthContextProvider";

SwiperCore.use([Thumbs]);

const ProductDetails = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  const { readOneProduct, productDetails, deleteProduct } =
    useContext(productContext);

  const { addProductToBasket } = useContext(basketContext);

  const { user } = useContext(authContext);

  const { id } = useParams();

  const [basket, setBasket] = React.useState(false);

  React.useEffect(() => {
    let basket = JSON.parse(localStorage.getItem("basket"));
    if (basket !== null) {
      if (productDetails !== null) {
        basket.products.forEach(elem => {
          if (elem.item.id === productDetails.id) {
            setBasket(true);
          }
        });
      }
    }
  }, []);

  useEffect(() => {
    readOneProduct(id);
  }, [id]);

  const navigate = useNavigate();

  return (
    <>
      {productDetails ? (
        <Container
          sx={{
            marginTop: "40px",
            marginBottom: "10px",
          }}>
          <Grid container spacing={2}>
            <Grid item xs={7} mx="auto">
              <Swiper
                className="mySwiper2"
                spaceBetween={10}
                thumbs={{ swiper: thumbsSwiper }}
                style={{ maxHeight: "600px" }}>
                <SwiperSlide>
                  <img src={productDetails.img1} alt={productDetails.title} />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={productDetails.img2} alt={productDetails.title} />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={productDetails.img3} alt={productDetails.title} />
                </SwiperSlide>
              </Swiper>
              <Swiper
                onSwiper={setThumbsSwiper}
                spaceBetween={10}
                slidesPerView={4}
                freeMode={true}
                watchSlidesProgress={true}
                className="mySwiper">
                <SwiperSlide>
                  <Paper elevation={3}>
                    <img src={productDetails.img1} alt={productDetails.title} />
                  </Paper>
                </SwiperSlide>
                <SwiperSlide>
                  <Paper elevation={3}>
                    <img src={productDetails.img2} alt={productDetails.title} />
                  </Paper>
                </SwiperSlide>
                <SwiperSlide>
                  <Paper elevation={3}>
                    <img src={productDetails.img3} alt={productDetails.title} />
                  </Paper>
                </SwiperSlide>
              </Swiper>
            </Grid>
            <Grid item xs={10} mx="auto">
              <Paper elevation={3} sx={{ padding: "10px", marginTop: "40px" }}>
                <Typography variant="h5" sx={{ fontWeight: "bold" }}>
                  {productDetails.title}
                </Typography>
                <Typography variant="h6">{productDetails.model}</Typography>
                <hr />
                <Typography sx={{ marginTop: "30px" }}>
                  {productDetails.description}
                </Typography>
                <Alert
                  icon={<AttachMoneyIcon />}
                  sx={{
                    fontSize: "20px",
                    fontWeight: 700,
                    mt: "20px",
                    display: "flex",
                    alignItems: "center",
                  }}>
                  Price: {productDetails.price} £
                  <Link to="/buy">
                    <Button variant="contained" sx={{ marginLeft: "20px" }}>
                      Buy
                    </Button>
                  </Link>
                  {basket ? (
                    <Button
                      variant="contained"
                      color="success"
                      sx={{ marginLeft: "20px" }}
                      onClick={() => {
                        addProductToBasket(productDetails);
                        setBasket(!basket);
                      }}>
                      <ShoppingCartSharpIcon />
                    </Button>
                  ) : (
                    <Button
                      variant="contained"
                      color="warning"
                      sx={{ marginLeft: "20px" }}
                      onClick={() => {
                        addProductToBasket(productDetails);
                        setBasket(!basket);
                      }}>
                      <ShoppingCartOutlinedIcon />
                    </Button>
                  )}
                </Alert>
                {user.email === "zuhra@mail.ru" ? (
                  <Box
                    sx={{
                      mt: "15px",
                      display: "flex",
                      justifyContent: "space-between",
                    }}>
                    <Button
                      variant="contained"
                      color="error"
                      sx={{ width: "48%" }}
                      onClick={() => deleteProduct(productDetails.id)}>
                      Delete
                    </Button>
                    <Button
                      variant="contained"
                      color="warning"
                      sx={{ width: "48%" }}
                      onClick={() => navigate(`/edit/${productDetails.id}`)}>
                      Edit
                    </Button>
                    {/* </Link> */}
                  </Box>
                ) : null}
              </Paper>
            </Grid>
          </Grid>
        </Container>
      ) : null}
    </>
  );
};

export default ProductDetails;
