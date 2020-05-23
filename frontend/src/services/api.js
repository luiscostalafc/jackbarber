import axios from 'axios';

const api = axios.create({
	baseURL: 'http://167.71.86.178:3333',
});

export default api;
