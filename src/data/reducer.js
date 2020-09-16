
const reducer = (state, action) => { 
  switch(action.type){
    case "LIKE" : return likeOneWordReducer(state, action);
    case "SET_TERM" : return setTermReducer(state, action)
    case "UPDATE_WL" : return loadedWLReducer(state,action)
    default: return state;
  }
}

//reducer business logic

const likeOneWordReducer =(state, { id, context }) => {
  return({
    ...state,
    // [...wordlist,logic to like the word in all places(or only in context) in state for responsive design ]
  })
}


const loadedWLReducer = (state, {wordList}) => ({
  ...state,
  wordList,
});


const setTermReducer = (state,{ term }) => {

  return ({
    ...state,
    term,
  })
}

export default reducer ;