const express = require('express');
const SpotifyWebApi = require('spotify-web-api-node')

const app = express();

app.post('/login', (req, res)=> {
    const code = req.body.code
    const spotifyApi = new SpotifyWebApi ({
        redirectUri: 'http://localhost:3000/',
        clientId: '6a29aca2c5b045758a0e84d3fc2633c8',
        clientSecret: '7360f2d7a7de4e9e8e49b9a7aae24760'
    })
    
    spotifyApi.authorizationCodeGrant(code).then(data =>{
        res.json({
            accessToken: data.body.access_token,
            refreshToken: data.body.refresh_token,
            expiresIn: data.body.expires_in
        })
    }) .catch(() => {
        res.sendStatus(400)
    })

})