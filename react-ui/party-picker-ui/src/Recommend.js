import React from 'react';
import axios from 'axios';
import queryString from 'query-string'

class Recommend extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            access_token: "",
            song_data: {}, // Response.data
            user_data: {}, 
            song_URIS: "",
            playlist_id: "",
            playlist_link: "",
        }
        this.getToken = this.getToken.bind(this);
        this.getSongs = this.getSongs.bind(this);
        this.getUser = this.getUser.bind(this);
        this.createPlaylist = this.createPlaylist.bind(this);
        this.addSongsToPlaylist = this.addSongsToPlaylist.bind(this);
    }

    // Got the authorization token from Spotify
    getToken() {
        const token = queryString.parse(window.location.search).access_token;
        this.getUser(token);
        this.getSongs(token);
        this.setState({ access_token: token });
    }

    // Got recommended songs from Spotify API based on params set in <Events/> 
    // Stored songs in state
    async getSongs(token) {
        const URL = 'https://api.spotify.com/v1/recommendations';
        await axios({
            method: 'get',
            url: URL,
            params: {
                limit: this.props.limit,
                seed_genres: this.props.genres,
                min_danceability: this.props.min_danceability,
                max_danceability: this.props.max_danceability,
                min_energy: this.props.min_energy,
                max_energy: this.props.max_energy,
                min_instrumentalness: this.props.min_instrumentalness,
            },
            headers: {
                Accept: 'application/json',
                contentType: 'application/json',
                Authorization: `Bearer ${token}`,
            }
        })
            .then(response => {
                // Get tracks. Array of objects.
                const tracks = response.data.tracks;
                console.log(tracks);
                const arr = [];
                tracks.forEach((track) => { arr.push(track.uri) });
                const URIs = arr.join(",");
                console.log("song uris: " + URIs);
                this.setState({song_URIS: URIs})
                this.setState({ song_data: response.data });
                console.log(this.state);
            }).catch(response => {
                //console.log("failed on catch with error ", response);
            });
            this.createPlaylist(token);
    }

    // Got the users Spotify ID and stored it in state for when playlist is created
    async getUser(token) {
        const URL = 'https://api.spotify.com/v1/me';
        await axios({
            method: 'get',
            url: URL,
            headers: {
                Accept: 'application/json',
                contentType: 'application/json',
                Authorization: `Bearer ${token}`,
            }
        })
            .then(response => {
                const data = (response.data)
                this.setState({ user_data: data });
                //console.log(this.state.user_data.id)
            }).catch(response => {
                console.log("failed on catch with error ", response);
            });
    }

    async createPlaylist(token) {
        //const user_id = this.state.user_data.replace(/["]+/g, '');
        const URL = 'https://api.spotify.com/v1/me/playlists';
        // console.log(URL);
        await axios({
            method: 'post',
            url: URL,
            data : {
                name: "PartyPicker for " + this.state.user_data.display_name,
                description: "Made with PartyPicker",
                public:true
            },
            headers: {
                Accept: 'application/json',
                contentType: 'application/json',
                Authorization: `Bearer ${token}`,
            }
        })
        .then(response => {
            // console.log(response.data);
            const playlist_id = response.data.id;
            const URL = response.data.external_urls.spotify;
            this.setState({ playlist_id: playlist_id});
            this.setState({ playlist_link: URL })
            console.log(this.state.playlist_link);
        }).catch(response => {
                console.log("failed on catch with error ", response);
            });
        this.addSongsToPlaylist(token);
    }

    async addSongsToPlaylist(token) {
        //const user_id = this.state.user_data.replace(/["]+/g, '');
        const URL = 'https://api.spotify.com/v1/playlists/' + this.state.playlist_id + '/tracks';
        console.log(URL);
        // console.log(URL);
        await axios({
            method: 'post',
            url: URL,
            params : {
                uris: this.state.song_URIS,
            },
            headers: {
                Accept: 'application/json',
                contentType: 'application/json',
                Authorization: `Bearer ${token}`,
            }
        })
        .then(response => {
            console.log(response.data);
        }).catch(response => {
                console.log("failed on catch with error ", response);
            });
    }

    componentDidMount() {
        this.getToken();
    }

    render() {
        return (
            <div className="text-white">
                <div>
                    {Object.keys(this.state.playlist_link) ?
                        <h3>Check out your playlist here!
                            <a href={this.state.playlist_link}> Go </a>
                        </h3>
                        :
                        "loading data"}
                </div>
            </div>
        )
    }
}

export default Recommend;


