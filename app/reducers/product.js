import * as types from '../const/types';

export const products = (state = [], action) => {
  switch (action.type) {
    case types.SET_PRODUCTS:
      return action.payload;
    default:
      return state;
  }
}

export const domesticProducts = (state = [], action) => {
  switch (action.type) {
    case types.SET_DOMESTIC_PRODUCTS:
      return action.payload;
    default:
      return state;
  }
}

export const internationalProducts = (state = [], action) => {
  switch (action.type) {
    case types.SET_INTERNATIONAL_PRODUCTS:
      return action.payload;
    default:
      return state;
  }
}

export const utilityProducts = (state = [], action) => {
  switch (action.type) {
    case types.SET_UTILITY_PRODUCTS:
      return action.payload;
    default:
      return state;
  }
}

export const postpaidProducts = (state = [], action) => {
  switch (action.type) {
    case types.SET_POSTPAID_PRODUCTS:
      return action.payload;
    default:
      return state;
  }
}