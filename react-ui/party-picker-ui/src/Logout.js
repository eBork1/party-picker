import React from 'react';
import axios from 'axios';


class Logout extends React.Component {
    remove_token() {
        
        const user_token = localStorage.getItem("user_token");
        
        const auth = {
            headers:
            {
                Authorization: "Bearer " + user_token
            }
        };

        axios.get('http://127.0.0.1:8000/api/logout', auth)
        
        .catch(function (error) {
            console.log(error);
        });

        localStorage.removeItem("user_token");
        window.location.reload(false);
    } 
    render() {


        return (
            <button onClick={this.remove_token} type="button" className="btn btn-link">Logout</button>
        )
    }
}

export default Logout;
