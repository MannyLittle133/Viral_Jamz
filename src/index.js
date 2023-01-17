// Description: Entry point for Viral Jamz
// App Status Development mode (what does this mean?)
// Client ID 891171d4b4ca47069bb6aa7958218249
// Client Secret cb0bc2c317e04338a374b904b9b48528

import Data from  './scripts/apiUtil';
import Example from "./scripts/example";


// import SpotifyWebApi from 'spotify-web-api-js';

document.addEventListener('DOMContentLoaded', async function() {
    const info = document.querySelector('#data');
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


    // This is a list of tracks with details
    let top_hits_track_details = extractTrackDetailsFromArrayWithKey(top_hits);


    let top_tracks = document.querySelector('#top-tracks');

    let ul = document.createElement('ul');

    debugger
    for (let key in top_hits_track_details) {
        let li = document.createElement('li');
        debugger
        li.innerHTML = top_hits_track_details[key];
        for (let song in top_hits_track_details[key]) {
            li.innerHTML = top_hits_track_details[key][song];

        }

        // ul.appendChild(li);
    }
    for (let i = 0; i < 50; i++) {
        let li = document.createElement('li');
        li.innerHTML = top_hits_track_details[i].trackName;
        let img = document.createElement('img');
        img.src = top_hits_track_details[i].albumCoverUrl;
        li.append(img);
        ul.appendChild(li);
    }

    debugger
    top_tracks.appendChild(ul);
    debugger
    console.log('VIRAL JAMZ - TOP HITS');
    // access_token

    // import { getTopTracks } from './scripts/apiUtil';


    // fetchData()
    //     .then(data => {
    //         const container = document.getElementById("dataContainer");
    //         container.innerHTML = data;
    //     })

});
