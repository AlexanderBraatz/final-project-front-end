import React, { Component } from "react";

class Heart extends Component{
    constructor(props){
        super(props);
        this.state = { colour : "black", };

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(){
        const newColour = this.state.colour === "black"  ? "white" : "black";
        
        this.setState( {colour : newColour, });
    }


    render() {
        
        return (
            
             <div className="card-container">
                <i className="fa fa-heart "
                onClick={this.handleClick}
                style = {{ 
                    fontSize: 22, 
                    color: this.state.colour,
                   
                }}
                ></i>
             </div>
         
        )
    }

}
export default Heart;