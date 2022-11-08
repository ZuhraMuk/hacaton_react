import React, { useContext, useEffect, useState } from "react";
import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import "./EditProduct.css";
import { useNavigate, useParams } from "react-router-dom";
import { productContext } from "../../../context/ProductContextProvider";

const EditProduct = () => {
  const { productDetails, readOneProduct, editProduct } =
    useContext(productContext);
  const [inpValues, setInpValues] = useState(productDetails);

  const { id } = useParams();

  useEffect(() => {
    readOneProduct(id);
  }, [id]);

  function handleChange(e) {
    let obj = {};
    if (e.target.name == "price") {
      obj = {
        ...inpValues,
        [e.target.name]: +e.target.value,
      };
    } else {
      obj = {
        ...inpValues,
        [e.target.name]: e.target.value,
      };
    }
    setInpValues(obj);
  }

  const navigate = useNavigate();

  function handleSave(e) {
    e.preventDefault();
    if (
      !inpValues.category.trim() ||
      !inpValues.title.trim() ||
      !inpValues.model.trim() ||
      !inpValues.description.trim() ||
      !inpValues.price ||
      !inpValues.img1.trim() ||
      !inpValues.img2.trim() ||
      !inpValues.img3.trim()
    ) {
      alert("Заполните все поля!");
      return;
    }
    editProduct(id, inpValues);
    navigate("/list");
  }

  return (
    <>
      <h2 id="add-title">Product editing</h2>
      <form
        id="form-add"
        onSubmit={e => handleSave(e)}
        style={{ minWidth: "280px" }}>
        <FormControl sx={{ m: 1 }}>
          <InputLabel id="demo-simple-select-autowidth-label">
            Category
          </InputLabel>
          <Select
            labelId="demo-simple-select-autowidth-label"
            id="demo-simple-select-autowidth"
            name="category"
            value={inpValues.category}
            onChange={e => handleChange(e)}
            autoWidth
            label="Category">
            <MenuItem value="femail">femail</MenuItem>
            <MenuItem value="male">male</MenuItem>
            <MenuItem value="childrens">childrens</MenuItem>
          </Select>
        </FormControl>
        {/* <TextField
          className="outlined-basic"
          label="Категория"
          variant="outlined"
          name="category"
          value={inpValues.category}
          onChange={e => handleChange(e)}
        /> */}
        <TextField
          className="outlined-basic"
          label="Title"
          variant="outlined"
          name="title"
          value={inpValues.title}
          onChange={e => handleChange(e)}
        />
        <TextField
          className="outlined-basic"
          label="Model"
          variant="outlined"
          name="model"
          value={inpValues.model}
          onChange={e => handleChange(e)}
        />
        <TextField
          className="outlined-basic"
          label="Description"
          variant="outlined"
          name="description"
          value={inpValues.description}
          onChange={e => handleChange(e)}
        />
        <TextField
          className="outlined-basic"
          label="Price"
          variant="outlined"
          name="price"
          type="number"
          value={inpValues.price}
          onChange={e => handleChange(e)}
        />
        <TextField
          className="outlined-basic"
          label="img1"
          variant="outlined"
          name="img1"
          value={inpValues.img1}
          onChange={e => handleChange(e)}
        />
        <TextField
          className="outlined-basic"
          label="img2"
          variant="outlined"
          name="img2"
          value={inpValues.img2}
          onChange={e => handleChange(e)}
        />
        <TextField
          className="outlined-basic"
          label="img3"
          variant="outlined"
          name="img3"
          value={inpValues.img3}
          onChange={e => handleChange(e)}
        />
        <Button variant="contained" type="submit">
          Save
        </Button>
      </form>
    </>
  );
};

export default EditProduct;
