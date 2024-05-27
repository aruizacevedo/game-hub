import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '56ca226a320a45e58286cb763a4dc915'
    }
})
