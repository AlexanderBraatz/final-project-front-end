import { connect } from "react-redux";
import WordCard from "./WordCard"

const mapStatetoProps = ({ wordCard }) => {
    const { id, word, definition, liked, links } = wordCard;
    console.log(word);
    return( {id, word, definition, liked, links})
};


export default connect(mapStatetoProps)(WordCard);
