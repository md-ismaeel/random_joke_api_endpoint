const express = require('express')
const app = express()
const axios = require('axios')
const http = require('node:http')
const port = 4000;

const dadJokeApi = 'https://api.api-ninjas.com/v1/dadjokes';
const imageApi = 'https://api.unsplash.com/photos/random';

const getRandomImage = async (url) => {
    try {
        const response = await axios.get(url, {
            headers: {
                "Authorization": "Client-ID KaAbLeE5ARrqQXhHf2QfqQzt2imDHOiGlKbcBGPu3iY"
            }
        })

        const data = response.data.urls
        return data;

    } catch (err) {
        console.error('Error fetching random image:', err);
        throw err;
    }
}

const getRandomJoke = async (url) => {
    try {
        const response = await axios.get(url, {
            headers: {
                "X-Api-Key": 'k8UOMDTE6d4+mpq0dZ1Yyw==mpuyhr79O29vxuOW'
            }
        })
        const data = response.data;
        return data;
    } catch (err) {
        console.error('Error fetching random joke:', err);
        throw err;
    }
    // console.log(data);
}

app.get('/api/random/image/joke', async (req, res) => {
    try {
        const jokeData = await getRandomJoke(dadJokeApi)
        const imageData = await getRandomImage(imageApi)
        res.json({
            sucess: true,
            message: 'Random image and jake generated SuccessFully',
            joke: jokeData,
            image: imageData
        })
    } catch (err) {

        res.status(500).json({
            sucess: false,
            message: 'Internal Server Error'
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