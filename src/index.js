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
            const songPreviewUrl = jsonObject.track.preview_url;
            // removed albumName
            tracksDetails[index] = {artistName, trackName, albumCoverUrl, songPreviewUrl};
        });
        return tracksDetails;
    }


    const data = new Data();
    let token = await Data.access_token(data);

    let top_hits = await Data.getTopTracks(token);


    // This is a list of tracks with details
    let top_hits_track_details = extractTrackDetailsFromArrayWithKey(top_hits);


    let top_tracks = document.querySelector('#top-tracks');

    let ulOuter = document.createElement('ul');
    ulOuter.className = 'top-tracks-ul-outer';

    // debugger
    for (let key in top_hits_track_details) {
        let ul = document.createElement('ul');
        ul.className = 'top-tracks-ul';
        // debugger
        // li.innerHTML = top_hits_track_details[key];
        let numberLi = document.createElement('li')
        numberLi.innerHTML = parseInt(key) + 1;
        ul.appendChild(numberLi);
        let li = document.createElement('li');
        let img = document.createElement('img');
        img.src = top_hits_track_details[key].albumCoverUrl;
        img.className = 'album-img';
        ul.appendChild(img);
        li.className = 'top-tracks-li';
        // show track details
        for (let key_of_obj in top_hits_track_details[key]) {
            if ("albumCoverUrl" !== key_of_obj && "songPreviewUrl" !== key_of_obj) {
            li.innerHTML += `${top_hits_track_details[key][key_of_obj]} | `;
            ul.appendChild(li);
            }
            // show song preview
            if ("songPreviewUrl" === key_of_obj && top_hits_track_details[key][key_of_obj] !== null) {
                let audio = document.createElement('audio');
                audio.src = top_hits_track_details[key][key_of_obj];
                audio.controls = true;
                audio.className = 'audio';
                ul.appendChild(audio);
            }
            
            // debugger
        }
        ul.appendChild(document.createElement('br'));
        ulOuter.appendChild(ul);

    }
    // for (let i = 0; i < 10; i++) {
    //     let li = document.createElement('li');
    //     li.innerHTML = top_hits_track_details[i].trackName;
    //     let img = document.createElement('img');
    //     img.src = top_hits_track_details[i].albumCoverUrl;
    //     li.append(img);
    //     ul.appendChild(li);
    // }

    // debugger
    top_tracks.appendChild(ulOuter);
    // debugger
    console.log('VIRAL JAMZ - TOP 50');
    // access_token

    // import { getTopTracks } from './scripts/apiUtil';


    // fetchData()
    //     .then(data => {
    //         const container = document.getElementById("dataContainer");
    //         container.innerHTML = data;
    //     })

});
