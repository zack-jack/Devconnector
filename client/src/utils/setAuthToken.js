import axios from "axios";

const setAuthToken = token => {
  // Check if token exists
  if (token) {
    // If exists, apply to every request
    axios.defaults.headers.common["Authorization"] = token;
  } else {
    // If no token exists
    // Delete the Auth header
    delete axios.defaults.headers.common["Authorization"];
  }
};

export default setAuthToken;
