import axios from 'axios';

export default
    axios.create({
        baseURL: 'https://davetronic-vue.firebaseio.com/'
    });