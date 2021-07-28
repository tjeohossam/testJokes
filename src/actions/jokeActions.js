import axios from "axios";
import {
  JOKE_ADD_FAIL,
  JOKE_ADD_REQUEST,
  JOKE_ADD_SUCCESS,
  JOKE_LIST_DELETE_FAIL,
  JOKE_LIST_DELETE_REQUEST,
  JOKE_LIST_DELETE_SUCCESS,
  JOKE_LIST_FAIL,
  JOKE_LIST_REQUEST,
  JOKE_LIST_SUCCESS,
} from "../constants/jokeConstants";

export const listJokes = () => async (dispatch) => {
  try {
    dispatch({ type: JOKE_LIST_REQUEST });

    const { data } = await axios.get(
      `https://official-joke-api.appspot.com/random_ten`
    );

    dispatch({
      type: JOKE_LIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: JOKE_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
export const addSingleJoke = () => async (dispatch) => {
  try {
    dispatch({ type: JOKE_ADD_REQUEST });

    const { data } = await axios.get(
      `https://official-joke-api.appspot.com/random_joke`
    );

    dispatch({
      type: JOKE_ADD_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: JOKE_ADD_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
export const deleteJokes = () => async (dispatch) => {
  try {
    dispatch({ type: JOKE_LIST_DELETE_REQUEST });

    dispatch({
      type: JOKE_LIST_DELETE_SUCCESS,
    });
  } catch (error) {
    dispatch({
      type: JOKE_LIST_DELETE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

// export const createProduct = () => async (dispatch, getState) => {
//   try {
//     dispatch({
//       type: PRODUCT_CREATE_REQUEST,
//     })

//     const {
//       userLogin: { userInfo },
//     } = getState()

//     const config = {
//       headers: {
//         Authorization: `Bearer ${userInfo.token}`,
//       },
//     }

//     const { data } = await axios.post(`/api/products`, {}, config)

//     dispatch({
//       type: PRODUCT_CREATE_SUCCESS,
//       payload: data,
//     })
//   } catch (error) {
//     const message =
//       error.response && error.response.data.message
//         ? error.response.data.message
//         : error.message
//     if (message === 'Not authorized, token failed') {
//       dispatch(logout())
//     }
//     dispatch({
//       type: PRODUCT_CREATE_FAIL,
//       payload: message,
//     })
//   }
// }

// export const updateProduct = (product) => async (dispatch, getState) => {
//   try {
//     dispatch({
//       type: PRODUCT_UPDATE_REQUEST,
//     })

//     const {
//       userLogin: { userInfo },
//     } = getState()

//     const config = {
//       headers: {
//         'Content-Type': 'application/json',
//         Authorization: `Bearer ${userInfo.token}`,
//       },
//     }

//     const { data } = await axios.put(
//       `/api/products/${product._id}`,
//       product,
//       config
//     )

//     dispatch({
//       type: PRODUCT_UPDATE_SUCCESS,
//       payload: data,
//     })
//     dispatch({ type: PRODUCT_DETAILS_SUCCESS, payload: data })
//   } catch (error) {
//     const message =
//       error.response && error.response.data.message
//         ? error.response.data.message
//         : error.message
//     if (message === 'Not authorized, token failed') {
//       dispatch(logout())
//     }
//     dispatch({
//       type: PRODUCT_UPDATE_FAIL,
//       payload: message,
//     })
//   }
// }

// export const createProductReview = (productId, review) => async (
//   dispatch,
//   getState
// ) => {
//   try {
//     dispatch({
//       type: PRODUCT_CREATE_REVIEW_REQUEST,
//     })

//     const {
//       userLogin: { userInfo },
//     } = getState()

//     const config = {
//       headers: {
//         'Content-Type': 'application/json',
//         Authorization: `Bearer ${userInfo.token}`,
//       },
//     }

//     await axios.post(`/api/products/${productId}/reviews`, review, config)

//     dispatch({
//       type: PRODUCT_CREATE_REVIEW_SUCCESS,
//     })
//   } catch (error) {
//     const message =
//       error.response && error.response.data.message
//         ? error.response.data.message
//         : error.message
//     if (message === 'Not authorized, token failed') {
//       dispatch(logout())
//     }
//     dispatch({
//       type: PRODUCT_CREATE_REVIEW_FAIL,
//       payload: message,
//     })
//   }
// }

// export const listTopProducts = () => async (dispatch) => {
//   try {
//     dispatch({ type: PRODUCT_TOP_REQUEST })

//     const { data } = await axios.get(`/api/products/top`)

//     dispatch({
//       type: PRODUCT_TOP_SUCCESS,
//       payload: data,
//     })
//   } catch (error) {
//     dispatch({
//       type: PRODUCT_TOP_FAIL,
//       payload:
//         error.response && error.response.data.message
//           ? error.response.data.message
//           : error.message,
//     })
//   }
// }
