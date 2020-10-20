export const getProducts = (code, type, pcategory, pcountry) => {
  let apiUrl = `http://103.51.41.134/localuser/sp_services/products.php?`
  apiUrl += `code=` + code;
  apiUrl += `&type=` + type;
  apiUrl += `&pcategory=` + pcategory;
  apiUrl += `&pcountry=` + pcountry;
  return fetch(apiUrl, {
    method: 'GET'
  })
}

export const getDomesticProducts = () => {
  const apiUrl = `http://103.51.41.134/localuser/sp_services/products_domestic.php`;
  return fetch(apiUrl, {
    method: 'GET'
  })
}

export const getInternationalProducts = () => {
  const apiUrl = `http://103.51.41.134/localuser/sp_services/products_international.php`;
  return fetch(apiUrl, {
    method: 'GET'
  })
}

export const getUtilityProducts = () => {
  const apiUrl = `http://103.51.41.134/localuser/sp_services/products_utility.php`;
  return fetch(apiUrl, {
    method: 'GET'
  })
}

export const getPostpaidProducts = () => {
  const apiUrl = `http://103.51.41.134/localuser/sp_services/products_postpaid.php`;
  return fetch(apiUrl, {
    method: 'GET'
  })
}