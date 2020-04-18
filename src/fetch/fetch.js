import axios from 'axios'
import config from '../../config/config'


let axiosConfig = {
    baseURL: `http://${config.host}:${config.port}/api`,
    /*   
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
    },
    */
    timeout: 10000,
    responseType: 'json'
};

export function get(url) {
    return axios.get(url, axiosConfig).then(response=>response.data);
}

export function post(url, data) {
    return axios.post(url, data, axiosConfig).then(response=>response.data);
}