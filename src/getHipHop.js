import Data from  './scripts/apiUtil.js';

// document.addEventListener('DOMContentLoaded', async function() {
//     const hipHopInfo = document.querySelector('#data');

//     function extractHipHopDetailsFromArrayWithKey(jsonArray) {
//         const tracksDetails = {};
//         jsonArray.forEach((jsonObject, index) => {
//             const albumName = jsonObject.track.album.name;
//             const artistName = jsonObject.track.album.artists[0].name;
//             const trackName = jsonObject.track.name;
//             const albumCoverUrl = jsonObject.track.album.images[0].url;
//             const songPreviewUrl = jsonObject.track.preview_url;
//             // removed albumName
//             tracksDetails[index] = {artistName, trackName, albumCoverUrl, songPreviewUrl};
//         });
//         // debugger
//         return tracksDetails;
//     }
//     const hipHopData = new Data();
//     let hipHoptoken = await Data.access_token(hipHopData);
//     let hipHop_top_hits = await Data.getHiphop(hipHoptoken);
//     let hipHop_top_hits_track_details = extractHipHopDetailsFromArrayWithKey(hipHop_top_hits);
//     let hipHop_top_tracks = document.querySelector('#hip-hop-top-tracks');
//     let hipHopUlOuter = document.createElement('ul');
//     hipHopUlOuter.className = 'top-tracks-ul-outer';

//     for (let key in hipHop_top_hits_track_details) {
//         let ul = document.createElement('ul');
//         ul.className = 'top-tracks-ul';
//         let numberLi = document.createElement('li')
//         numberLi.innerHTML = parseInt(key) + 1;
//         ul.appendChild(numberLi);
//         let li = document.createElement('li');
//         let img = document.createElement('img');
//         img.src = hipHop_top_hits_track_details[key].albumCoverUrl;
//         img.className = 'album-img';
//         ul.appendChild(img);
//         li.className = 'top-tracks-li';
//         // show track details
//         for (let key_of_obj in hipHop_top_hits_track_details[key]) {
//             if ("albumCoverUrl" !== key_of_obj && "songPreviewUrl" !== key_of_obj) {
//             li.innerHTML += `${hipHop_top_hits_track_details[key][key_of_obj]} | `;
//             ul.appendChild(li);
//             }
//             // show song preview
//             if ("songPreviewUrl" === key_of_obj && hipHop_top_hits_track_details[key][key_of_obj] !== null) {
//                 let audio = document.createElement('audio');
//                 audio.src = hipHop_top_hits_track_details[key][key_of_obj];
//                 audio.controls = true;
//                 audio.className = 'audio';
//                 ul.appendChild(audio);
//             }
//         }
//         ul.appendChild(document.createElement('br'));
//         hipHopUlOuter.appendChild(ul);
//     }
//     hipHop_top_tracks.appendChild(hipHopUlOuter);
// });

