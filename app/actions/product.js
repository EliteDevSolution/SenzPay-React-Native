import * as types from '../const/types';
import {
  getProducts,
  getDomesticProducts,
  getInternationalProducts,
  getPostpaidProducts,
  getUtilityProducts
} from '../api/product';

export const GetProducts = (code = '', type = '', pcategory = '', pcountry = '') => {
  return (dispatch) => {
    getProducts(code, type, pcategory, pcountry)
      .then(res => {
        res.json().then(json => {
          if (json.status === true) {
            dispatch({
              type: types.SET_PRODUCTS,
              payload: json.data
            })
          }
        })
      })
      .catch(err => {

      })
  }
}

export const GetDomesticProducts = () => {
  return (dispatch) => {
    getDomesticProducts()
      .then(res => {
        res.json().then(json => {
          if (json.status === true) {
            dispatch({
              type: types.SET_DOMESTIC_PRODUCTS,
              payload: json.data
            })
          }
        })
      })
  }
}

export const GetInternationalProducts = () => {
  return (dispatch) => {
    getInternationalProducts()
      .then(res => {
        res.json().then(json => {
          if (json.status === true) {
            dispatch({
              type: types.SET_INTERNATIONAL_PRODUCTS,
              payload: json.data
            })
          }
        })
      })
  }
}

export const GetUtilityProducts = () => {
  return (dispatch) => {
    getUtilityProducts()
      .then(res => {
        res.json().then(json => {
          if (json.status === true) {
            dispatch({
              type: types.SET_UTILITY_PRODUCTS,
              payload: json.data
            })
          }
        })
      })
  }
}

export const GetPostpaidProducts = () => {
  return (dispatch) => {
    getPostpaidProducts()
      .then(res => {
        res.json().then(json => {
          if (json.status === true) {
            dispatch({
              type: types.SET_POSTPAID_PRODUCTS,
              payload: json.data
            })
          }
        })
      })
  }
}