const insertCard= (state)=>{
    const card = {title:state.title,subPoints:state.subPoints};
    state.cards.push(card);
    return {title:'',subPoints:[],cards:state.cards};
};

const addSubPoint = (state)=>{
    return Object.assign({},state,{subPoints:[...state.subPoints,""]});
};

const updatePoint = (state,index,value)=>{
    const another = state.subPoints.map((point,i)=>{
        return i!==index ? point :value;
    });
    return Object.assign({},state,{subPoints:another});
};

const reducer = (state,action)=>{
    const { type,data } = action;
    switch(type){
        case 'SAVE_CARD_TITLE': return Object.assign({},state,{title:data.title})
        case 'ADD_NEW_POINT': return addSubPoint(state)
        case "SAVE_SUB_POINT": return updatePoint(state,data.index,data.point)
        case 'ADD_CARD': return insertCard(state) 
        default: return state
    }
}

export default reducer;