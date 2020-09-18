import { connect } from "react-redux";
import {sendSearch} from "../../../data/actions/api"
import  Search  from "./Search"

const mapStateToProps = ({value}) => ({value});

const mapDispatchToProps = (dispatch) =>{
    return{
      find: (value) => {
        dispatch(sendSearch(value));
      }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Search);