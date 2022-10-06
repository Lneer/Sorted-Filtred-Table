import { DB_URL } from "../types/dbUrl";
import axios from 'axios';

interface Options {
	page: number;
	limit: number
}
export const getData = async (endpoint: string, options?: Options) => {
	let url = `${DB_URL}/${endpoint}`;
	if (options) {
		const keys = Object.keys(options)
		const querys = keys.map((key) => `_${key}=${options[key as keyof Options]}`)
		url = `${url}?${querys.join('&')}`
	}
	const response = await axios.get(url)
	console.log(url);

	return response.data
}