import { connect } from "react-redux";
import {sendSearch} from "../../data/actions/api"
import  SearchBar  from "./SearchBar"

const mapStateToProps = ({value}) => ({value});

const mapDispatchToProps = (dispatch) =>{
    return{
      find: (value) => {
        dispatch(sendSearch(value));
      }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);