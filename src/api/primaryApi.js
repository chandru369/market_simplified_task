import axios from 'axios';

export default axios.create({
    baseURL: 'https://hplussport.com/api/products/',
    headers: {
        'Access-Control-Allow-Origin':'https://hplussport.com/api/products/',
        'Access-Control-Allow-Methods': 'GET, POST, PATCH, PUT, DELETE, OPTIONS',
        'Access-Control-Allow-Headers': 'Origin, X-Auth-Token',
        'Access-Control-Expose-Headers': 'Content-Length, X-JSON',
        'Access-Control-Allow-Credentials': 'true',
        
    }
}
)