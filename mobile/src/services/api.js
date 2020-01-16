import axios from 'axios';

const api = axios.create({
    baseURL: 'xj-y39.anonymous.mobile.exp.direct:3333'
});

export default api;