// map dispatch to props get set like in there
import { connect } from "react-redux";
import {changeLike} from "../../data/actions/api"
import  Heart  from "./Heart"

const mapStateToProps = (state, { id, liked }) => {
    return {
    id,
    liked,
    };
};
    

const mapDispatchToProps = (dispatch) =>{
    return{
      sendTheLike: (id, liked) => {
        dispatch(changeLike(id, liked));
      }
    }
}

export default connect(null , mapDispatchToProps)(Heart);