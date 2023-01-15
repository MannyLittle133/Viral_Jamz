// spotify api top 10
// https://api.spotify.com/v1/search?q=artist:abba&type=album
// https://api.spotify.com/v1/search?q=artist:abba&type=album&limit=1
// https://api.spotify.com/v1/search?q=artist:abba&type=album&limit=1&offset=1

// App Status Development mode (what does this mean?)
// Client ID 891171d4b4ca47069bb6aa7958218249
// Client Secret cb0bc2c317e04338a374b904b9b48528 

import Example from "./scripts/example";
// import SpotifyWebApi from 'spotify-web-api-js';

document.addEventListener('DOMContentLoaded', function() {
    const root = document.
    querySelector('#root');
    console.log("DOM loaded");

    new Example(root);
});