const Buffer = require('buffer/').Buffer

class Data {
    constructor() {
        this.client_id = '891171d4b4ca47069bb6aa7958218249';
        this.client_secret = 'cb0bc2c317e04338a374b904b9b48528';
        this.authOptions = {
            url: 'https://accounts.spotify.com/api/token',
            headers: {
                'Authorization': 'Basic ' + (new Buffer.from(this.client_id + ':' + this.client_secret).toString('base64'))
            },
            form: {
                grant_type: 'client_credentials'
            },
            json: true
        };
    }

    static async access_token(data) {
        const formData = new URLSearchParams();
        formData.append('grant_type', 'client_credentials');

        return await fetch(data.authOptions.url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'Authorization': data.authOptions['headers']['Authorization']
            },
            body: formData,

            json: true
        })
            .then(response => {
                // debugger
                if (response.status === 200) {
                    return response.json();
                } else {
                    throw new Error('Error making request');
                }
            })
            .then(body => {
                return body.access_token;
            })
            .catch(error => {
                console.error('Error:', error);
            });
        // debugger
    }


    static async getTopTracks(access_token) {
        return await fetch('https://api.spotify.com/v1/playlists/37i9dQZF1DXcBWIGoYBM5M/tracks', {
            method: 'GET',
            headers: {
                'Authorization': 'Bearer ' + access_token
            },
            json: true
        })
        .then(response => {
            if (response.status === 200) {
                return response.json();
            } else {
                throw new Error('Error making request');
            }
        })
        .then(body => {
            return body.items;
        })
        .catch(error => {
            console.error('Error:', error);
        });
    }
    
    static async getTopArtists(access_token) {  
        return await fetch('https://api.spotify.com/v1/me/top/artists?limit=50&time_range=long_term', {
            method: 'GET',
            headers: {
                'Authorization': 'Bearer ' + access_token
            },
            json: true
        })
        .then(response => {
            if (response.status === 200) {
                return response.json();
            } else {
                throw new Error('Error making request');
            }
        })
        .then(body => {
            return body.items;
        })
        .catch(error => {
            console.error('Error:', error);
        });
    }

    static async getTopGenres(access_token) {
        return await fetch('https://api.spotify.com/v1/me/top/artists?limit=50&time_range=long_term', {
            method: 'GET',
            headers: {
                'Authorization': 'Bearer ' + access_token
            },
            json: true
        })
        .then(response => {
            if (response.status === 200) {
                return response.json();
            } else {
                throw new Error('Error making request');
            }
        })
        .then(body => {
            return body.items;
        })
        .catch(error => {
            console.error('Error:', error);
        });
    }

    static async getTopTracksByGenre(access_token, genre) {
        return await fetch(`https://api.spotify.com/v1/search?q=genre:${genre}&type=track&limit=50`, {
            method: 'GET',
            headers: {
                'Authorization': 'Bearer ' + access_token
            },
            json: true
        })
        .then(response => {
            if (response.status === 200) {
                return response.json();
            } else {
                throw new Error('Error making request');
            }
        })
        .then(body => {
            return body.tracks.items;
        })
        .catch(error => {
            console.error('Error:', error);
        });
    }

    static async getTopArtistsByGenre(access_token, genre) {    
        return await fetch(`https://api.spotify.com/v1/search?q=genre:${genre}&type=artist&limit=50`, {
            method: 'GET',
            headers: {
                'Authorization': 'Bearer ' + access_token
            },
            json: true
        })
        .then(response => {
            if (response.status === 200) {
                return response.json();
            } else {
                throw new Error('Error making request');
            }
        })
        .then(body => {
            return body.artists.items;
        })
        .catch(error => {
            console.error('Error:', error);
        });
    }

    static async getHiphop(access_token) {
        // debugger
        return await fetch("https://api.spotify.com/v1/browse/featured-playlists", {
            method: 'GET',
            headers: {
                'Authorization': 'Bearer ' + access_token
            },
            json: true
        })
        .then(response => {
            if (response.status === 200) {
                return response.json();
            } else {
                throw new Error('Error making request');
            }
        })
        .then(body => {
            return body.items;
        })
        .catch(error => {
            console.error('Error:', error);
        });
    }
}

export default Data;

// let hipHip = "https://api.spotify.com/v1/browse/featured-playlists";
// debugger
// rap api: https://api.spotify.com/v1/playlists/37i9dQZF1DXcBWIGoYBM5M/tracks