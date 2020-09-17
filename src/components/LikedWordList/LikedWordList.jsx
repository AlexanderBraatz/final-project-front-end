import React, { Component } from "react";



class LikedWordList extends Component{

// like WordList but with deffinitions with Heart beeing used
  render(){
      let {likedWordList} = this.props
      console.log(likedWordList);
      return(
        <p></p>
        // <Heart id={ term.id } liked={ term.liked } />
      )
  }
}

export default LikedWordList;