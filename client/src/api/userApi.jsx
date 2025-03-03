import axios from "axios";

export const register = async (user) => {
    try {
        const repsonse = await axios.post(`${import.meta.env.VITE_API_URL}user/register`, user);
        return repsonse.data;
    } catch (error) {
        return error.response.data;
    }
}