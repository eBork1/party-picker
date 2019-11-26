import React from 'react';
import Login from './Login';
import Connect from './Connect';

class Home extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            token: ""
        }
        this.getTokenState = this.getTokenState.bind(this)
    }
    getTokenState(item) {
        this.setState({
            token: item
        })
    }
    componentDidMount() {
        this.getTokenState(localStorage.getItem("user_token"));
        console.log(this.state);
    }

    render() {
        return (
            <div>
                
                {this.state.token ?
                    (<Connect />) :
                    (<Login parentFunction={this.getTokenState} />)
                }
                
            </div>
        )
    }

}

export default Home;
