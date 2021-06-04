import axios from 'axios';

axios.interceptors.response.use((response) => {
    return response;
}, (err) => {
    return Promise.reject(err)
})

const generateRequest = (method: any, url: string, params: object) => {
    return axios({
        method,
        url,
        params,
    })
    .then((response) => {
        return response.data;
    })
    .catch(error => {
        if (error.response) {
            // The request was made and the server responded with a status code
            // that falls out of the range of 2xx
            console.log(error.response.data);
            console.log(error.response.status);
            console.log(error.response.headers);
          } else if (error.request) {
            // The request was made but no response was received
            // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
            // http.ClientRequest in node.js
            console.log(error.request);
          } else {
            // Something happened in setting up the request that triggered an Error
            console.log('Error', error.message);
          }
          console.log(error.config);
    })
}

export const $get = (url: string, params: object) => generateRequest('get', url, params);
export const $post = (url: string, params: object) => generateRequest('post', url, params);
export const $put = (url: string, params: object) => generateRequest('put', url, params);
export const $delete = (url: string, params: object) => generateRequest('delete', url, params);
