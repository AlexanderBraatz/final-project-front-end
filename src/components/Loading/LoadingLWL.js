import { connect } from "react-redux";
import Loading from "./Loading";

import { getLikedWordList } from "../../data/actions/api";



const mapStateToProps = ({ loadedLikedWordList }) => ({
    loaded : loadedLikedWordList,
});

const mapDispatchToProps = (dispatch) => ({
    handleLoad: () => dispatch(getLikedWordList()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Loading);