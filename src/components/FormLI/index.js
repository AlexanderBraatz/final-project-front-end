import { connect } from "react-redux";
import {sendLI} from "../../data/actions/api"
import  FormLI  from "./FormLI"



const mapDispatchToProps = (dispatch) =>{
    return{
      send: (infoLI) => {
        dispatch(sendLI(infoLI));
      }
    }
}

export default connect(null, mapDispatchToProps)(FormLI);