import axios from "axios"; 



//XXXXX->    Base URL and Bearer token need to be made to fit back end   XXXX





export default axios.create({
    baseURL: "https://restful.training/api/blog",
    headers: {
        Accept:"application/json",
        Authorization:"Bearer b1bK6pyjX04NKU1k9O5UX0QyFNf98KfQsI2NOv44NhM6i5H98buElw1TbGObaeXMPHc8kvl7X7OWkGtQ"
    },
});