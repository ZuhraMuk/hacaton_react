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
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import "./ProductCard.css";
import { Link } from "react-router-dom";
import { basketContext } from "../../../context/BasketContextProvider";
import ShoppingCartSharpIcon from "@mui/icons-material/ShoppingCartSharp";

const ProductCard = ({ obj }) => {
  const { addProductToBasket } = React.useContext(basketContext);
  const [basket, setBasket] = React.useState(false);

  React.useEffect(() => {
    let basket = JSON.parse(localStorage.getItem("basket"));
    basket.products.forEach(elem => {
      if (elem.item.id === obj.id) {
        setBasket(true);
      }
    });
  }, []);

  function avatar() {
    switch (obj.category[0]) {
      case "f":
        return "#38B8FB";

      case "m":
        return "#80EDFD";

      default:
        return "#5F74FB";
    }
  }

  return (
    <Card sx={{ maxWidth: 300 }} id="card_active">
      <CardHeader
        avatar={
          <Avatar style={{ backgroundColor: avatar() }} aria-label="recipe">
            {obj.category[0].toUpperCase()}
          </Avatar>
        }
        action={
          <Link to={`/details/${obj.id}`}>
            <IconButton aria-label="settings">
              <MoreVertIcon />
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
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <BookmarkBorderIcon />
        </IconButton>
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
    </Card>
  );
};

export default ProductCard;
