
export const like = (wordId, context) =>{
    return({type: "LIKE", id : wordId, context})
};


export const loadedWordList = (wordList) => {
    return {
        type: "UPDATE_WL",
        wordList,
    }
};
export const saveTerm = (term) => {
    //history.push("/words/term.id")
    return {
        type:"SET_TERM",
        term,
    }
} 