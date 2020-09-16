import { connect } from "react-redux";
import LikedWordList from "./LikedWordList"

const mapStatetoProps = ({ likedWordList }) => ({likedWordList})


export default connect(mapStatetoProps)(LikedWordList);