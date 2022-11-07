import axios from "axios";
import React, { createContext, useReducer } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export const productContext = createContext();

const API = "http://localhost:8000/products";

const INIT_STATE = {
  products: null,
  productDetails: null,
  pageTotalCount: 1,
};

function reducer(prevState, action) {
  switch (action.type) {
    case "GET_PRODUCT":
      return {
        ...prevState,
        product: action.payload.data,
        pageTotalCount: Math.ceil(action.payload.headers["x-total-count"] / 9),
      };
    case "GET_ONE_PRODUCT":
      return {
        ...prevState,
        productDetails: action.payload,
      };
    default:
      return prevState;
  }
}

const ProductContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);

  const location = useLocation();

  const navigate = useNavigate();

  async function addProduct(newProduct) {
    try {
      await axios.post(API, newProduct);
      readProduct();
    } catch (error) {
      return error;
    }
  }

  async function readProduct() {
    const res = await axios(`${API}${location.search}`);
    // console.log(res);
    dispatch({
      type: "GET_PRODUCT",
      payload: res,
    });
  }

  async function readOneProduct(id) {
    const { data } = await axios(`${API}/${id}`);
    dispatch({
      type: "GET_ONE_PRODUCT",
      payload: data,
    });
  }

  async function deleteProduct(id) {
    try {
      await axios.delete(`${API}/${id}`);
      readProduct();
      navigate("/list");
    } catch (error) {
      return error;
    }
  }

  async function editProduct(id, editedObj) {
    await axios.patch(`${API}/${id}`, editedObj);
    readProduct();
  }

  let cloud = {
    addProduct,
    readProduct,
    readOneProduct,
    deleteProduct,
    editProduct,
    productsArr: state.product,
    productDetails: state.productDetails,
    pageTotalCount: state.pageTotalCount,
  };
  return (
    <productContext.Provider value={cloud}>{children}</productContext.Provider>
  );
};

export default ProductContextProvider;
