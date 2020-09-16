import { connect } from "react-redux";
import WordList from "./WordList"

const mapStatetoProps = ({ wordList }) => ({wordList})


export default connect(mapStatetoProps)(WordList)