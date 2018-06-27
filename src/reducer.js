const insertCard= (state)=>{
    const card = {title:state.title,subPoint:state.subPoint};
    state.cards.push(card);
    return {title:'',subPoint:'',cards:state.cards};
}

const reducer = (state,action)=>{
    const { type,data } = action;
    switch(type){
        case 'SAVE_CARD_TITLE': return Object.assign({},state,{title:data.title})
        case 'SAVE_SUB_POINT':  return Object.assign({},state,{subPoint:data.point})
        case 'ADD_CARD': return insertCard(state) 
        default: return state
    }
}

export default reducer;