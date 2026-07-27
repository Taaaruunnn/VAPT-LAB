const axios = require('axios');
const fetchURL =async(req, res) => {
    try{
        const {url} = req.body;
        
        const start = Date.now();

const response = await axios.get(url, {
    headers: {
        "x-internal-request": "true"
    }
});

const end = Date.now();

res.json({
    success: true,
    status: response.status,
    statusText: response.statusText,
    responseTime: `${end - start} ms`,
    headers: response.headers,
    data: response.data
});
        }catch(error){
            res.status(500).json({
                success: false,
                message: error.message,
            });
    }
};
module.exports = { fetchURL };