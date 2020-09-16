
export const like = (wordId, context) =>{
    return({type: "LIKE", id : wordId, context})
};


export const setWordCard = (wordCard) => {
    //history.push("/words/term.id")
    return {
        type:"SET_TERM",
        wordCard,
    }
}

export const setWordList = (wordList) => {
    return {
        type: "SET_WL",
        wordList,
    }
};

export const setLikedWordList = (likedWordList) => {
    return {
        type: "SET_LWL",
        likedWordList,
    }
};

export const resetLoading = (stateKey) => {
    return {
        type: "UPDATE_LIKE",
        stateKey,
    }
};

export const UpdateLike = (id, isItLiked) => {
    return {
        type: "UPDATE_LIKE",
        id,
        isItLiked,
    }
};
