/* eslint-disable */
import store from '@/store/store'
import axios from 'axios'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

const instance = axios.create({
    baseURL: 'https://sortikav2.herokuapp.com/api/v1/',
    // baseURL: 'https://ecommerce-api.sortika.com/api/v1/',
    headers: {
        'x-api-key': store ? store.getters['apiToken'] : '',
        'Content-Type':'application/json',
        "Access-Control-Allow-Origin": "*",
    }
})

var requests = 0;
instance.interceptors.request.use(function (config) {
    if (requests === 0) NProgress.start()
    requests++;
    config.headers['x-api-key'] = store ? store.getters['apiToken'] : '';
    
    return config

}, function (error) {
    NProgress.done(true)

    return Promise.reject({ message: 'Request was not sent. Please check your connection, or contact us for assistance.', errors: [], status: 0 });
});
 
instance.interceptors.response.use(function (response) {
    requests--;
    if (requests === 0) NProgress.done()
    
    if(response.data.success == false) {
        let errorMessages = []
        let mainMessage = response.data.message || 'A problem occurred. Please try again'
        
        if(response.data.errors) {
            for(let i in response.data.errors) errorMessages.push(response.data.errors[i][0])
        }

        return Promise.reject({ message: mainMessage, errors: errorMessages, status: response.status })
    }
    
    return response;
    
  }, function (error) {
    NProgress.done(true)

    if(error.response && error.response.data && error.response.data.errors) {
        let errorMessages = []
        let mainMessage = error.response.data.message || 'An error occurred. Please try again'
        for(let i in error.response.data.errors) errorMessages.push(error.response.data.errors[i][0])

        return Promise.reject({ message: mainMessage, errors: errorMessages, status: error.response ? error.response.status : 0 })

    } else if (error.response && error.response.status) {
        let errorMessages = []
        let mainMessage = 'An error occurred. Please try again'
        
        switch (error.response.status){
            case 404:
                mainMessage = 'The requested resource was not found. Please try again'
                break
            case 500:
                mainMessage = 'A problem occurred. Please contact us for assistance'
                break
            case 403:
                mainMessage = 'You do not have sufficient permissions to perform this action'
                break
        }

        return Promise.reject({ message: mainMessage, errors: errorMessages, status: error.response.status })

    } else {
        return Promise.reject({ message: 'A problem occurred. Please check your connection, or contact us for assistance.', errors: [], status: 0 })
    }

});

export default instance
