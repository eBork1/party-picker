import React from 'react';
import Card from './Card';
import Recommend from './Recommend';


class Events extends React.Component {

    constructor(){
        super();
        this.state = {
            limit: '',
            genres: '',
            min_danceability: '',
            max_danceability: '',
            min_energy: '',
            max_energy: '',
            min_instrumentalness: '',
            showRecommendations: false,
        }
        this.recommendations = this.recommendations.bind(this);
    }

    recommendations(limit, genres, min_danceability, max_danceability, min_energy, max_energy, min_instrumentalness){
        this.setState({
            limit: limit,
            genres: genres,
            min_danceability: min_danceability,
            max_danceability:max_danceability,
            min_energy: min_energy,
            max_energy: max_energy,
            min_instrumentalness: min_instrumentalness,
            showRecommendations: true,
        })
        
    }

    render() {
        return (
            // If showRecommendations == true, show <Recommend/> (Spotify api call) component with params. params are set in state
            // by the recommendations() function. In each card, the onClick is set to the recommendations() function
            // which passes in the values to the corresponding params.
            // If showRecommendations == false, show all the cards. 

            this.state.showRecommendations ? 
                <Recommend
                    limit={this.state.limit}
                    genres={this.state.genres}
                    min_danceability={this.state.min_danceability}
                    max_danceability={this.state.max_danceability}
                    min_energy={this.state.min_energy}
                    max_energy={this.state.max_energy}
                    min_instrumentalness={this.state.min_instrumentalness}
                />   
            : 
            // order of params = (limit, genres, min_danceability, max_danceability, min_energy, max_energy, min_instrumentalness)
            <div className="container">
                <div className="row">
                    <div className="col-sm-12 col-lg-4 mx-auto">
                        <Card
                            eventName="Book Club"
                            eventDescription="A social but quiet event. Ambient and classical sounds to accompany discussion."
                            onClick={()=>this.recommendations(10, 'ambient,classical,chill,jazz', .1, .5, .1, .5, .6)}
                        />
                    </div>
                    <div className="col-sm-12 col-lg-4 mx-auto">
                        <Card
                            eventName="Study Group"
                            eventDescription="Networking chatter, business causal vibe, instrumental beats and ambient sounds for keeping the mood light."
                            onClick={()=>this.recommendations(10, 'hip-hop,ambient,deep-house,edm,study', .1, .7, .1, .6, .6)}
                        />
                    </div>
                    <div className="col-sm-12 col-lg-4 mx-auto">
                        <Card
                            eventName="Dinner Party"
                            eventDescription="Lorum ipsum"
                            onClick={()=>this.recommendations(10, 'jazz,chill,soul', .3, .8, .3, .8, 0)}
                        />
                    </div>
                    <div className="col-sm-12 col-lg-4 mx-auto">
                        <Card
                            eventName="Business- Formal"
                            eventDescription="Networking chatter, business causal vibe, instrumental beats and ambient sounds for keeping the mood light."
                            onClick={()=>this.recommendations(10, 'classical,chill', 0, .6, 0, .6, .6)}
                        />
                    </div>
                    <div className="col-sm-12 col-lg-4 mx-auto">
                        <Card
                            eventName="Business- Casual"
                            eventDescription="Lorum ipsum"
                            onClick={()=>this.recommendations(10, 'jazz,deep-house,pop,chill', .4, .8, .4, .8, .5)}
                        />
                    </div>
                    <div className="col-sm-12 col-lg-4 mx-auto">
                        <Card
                            eventName="LAN (gaming) Party"
                            eventDescription="Lorum ipsum"
                            onClick={()=>this.recommendations(10, 'edm,trance,electro,progressive-house,drum-and-bass', .5, 1, .5, 1, .4)}
                        />
                    </div>
                    <div className="col-sm-12 col-lg-4 mx-auto">
                        <Card
                            eventName="Sports Tailgate"
                            eventDescription="Lorum ipsum"
                            onClick={()=>this.recommendations(10, 'rock,country', .6, 1, .7, 1, 0)}
                        />
                    </div>
                    <div className="col-sm-12 col-lg-4 mx-auto">
                        <Card
                            eventName="House Party"
                            eventDescription="Lorum ipsum"
                            onClick={()=>this.recommendations(10, 'jazz', .5, .6, .5, .6, .5)}
                        />
                    </div>
                    <div className="col-sm-12 col-lg-4 mx-auto">
                        <Card
                            eventName="House Party- Hip Hop"
                            eventDescription="Lorum ipsum"
                            onClick={()=>this.recommendations(10, 'jazz', .5, .6, .5, .6, .5)}
                        />
                    </div>
                    <div className="col-sm-12 col-lg-4 mx-auto">
                        <Card
                            eventName="House Party- Electronic/Dance"
                            eventDescription="Lorum ipsum"
                            onClick={()=>this.recommendations(10, 'jazz', .5, .6, .5, .6, .5)}
                        />
                    </div>
                    <div className="col-sm-12 col-lg-4 mx-auto">
                        <Card
                            eventName="House Party- Sing-a-long"
                            eventDescription="Lorum ipsum"
                            onClick={()=>this.recommendations(10, 'jazz', .5, .6, .5, .6, .5)}
                        />
                    </div>

                </div>
            </div>
        )
    }
}

export default Events;
