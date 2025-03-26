import axios from "axios";

const API_URL = "https://invest-deploy-3.onrender.com";

export const signup = async (email, password, display_name) => {
  return await axios.post(`${API_URL}/signup`, { email, password, display_name });
};

export const login = async (email, password) => {
  const response = await axios.post(`${API_URL}/login`, { email, password });
  console.log(response.data);
  return response.data;
  
};


