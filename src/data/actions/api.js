import axios from "../../axios";
import { setWordList } from "./state";
import { setLikedWordList } from "./state";
import { setWordCard } from "./state";
import { updateLike } from "./state";
import { resetLoading } from "./state";
import history from "../../history";




//gtting Data from the API


export const getWordCard = (id) => {

    return (dispatch) => {
        //dispatch(setWordCard(testWordCard()));// <--only for testing befor the API is deployed
        axios.get(`/words/${id}`).then(({ data }) => {
            dispatch(setWordCard(data.data));
            resetLoading("wordCard");
        });
    };
};


export const getWordList = () => {

    return (dispatch) => {
       // dispatch(setWordList(testWordList()));// <--only for testing befor the API is deployed
        axios.get("/words").then(({ data }) => {
            dispatch(setWordList(data.data));
            resetLoading("wordList");
        });
    };
};


export const getLikedWordList = () => {
   
    return (dispatch) => {
       // dispatch(setLikedWordList(testLikedWordList()));// <--only for testing befor the API is deployed
        axios.get("/words/liked").then(({ data }) => {
            dispatch(setLikedWordList(data.data));
            resetLoading("likedWordList");
        });
    };
};

// sending DAta to the API

export const sendSearch = (value) => {
    // console.log("ran actionCreator");

    return (dispatch) => {
        axios.get(`/search?query=${value}`).then(({ data }) => {
            if(data.data){
                dispatch(setWordCard(data.data));
                history.push(`/words/${data.data.id}`)
            }
        });
    };
};

export const changeLike = (id, liked ) => {
    const isItLiked = !liked;
    return (dispatch) => {
        axios.patch(`/words/${id}`,{ "liked": isItLiked }).then(({data}) => dispatch(updateLike(data.data)));
    };
};





// const testWordList = () => ([
//     {
//         "id":1,
//         "word":"TEST TEST TEST",
//         "liked":false
//     },
//     {
//         "id":2,
//         "word":"Front end",
//         "liked":false
//     },
//     {
//         "id":3,
//         "word":"Back end",
//         "liked":false
//     }
// ]);

// const testLikedWordList = () => ( [
//     {
//         "id": 1,
//         "word": "Test",
//         "definition": "lah lah",
//         "liked": true
//     }
// ]);

// const testWordCard = () => ( {
//     "id": 9,
//     "word": "aa",
//     "definition": "ha ha",
//     "liked": false,
//     "links": [
//         {
//             "id": 6,
//             "link": "www.funny.com"
//         },
//         {
//             "id": 12,
//             "link": "www.beans.com"
//         },
//         {
//             "id": 13,
//             "link": "www.beans.com"
//         }
//     ]
// });
