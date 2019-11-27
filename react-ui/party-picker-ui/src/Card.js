import React from 'react';
import './Card.css';

class Card extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            showComponent: false,
        };
    }

    render(props) {
        return (
            <div>
                <div className="card mt-2 mb-2">
                    <div className="card-body">
                        <h5 className="card-title text-light font-weight-bold border-bottom">{this.props.eventName}</h5>
                        <p className="card-subtitle mb-2 text-light">{this.props.eventDescription}</p>
                        <button onClick={this.props.onClick} className="btn btn-link">Get Playlist</button>
                        
                    </div>
                </div>
            </div>
        )
    }
}
export default Card;
