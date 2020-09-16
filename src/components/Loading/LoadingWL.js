import { connect } from "react-redux";
import Loading from "./Loading";

import { getWordList } from "../../data/actions/api";



const mapStateToProps = ({ loadedWordList }) => ({
    loaded : loadedWordList,
});

const mapDispatchToProps = (dispatch) => ({
    handleLoad: () => dispatch(getWordList()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Loading);