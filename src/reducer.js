const addPoint=(state,point)=>{
    state.subPoints.push(point);
    return Object.assign({},state,{subPoints:state.subPoints});
};

const insertCard= (state)=>{
    const card = {title:state.title,subPoints:state.subPoints};
    state.cards.push(card);
    return {title:'',subPoints:[],cards:state.cards};
}

const reducer = (state,action)=>{
    const { type,data } = action;
    switch(type){
        case 'SAVE_CARD_TITLE': return Object.assign({},state,{title:data.title})
        case 'SAVE_SUB_POINT':  return addPoint(state,data.point)
        case 'ADD_CARD': return insertCard(state) 
        default: return state
    }
}

export default reducer;