import axios from "axios"; 

export default axios.create({
    baseURL: "https://nerdwords.developme.space/api",
    headers: {
        Accept:"application/json",
        //Authorization:"Bearer XXXXXXXX"
    },
});