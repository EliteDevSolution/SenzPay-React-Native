import { combineReducers } from 'redux';
import user from './user';
import report from './report';
import { products, domesticProducts, internationalProducts, utilityProducts, postpaidProducts } from './product';

export default combineReducers({
  user,
  report,
  products,
  domesticProducts,
  internationalProducts,
  utilityProducts,
  postpaidProducts
});