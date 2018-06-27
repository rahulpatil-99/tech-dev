export const saveCardTitle = (title)=>{
    return {
        type:"SAVE_CARD_TITLE",
        data:{
            title:title
        }
    }
};

export const saveSubPoint = (text)=>{
    return {
        type:"SAVE_SUB_POINT",
        data:{
            point:text
        }
    }
};

export const addCard = ()=>{
    return {
        type:"ADD_CARD"
    }
};