import { connect } from "react-redux";
import { ActivityWindow } from '../components/ActivityWindow';
import { saveCardTitle,addNewPoint,addCard,saveSubPoint } from '../actions';

const mapDispatchToProps=(dispatch)=>({
    saveTitle: (title)=>{
        dispatch(saveCardTitle(title));
    },
    addSubPoint: ()=>{
        dispatch(addNewPoint());
    },
    saveSubPoint: (text,index)=>{
        dispatch(saveSubPoint(text,index));
    },
    saveCard: ()=>{
        dispatch(addCard());
    }
});

const mapStateToProps=(state)=>{
    return state;
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ActivityWindow);