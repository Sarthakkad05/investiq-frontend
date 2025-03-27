import axios from "axios";

const BASE_URL = import.meta.env.VITE_BACKEND_URL;

export const signup = async (email, password, display_name) => {
  return await axios.post(`${BASE_URL}/signup`, { email, password, display_name });
};

export const login = async (email, password) => {
  const response = await axios.post(`${BASE_URL}/login`, { email, password });
  console.log(response.data);
  return response.data;
  
};


