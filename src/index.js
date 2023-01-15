// spotify api top 10
// https://api.spotify.com/v1/search?q=artist:abba&type=album
// https://api.spotify.com/v1/search?q=artist:abba&type=album&limit=1
// https://api.spotify.com/v1/search?q=artist:abba&type=album&limit=1&offset=1

// App Status Development mode (what does this mean?)
// Client ID 891171d4b4ca47069bb6aa7958218249
// Client Secret cb0bc2c317e04338a374b904b9b48528

import Data from  './scripts/apiUtil';
import Example from "./scripts/example";


// import SpotifyWebApi from 'spotify-web-api-js';

document.addEventListener('DOMContentLoaded', async function() {
    // const root = document.querySelector('#root');
    // console.log("FOO DOM loaded");
    // new Example(root);

    function extractTrackDetailsFromArrayWithKey(jsonArray) {
        const tracksDetails = {};
        jsonArray.forEach((jsonObject, index) => {
            const albumName = jsonObject.track.album.name;
            const artistName = jsonObject.track.album.artists[0].name;
            const trackName = jsonObject.track.name;
            const albumCoverUrl = jsonObject.track.album.images[0].url;
            tracksDetails[index] = {albumName, artistName, trackName, albumCoverUrl};
        });
        return tracksDetails;
    }


    const data = new Data();
    let token = await Data.access_token(data);

    let top_hits = await Data.getTopTracks(token);


    let top_hits_track_details = extractTrackDetailsFromArrayWithKey(top_hits);
    debugger
    console.log('FOO')
    // access_token
});
