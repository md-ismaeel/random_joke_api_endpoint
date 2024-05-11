const express = require('express')
const app = express()
const axios = require('axios')
const http = require('node:http')
const port = 4000;

const dadJokeApi = 'https://api.api-ninjas.com/v1/dadjokes';
const imageApi = 'https://api.unsplash.com/photos/random';


app.get('/api/random/image', async (req, res) => {
    try {
        const response = await axios.get(imageApi, {
            headers: {
                "Authorization": "Client-ID KaAbLeE5ARrqQXhHf2QfqQzt2imDHOiGlKbcBGPu3iY"
            }
        })
        // console.log(response.data.urls);
        res.json({
            sucess: true,
            message: 'RandomImage generated SuccessFully',
            image: response.data.urls,
        })
    } catch (err) {

        res.status(500).json({
            sucess: false,
            message: 'Internal Server Error'
        })
    }
});

app.get('/api/random/joke', async (req, res) => {

    try {
        const response = await axios.get(dadJokeApi, {
            headers: {
                "X-Api-Key": 'k8UOMDTE6d4+mpq0dZ1Yyw==mpuyhr79O29vxuOW'
            }
        })
        res.json({
            sucess: true,
            message: 'RandomJoke generated SuccessFully',
            joke: response.data,
        })

    } catch (err) {
        res.status(500).json({
            sucess: false,
            message: 'Internal Server Error',
        })
    }
});


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});



// const server = http.createServer(async (req, res) => {
//     if (req.url === '/api/random/image' && req.method === 'GET') {
//         try {

//             const response = await axios.get(imageApi, {
//                 headers: {
//                     "Authorization": "Client-ID KaAbLeE5ARrqQXhHf2QfqQzt2imDHOiGlKbcBGPu3iY"
//                 }
//             });
//             res.writeHead(200, { 'Content-Type': 'application/json' });
//             res.end(JSON.stringify({
//                 success: true,
//                 message: 'RandomImage generated successfully',
//                 image: response.data.urls
//             }));
//         } catch (error) {
//             console.error(error);
//             res.writeHead(500, { 'Content-Type': 'application/json' });
//             res.end(JSON.stringify({
//                 success: false,
//                 message: 'Internal Server Error'
//             }));
//         }
//     } else {
//         res.writeHead(404, { 'Content-Type': 'application/json' });
//         res.end(JSON.stringify({
//             success: false,
//             message: 'Not Found'
//         }));
//     }
// });

// server.listen(port, () => console.log(`Server is running on port ${port}`))