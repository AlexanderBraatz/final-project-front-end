import axios from "../../axios";
import { setWordList } from "./state";
import { setLikedWordList } from "./state";
import { setWordCard } from "./state";
import history from "../../history";




//gtting Data from the API

export const getData = (componentName, id) => {
    // console.log("ran actionCreator");
    if(componentName === "WordList"){ getWordList() } 
    if(componentName === "WordCard"){ getWordCard( id ) }
    if(componentName === "LikedWordList"){ getLikedWordList() }
    
};

const getWordCard = (id) => {
    return (dispatch) => {
        axios.get(`/words/${id}`).then(({ data }) => {
            // dispatch(setWordCard(data.data));
            dispatch(setWordCard(testWordCard()));
        });
    };
};


const getWordList = () => {
    return (dispatch) => {
        axios.get("/words").then(({ data }) => {
            // dispatch(setWordList(data.data));
            dispatch(setWordList(testWordList()));
        });
    };
};


const getLikedWordList = () => {
    return (dispatch) => {
        axios.get("/words/liked").then(({ data }) => {
            // dispatch(setLikedWordList(data.data));
            dispatch(setLikedWordList(testWordList()));
        });
    };
};
    


export const sendSearch = (value) => {
    // console.log("ran actionCreator");

    return (dispatch) => {
        axios.get(`/search?query=${value}`).then(({ data }) => {
            dispatch(setWordCard(data.data));
            history.push(`/words/${data.data.id}`)
        });
    };
};






const testWordList = () => ([
    {
        "id":1,
        "word":"TEST TEST TEST",
        "liked":false
    },
    {
        "id":2,
        "word":"Front end",
        "liked":false
    },
    {
        "id":3,
        "word":"Back end",
        "liked":false
    }
]);

const testLikedWordList = () => ( [
    {
        "id": 1,
        "word": "Test",
        "definition": "lah lah",
        "liked": true
    }
]);

const testWordCard = () => ( {
    "id": 9,
    "word": "aa",
    "definition": "ha ha",
    "liked": false,
    "links": [
        {
            "id": 6,
            "link": "www.funny.com"
        },
        {
            "id": 12,
            "link": "www.beans.com"
        },
        {
            "id": 13,
            "link": "www.beans.com"
        }
    ]
});
