import axios from 'axios';
const KEY = "AIzaSyAGYUgMiUeD6im9-tJyrlwra4h1vEIKXkM";

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params:{
        part:'snippet',
        type: 'video',
        maxResult: 5,
        key: KEY
    }
})