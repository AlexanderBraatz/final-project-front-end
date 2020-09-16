
const reducer = (state, action) => { 
  switch(action.type){
    case "SET_TERM" : return setWReducer(state, action)
    case "SET_WL" : return setWLReducer(state, action)
    case "SET_LWL" : return setLWLReducer(state,action)
    case "LIKE" : return likeOneWordReducer(state, action);
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

const loadedWLReducer = (state, {wordList}) => ({
  ...state,
  wordList,
  loadedWordList: true,
});

const likeOneWordReducer = (state, {likedWordList}) => ({
  ...state,
  likedWordList,
  loadedLikedWordList: true,
});


const likeOneWordReducer =(state, { id, context }) => {
  return({
    ...state,
    // [...wordlist,logic to like the word in all places(or only in context) in state for responsive design ]
  })
}



export default reducer ;