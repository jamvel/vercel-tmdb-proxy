const url = require("url");
const axios = require("axios");
const { version } = require("../package.json");

const API_KEY = process.env.TMDB_API_KEY;

module.exports = async (req, res) => {
    try {
        // obtain url path and remove '/api/tmdb' base path
        const path = url.parse(req.url).pathname.replace('/api/tmdb', '');

        if(path.length === 0 || path === '/'){
            res.send({
                'version': version,
                'documentation': 'https://developers.themoviedb.org/3/getting-started/introduction',
            })
            return;
        }

        const { data } = await axios({
            method: req.method,
            baseURL: 'https://api.themoviedb.org/3',
            url: path,
            params: {
                api_key: API_KEY,
                ...req.query
            },
            body: req.body
        })
        res.send(data)
    } catch(e) {
        const { response } = e;
        if(response && 'status' in response){
            res.status(response.status)
            res.send(response.data)
        }else{
            res.status(500)
            res.send('Something went wrong')
        }
    }
}