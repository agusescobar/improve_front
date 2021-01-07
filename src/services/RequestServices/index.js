/* eslint-disable no-undef */
const baseURL = process.env.REACT_APP_API_URL

function RequestService ({ param, method }) {


  var requestOptions = {
    method,
  }

  return fetch(`${baseURL}${param}`, requestOptions)
  
}

export default RequestService
