import axios from "../../axios";
import { loadedWordList } from "./state";
import { saveTerm } from "./state";


export const getWordList = () => {
    // console.log("ran actionCreator");
    return (dispatch) => {
        axios.get("/words").then(({ data }) => {
            dispatch(loadedWordList(data.data));
        });
    };
};
    
export const sendSearch = (value) => {
    // console.log("ran actionCreator");
    return (dispatch) => {
        axios.post("/XXXsearchXXXXto_be_set",{
            BACKENDCHOICEvalue : value
        }).then(({ data }) => {
            dispatch(saveTerm(data.data));
        });
    };
};
