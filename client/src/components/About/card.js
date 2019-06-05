import React from 'react';

class Card extends React.Component {
    constructor(props){
        super(props);
        this.state = {flipped: false};
        this.flip = this.flip.bind(this);
    }

    flip = () => {
        this.setState({
            flipped: !this.state.flipped
        });
    }
    render(){
        return(
            <div 
                onMouseEnter={this.flip}
                onMouseLeave={this.flip} 
                className={"card-container" + (this.state.flipped ? "flipped" : "")}
            >
                <Front />
                <Back />
            </div>
        )
    }
}

class Front extends React.Component {
    render(){
        <div className="front">
        </div>
    }
}