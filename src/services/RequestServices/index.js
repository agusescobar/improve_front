/* eslint-disable no-undef */
const baseURL = process.env.REACT_APP_API_URL

function RequestService ({ parameter, method }) {

  var requestOptions = {
    method,
  }

  return fetch(`${baseURL}${parameter}`, requestOptions)
  
}

export default RequestService
