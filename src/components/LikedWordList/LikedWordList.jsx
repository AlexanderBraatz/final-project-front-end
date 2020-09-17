import React, { Component } from "react";



class LikedWordList extends Component{

// like WordList but with deffinitions with Heart beeing used
  render(){
      let {likedWordList} = this.props
      console.log(likedWordList);
      return(
        <>
        <p></p>
        // <Heart id={ term.id } liked={ term.liked } />
        
        <h2 className="word-heading">Liked Words</h2>
    
        <ul className="list">
            <div className="card list-items " >
                <Link 
                to={ '/words/${ term.id }' } 
                key={ term.id } 
                className="list-items-nav"  
                >
                    { term.word}
                </Link>
    
                <p className='intro'>{ term.description }</p>
    
                <Heart id={ term.id } like={ term.liked} />
            </div> 
        </ul> 
    
        </>
      )
  }
}

export default LikedWordList;