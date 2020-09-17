import React, { Component }  from 'react';
import { Link } from "react-router-dom";
// import axios from "../axios";
import Heart from "./Heart";


class Words extends Component {
    constructor(props){
        super(props);

        this.state={
            loaded: false,
            words: [],
        };
    }

    componentDidMount(){
        axios.get("/words").then(({data}) => {
            this.setState({
                loaded: true,
                words: data.data,
              
            });
        });

    }

    render(){
        let { words, loaded } = this.state;

        return !loaded ? <Loading /> : (
            
            <ul className="list">
            { words.map( words => (
              
                <div className="card list-items "  >
                    <Link 
                    to={ '/words/${ word.id }' } key={ words.id } className="list-items-nav" >
                        { words.word}
                    </Link>
                    <Heart />
                </div>
            ))};   
            
        </ul> 
            );
    }
}
  


export default Words

