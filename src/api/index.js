import axios from 'axios';

export default
    axios.create({
        baseURL: 'https://sortikav2.herokuapp.com/api/v1/'
    });