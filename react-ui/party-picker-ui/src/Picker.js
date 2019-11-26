import React from 'react';

import Check from './Check';
import Events from './Events';

class Picker extends React.Component {
    render(){
        return(
            <div>
                {(localStorage.getItem("user_token")== null) ?
                (<Check />) :
                (<Events />)}
            </div>
        )
    }
}

export default Picker;
