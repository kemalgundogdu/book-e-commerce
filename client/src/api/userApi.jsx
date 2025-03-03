import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  withCredentials: true,
});

export const register = async (user) => {
  try {
    const repsonse = await api.post(`user/register`, user);
    return repsonse.data;
  } catch (error) {
    return error.response.data;
  }
};

export const login = async (user) => {
  try {
    const response = await api.post(`user/login`, user, {
      withCredentials: true, // Cookie’yi göndermek için
    });
    return response.data;
  } catch (error) {
    return error.response.data;
  }
};

export const getCurrentUser = async () => {
  const response = await api.get(`user/me`, {
    withCredentials: true, // Cookie’yi göndermek için
  });
  return response.data.user;
};

export const logout = async () => {
  try {
    await api.get(`user/logout`, {
      withCredentials: true, // Cookie’yi göndermek için
    });
  } catch (error) {
    return error.response.data;
  }
};
