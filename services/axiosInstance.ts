import axios from "axios";

const endpoint = process.env.BASE_URL;

const AxiosInstance = axios.create({
	baseURL: endpoint,
});

export default AxiosInstance;
