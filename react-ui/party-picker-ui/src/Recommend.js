import React from 'react';
import axios from 'axios';
import queryString from 'query-string'

class Recommend extends React.Component {

    constructor() {
        super();
        this.state = {
            access_token: "",
        }
        this.getToken = this.getToken.bind(this);
    }

    getToken() {
        const parsed = queryString.parse(window.location.search);
        console.log(parsed);
        const token = String(parsed.access_token);
        this.setState({ access_token: token });
    }

    componentDidMount() {
        this.getToken();
    }

    render() {
        const URL = 'https://api.spotify.com/v1/recommendations';

        axios({
            method: 'get',
            url: URL,
            params: {
                limit: "20",
                seed_genres: "edm",
                min_danceability: ".06",
                min_energy: ".05"
            },
            headers: {
                Accept: 'application/json',
                contentType: 'application/json',
                Authorization: `Bearer ${this.state.access_token}`,
            }
        })
            .then(response => console.log(response));

        return (
            <div>
                
            </div>
        )
    }
}
export default Recommend;
