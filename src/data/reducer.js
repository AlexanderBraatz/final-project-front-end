const reducer = (state, action) => { 
  switch(action.type){
    case "SET_WC" : return setWReducer(state, action)
    case "SET_WL" : return setWLReducer(state, action)
    case "SET_LWL" : return setLWLReducer(state,action)
    case "RESET_LOADING" : return resetLoadingReducer(state, action)
    case "UPDATE_LIKE" : return updateLikeReducer(state, action);
    default: return state;
  }
}

//reducer business logic

const setWReducer = (state,{ wordCard }) => {

  return ({
    ...state,
    wordCard,
    loadedWordCard : true,

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

const updateLikeReducer =(state, { term }) => {
  const { id , liked} = term;
  const {wordCard, wordList, likedWordList} = state;

  console.log(term );

  const updatedWL =  wordList.map((term)=>((term.id === id) ? {...term, liked, } : term));

  let updatedLWL;
  if(!liked){
    updatedLWL = likedWordList.filter((likedWord) => likedWord.id !== term.id )
  }else{updatedLWL = [...likedWordList,term]}
  

  const updatedWC = (wordCard.id === id) ? {...wordCard, liked,} : wordCard;
  
  console.log(id, wordList.liked,liked);

  return({
    ...state,
    wordList : updatedWL,
    likedWordList : updatedLWL,
    wordCard : updatedWC,
  })
}
export default reducer ;