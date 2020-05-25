import axios from "axios";
import {
  SET_LOADING,
  ADD_ORDER,
  ORDER_ERROR,
  GET_ORDER,
  CLEAR_ORDER,
} from "./types";

export const setLoading = () => {
  return {
    type: SET_LOADING,
  };
};

// add order
export const addOrder = (order) => async (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  try {
    setLoading();
    const res = await axios.post("/orders", order, config);
    dispatch({
      type: ADD_ORDER,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: ORDER_ERROR,
      payload: err,
    });
  }
};

export const getOrder = (id) => async (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  try {
    const res = await axios.get(`/orders/${id}`, config);
    dispatch({
      type: GET_ORDER,
      payload: res.data,
    });
  } catch (err) {
    dispatch({ type: ORDER_ERROR, payload: err });
  }
};

export const clearCurrentOrder = () => {
  return {
    type: CLEAR_ORDER,
  };
};
