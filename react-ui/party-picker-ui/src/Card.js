import React from 'react';
import './Card.css';

class EventBtn extends React.Component {
    render(props) {
        return (
            <div>
                <a href="www.google.com" className="stretched link">
                    <div className="card mt-2 mb-2">
                        <div className="card-body">
                            <h5 className="card-title text-light font-weight-bold border-bottom">{this.props.eventName}</h5>
                            <p className="card-subtitle mb-2 text-light">{this.props.eventDescription}</p>

                        </div>
                    </div>
                </a>
            </div>
        )
    }
}
export default EventBtn;
