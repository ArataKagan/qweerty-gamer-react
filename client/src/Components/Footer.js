import React, { Component } from 'react';

class Footer extends Component {
    constructor(props){
        super(props);

    }
    render(){
        return(
            <div className="footer">
                
                <p>text</p>
                <p>text</p>
                <p>text</p>
                <img src={require("./qg_logo_png.png")} alt='logo' width='200px'/>
            </div>

        );
    }
}

export default Footer;