import { GET_ALL_TOPICS } from "../utils/consts";
import AxiosInstance from "./axiosInstance";

export const getAllTopics = async () => {
	const response = await AxiosInstance.get(GET_ALL_TOPICS);
	return response.data;
};
