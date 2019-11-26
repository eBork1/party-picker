import React from 'react';

class Header extends React.Component{
    render(){
        return(
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <p className="display-3 text-light">
                            Party Picker
                        </p>
                        <p className="text-muted">
                            alpha
                        </p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Header;