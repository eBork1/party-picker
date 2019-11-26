import React from 'react';
import Card from './Card';
import Recommend from './Recommend';

class Events extends React.Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-sm-12 col-lg-5 mx-auto">
                        <Card
                            eventName="Book Club"
                            eventDescription="A social but quiet event. Ambient and classical sounds to accompany discussion."
                        />
                    </div>
                    <div className="col-sm-12 col-lg-5 mx-auto">
                        <Card
                            eventName="Business semi-formal"
                            eventDescription="Networking chatter, business causal vibe, instrumental beats and ambient sounds for keeping the mood light "
                        />
                    </div>
                    <div className="col-sm-12 col-lg-5 mx-auto">
                        <Card
                            eventName="Dinner Party"
                            eventDescription="Lorum ipsum"
                        />
                    </div>
                    <div className="col-sm-12 col-lg-5 mx-auto">
                        <Card
                            eventName="House Party"
                            eventDescription="Networking chatter, business causal vibe, instrumental beats and ambient sounds for keeping the mood light "
                        />
                    </div>
                    <div>
                        <Recommend />
                    </div>
                </div>
            </div>
        )
    }
}

export default Events;
