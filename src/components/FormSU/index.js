import { connect } from "react-redux";
import {sendSU} from "../../data/actions/api"
import  FormSU  from "./FormSU"



const mapDispatchToProps = (dispatch) =>{
    return{
      send: (infoSU) => {
        dispatch(sendSU(infoSU));
      }
    }
}

export default connect(null, mapDispatchToProps)(FormSU);