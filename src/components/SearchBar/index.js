import { connect } from "react-redux";
import Settings from "./Settings";
import {sendSearch} from "../../data/actions/api"

const mapStateToProps = ({value}) => ({value});

const mapDispatchToProps = (dispatch) =>{
    return{
      find: (value) => {
        dispatch(sendSearch(value));
      }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Settings);