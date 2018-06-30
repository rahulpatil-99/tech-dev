import { connect } from "react-redux";
import { ActivityWindow } from '../components/ActivityWindow';
import { saveCardTitle,saveSubPoint,addCard } from '../actions';

const mapDispatchToProps=(dispatch)=>({
    addTitle: (title)=>{
        dispatch(saveCardTitle(title));
    },
    addSubPoint: (text)=>{
        dispatch(saveSubPoint(text));
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