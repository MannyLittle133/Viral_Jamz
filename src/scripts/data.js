import SpotifyWebApi from 'spotify-web-api-js';

const spotifyApi = new SpotifyWebApi();
spotifyApi.setAccessToken(access_token);

spotifyApi.searchTracks('track_name')
.then(function(data) {
    console.log(data);
}, function(err) {
    console.error(err);
});

// GET https://api.spotify.com/v1/tracks?country=US&limit=100
// Authorization: Bearer {access_token}

const access_token = 'YOUR_ACCESS_TOKEN';
const headers = {
    'Authorization': 'Bearer ' + access_token
};

fetch('https://api.spotify.com/v1/tracks?country=US&limit=100', {
    headers: headers
})
.then(response => response.json())
.then(data => {
    // Use the data here
    console.log(data);
})
.catch(error => {
    // Handle the error
    console.error(error);
});
