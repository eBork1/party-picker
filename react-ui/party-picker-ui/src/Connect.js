import React from 'react';

class Connect extends React.Component {
    render(){
        return(
            <div>
                <p className="display-4 text-white">
                    Welcome, _______ ! <br/>
                </p>
                <a href="http://localhost:8888/" className="btn btn-success btn-lg" role="button" aria-pressed="true">Connect Spotify</a>
            </div>
        )
    }

}

export default Connect;
