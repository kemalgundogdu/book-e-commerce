import axios from "axios";

export const getBooks = async () => {
  const response = await axios.get(
    `${import.meta.env.VITE_API_URL}book/all-books`
  );
  return response.data;
};

export const getCategoryBooks = async (category) => {
  const response = await axios.get(
    `${import.meta.env.VITE_API_URL}book/category/${category}`
  );
  return response.data;
};
