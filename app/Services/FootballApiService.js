const axios = require('axios');

class FootballApiService {
    async consumeApi(url) {
        try {
            const req = await axios.get(url, {
                headers: {
                    'X-Auth-Token': '90c71145dd30497f9f29ec0095dc1dcc'
                }
            })
                .then(respuesta => respuesta);

            return {
                data: req.data,
                status: 200
            };

        } catch (err) {
            return {
                data: err.message,
                status: 403
            }
        }
    }
}

module.exports = new FootballApiService();