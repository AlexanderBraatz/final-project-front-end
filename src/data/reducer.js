const reducer = (state, action) => { 
  switch(action.type){
    case "SET_TERM" : return setWReducer(state, action)
    case "SET_WL" : return setWLReducer(state, action)
    case "SET_LWL" : return setLWLReducer(state,action)
    case "RESET_LOADING" : return resetLoadingReducer(state, action)
    // case "UPDATE_LIKE" : return updateLikeReducer(state, action);
    default: return state;
  }
}

//reducer business logic

const setWReducer = (state,{ wordCard }) => {

  return ({
    ...state,
    wordCard,
    loadedWord : true,

  })
}

const setWLReducer = (state, {wordList}) => ({
  ...state,
  wordList,
  loadedWordList: true,
});

const setLWLReducer = (state, {likedWordList}) => ({
  ...state,
  likedWordList,
  loadedLikedWordList: true,
});

const resetLoadingReducer = (state, {stateKey}) => {
  const {loadedWordCard, loadedWordList, loadedLikedWordList} = state;
    return({
    ...state,
    loadedWordCard : stateKey === "wordCard" ? false : loadedWordCard,
    loadedWordList : stateKey === "wordList" ? false : loadedWordList,
    loadedLikedWordList : stateKey === "likedWordList" ? false : loadedLikedWordList,
  });
}

// const updateLikeReducer =(state, { id, isItLiked}) => {
//   const {likedWordList} = state;
//   const updatedWL =  likedWordList.map((term)=>{
//     if(term.id === id){}
//   })
//   return({
//     ...state,
//     likedWordList : updatedWL
//     // [...wordlist,logic to like the word in all places(or only in context) in state for responsive design ]
//   })
// }





export default reducer ;