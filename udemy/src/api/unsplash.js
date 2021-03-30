import axios from 'axios';

export default axios.create({
    baseURL:'https://api.unsplash.com/',
    headers:{
        Authorization:'Client-ID CI4CbwAaqZQgnisehxgWvOKoeBZwHYN-Jh6CuNf7kWw'
    }
});
