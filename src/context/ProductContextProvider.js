import axios from "axios";
import React, { createContext, useReducer } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export const productContext = createContext();

const API = "http://localhost:8000/products";
const API2 = "http://localhost:8000/comments";
const INIT_STATE = {
  products: null,
  productDetails: null,
  pageTotalCount: 1,
  comments: null,
};

function reducer(prevState, action) {
  switch (action.type) {
    case "GET_PRODUCT":
      return {
        ...prevState,
        product: action.payload.data,
        pageTotalCount: Math.ceil(action.payload.headers["x-total-count"] / 3),
      };
    case "GET_ONE_PRODUCT":
      return { ...prevState, productDetails: action.payload };
    case "GET_COMMENTS":
      return { ...prevState, comments: action.payload };
    default:
      return prevState;
  }
}

const ProductContextProvider = props => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);
  const location = useLocation();

  const navigate = useNavigate();

  // ! ====== Create =======
  async function addComments(newComment) {
    try {
      await axios.post(API2, newComment);
    } catch (error) {
      return error;
    }
    readComments();
  }

  async function addProduct(newProduct) {
    try {
      await axios.post(API, newProduct);
    } catch (error) {
      return error;
    }
    readProduct();
  }

  // ! ====== READ ======
  async function readComments() {
    const { data } = await axios(API2);
    console.log(data);
    dispatch({
      type: "GET_COMMENTS",
      payload: data,
    });
  }

  async function readProduct() {
    const res = await axios(`${API}${location.search}`);
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
    readComments,
    addComments,
    productsArr: state.product,
    productDetails: state.productDetails,
    pageTotalCount: state.pageTotalCount,
    comments: state.comments,
  };
  return (
    <productContext.Provider value={cloud}>
      {props.children}
    </productContext.Provider>
  );
};

export default ProductContextProvider;
