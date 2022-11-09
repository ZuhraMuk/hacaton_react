import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { blue } from "@mui/material/colors";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import LoupeIcon from "@mui/icons-material/Loupe";
import "./ProductCard.css";
import { Link } from "react-router-dom";
import { basketContext } from "../../../context/BasketContextProvider";
import ShoppingCartSharpIcon from "@mui/icons-material/ShoppingCartSharp";
import { Button } from "@mui/material";

const ProductCard = ({ obj }) => {
  const { addProductToBasket } = React.useContext(basketContext);
  const [basket, setBasket] = React.useState(false);

  React.useEffect(() => {
    let basket = JSON.parse(localStorage.getItem("basket"));
    if (basket !== null) {
      basket.products.forEach(elem => {
        if (elem.item.id === obj.id) {
          setBasket(true);
        }
      });
    }
  }, []);

  function avatar() {
    switch (obj.category[0]) {
      case "f":
        return "#86A8E7";

      case "m":
        return "#5FFBF1";

      default:
        return "#E7BBD4";
    }
  }

  return (
    <div
      style={{ maxWidth: 300, minWidth: 260, margin: "5px" }}
      id="card_active">
      <CardHeader
        avatar={
          <Avatar style={{ backgroundColor: avatar() }} aria-label="recipe">
            {obj.category[0].toUpperCase()}
          </Avatar>
        }
        action={
          <Link to={`/details/${obj.id}`}>
            <IconButton aria-label="settings">
              <LoupeIcon />
            </IconButton>
          </Link>
        }
        title={obj.title}
        subheader={obj.model}
      />
      <CardMedia
        component="img"
        height="280"
        image={obj.img1}
        alt={obj.title}
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary" className="cardText">
          {obj.description}
        </Typography>
      </CardContent>
      <CardActions
        disableSpacing
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
        }}>
        <Link to="/buy">
          <Button variant="contained" sx={{ marginLeft: "20px" }}>
            Buy
          </Button>
        </Link>

        {basket ? (
          <IconButton
            aria-label="share"
            onClick={() => {
              addProductToBasket(obj);
              setBasket(!basket);
            }}>
            <ShoppingCartSharpIcon />
          </IconButton>
        ) : (
          <IconButton
            aria-label="share"
            onClick={() => {
              addProductToBasket(obj);
              setBasket(!basket);
            }}>
            <ShoppingCartOutlinedIcon />
          </IconButton>
        )}
      </CardActions>
    </div>
  );
};

export default ProductCard;
