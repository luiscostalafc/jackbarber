import axios from 'axios';

const api = axios.create({
	baseURL: 'http://167.99.165.125:3333',
});

export default api;
