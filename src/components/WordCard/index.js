import { connect } from "react-redux";
import WordCard from "./WordCard"

const mapStatetoProps = ({ term, description, links, liked, }) => ({term, description, links, liked,})


export default connect(mapStatetoProps)(WordCard);

