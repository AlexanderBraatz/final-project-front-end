import React, { Component } from "react";
//use like 
class Heart extends Component{
    constructor(props){
        super(props);
    
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(){
        let {id, liked, sendTheLike} = this.props;
        sendTheLike(id, liked);
    }


    render() {
        
        return (
            
             <div className="card-container">
                <i className="fa fa-heart "
                onClick={this.handleClick}
                style = {{ 
                    fontSize: 22, 
                    color: this.props.isItLiked ? "white" : "black",
                }}
                ></i>
             </div>
         
        )
    }

}
export default Heart;