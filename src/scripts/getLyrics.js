// const axios = require('axios');

// const API_KEY = 'eM3xTmsBnuE29qtubGNKs_nAgyZ4qMsnu7u86VXzzsM5coPUC-AP2_3WJUEXwTzB';

// async function fetchingAPI(songTitle, artistName) {
//     return axios.get(`https://api.genius.com/search?q=${songTitle} ${artistName}`, {
//         headers: {
//           'Authorization': `Bearer ${API_KEY}`
//         }
//       })
//       .then(response => {
//         const songId = response.data.response.hits[0].result.id;
//         return axios.get(`https://api.genius.com/songs/${songId}`, {
//           headers: {
//             'Authorization': `Bearer ${API_KEY}`
//           }
//         });
//       })
//       .then(response => {
//         const songLyrics = response.data.response.song.lyrics;
//         console.log(songLyrics);
//       })
//       .catch(error => {
//         console.log(error);
//       });
// }

// export default fetchingAPI;
