import axios from "axios";
import { BACKEND_URL_ENDPOINT, GET_ALL_CUISINES_API } from "../constants/backend";

import {
  CUISINE_LIST_REQUEST,
  CUISINE_LIST_SUCCESS,
  CUISINE_LIST_FAILURE,
  CUISINE_DETAILS_REQUEST,
  CUISINE_DETAILS_SUCCESS,
  CUISINE_DETAILS_FAILURE,
} from "../constants/cuisineActionConstants";

export const listRestaurants = () => async (dispatch) => {
  try {
    dispatch({
      type: CUISINE_LIST_REQUEST,
    });

    const userInfo = JSON.parse(localStorage.getItem("userInfo"));

    const config = {
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH",
      },
    };

    await axios
      .get(GET_ALL_RESTAURANTS_API, config)
      .then((res) => {
        if (res.status === 200) {
          console.log(res.data.data)
          dispatch({
            type: CUISINE_LIST_SUCCESS,
            payload: res.data.data,
          });
        } else {
          dispatch({
            type: CUISINE_LIST_FAILURE,
            payload: 'Not able to fetch the restaurants',
          });
        }
      });
  } catch (err) {
    dispatch({
      type: CUISINE_LIST_FAILURE,
      payload: 'Not able to fetch the restaurants',
    });
  }
};

export const fetchRestaurantDetails = (restaurantId) => async (dispatch) => {
  try {
    dispatch({
      type: CUISINE_DETAILS_REQUEST,
    });

    const config = {
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH",
      },
    };

    await axios
      .get(GET_ALL_RESTAURANTS_API+ '/' + restaurantId, config)
      .then((res) => {
        if (res.status === 200) {
          dispatch({ type: CUISINE_DETAILS_SUCCESS, payload: res.data.data });
        } else {
          dispatch({ type: CUISINE_DETAILS_FAILURE, payload: res.data.message });
        }
      });
  } catch (err) {
    dispatch({
      type: CUISINE_DETAILS_FAILURE,
      payload: err.response.data.message,
    });
  }
};
