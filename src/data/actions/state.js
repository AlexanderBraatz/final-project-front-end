

export const setWordCard = (wordCard) => {
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

export const updateLike = (id, isItLiked) => {
    return {
        type: "UPDATE_LIKE",
        id,
        isItLiked,
    }
};
