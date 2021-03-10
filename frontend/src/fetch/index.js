import { MAIN_API } from "../utils/constants";

export const postMainApi = async(url = '', data = {}) => {
  // Default options are marked with *
  const response = await fetch(MAIN_API + url, {
    method: 'POST', // *GET, POST, PUT, DELETE, etc.
    mode: 'cors', // no-cors, *cors, same-origin
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data) // body data type must match "Content-Type" header
  });
  return response.json();
}

export const getMainApi = async (url = "") => {
  // Default options are marked with *
  const response = await fetch(MAIN_API + url, {
    method: "GET", // *GET, POST, PUT, DELETE, etc.
    mode: "cors", // no-cors, *cors, same-origin
    headers: {
      "Content-Type": "application/json",
    },
  });
  return response.json();
};