import React from 'react';
import axios from 'axios';
class Playlist extends React.Component {


    async callAPI(token) {
        // console.log(this.state);
        // console.log(token);

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
                console.log(response.data.tracks);
                this.setState({ data: response.data });
            }).catch(response => {
                console.log("failed on catch with error ", response);
            });
    }

    render() {
        return (
            <>
            </>
        )
    }
}

export default Playlist;
