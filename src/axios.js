import axios from 'axios';

export default axios.create({
    baseURL : 'https://app-burger-124-default-rtdb.firebaseio.com/'
})