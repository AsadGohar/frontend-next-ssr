import { GET_ALL_USERS } from "../utils/consts";
import AxiosInstance from "./axiosInstance";

export const getAllUsers = async () => {
	const response = await AxiosInstance.get(GET_ALL_USERS);
	return response.data;
};
