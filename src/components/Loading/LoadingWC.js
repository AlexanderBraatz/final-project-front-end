import { connect } from "react-redux";
import Loading from "./Loading";

import { getWordCard } from "../../data/actions/api";



const mapStateToProps = ({ loadedWordCard },{ id }) => ({
    loaded : loadedWordCard,
    id,
});

const mapDispatchToProps = (dispatch) => ({
    handleLoad: (id) => dispatch(getWordCard(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Loading);