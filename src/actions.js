export const saveCardTitle = (title)=>{
    return {
        type:"SAVE_CARD_TITLE",
        data:{
            title:title
        }
    }
};

export const saveSubPoint = (text,index)=>{
    return {
        type:"SAVE_SUB_POINT",
        data:{
            point:text,
            index
        }
    }
};

export const addNewPoint = ()=>{
    return { type: "ADD_NEW_POINT"}
}

export const addCard = ()=>{
    return {
        type:"ADD_CARD"
    }
};