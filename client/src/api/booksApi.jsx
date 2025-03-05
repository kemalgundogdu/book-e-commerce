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

export const getBook = async (name) => {
  const response = await axios.get(
    `${import.meta.env.VITE_API_URL}book/${name}`
  );
  return response.data;
};

export const searchBooks = async (name) => {
  const response = await axios.get(
    `${import.meta.env.VITE_API_URL}book/s/${name}`
  );
  return response.data;
};

export const updateBook = async (book) => {
  const response = await axios.put(
    `${import.meta.env.VITE_API_URL}book/update/${book._id}`,
    book
  );
  return response.data;
};

export const addBook = async (book) => {
  const response = await axios.post(
    `${import.meta.env.VITE_API_URL}book/add`,
    book
  );
  return response.data;
};

export const deleteBook = async (id) => {
  const response = await axios.delete(
    `${import.meta.env.VITE_API_URL}book/delete/${id}`
  );
  return response.data;
}