import axios from 'axios';

export default
    axios.create({
        baseURL: 'https://devetronics-5bc06-default-rtdb.firebaseio.com/'
    });