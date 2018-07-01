import React from 'react';

const anotherStyle={
    "margin-left":'3px'
}

export class Cards extends React.Component{
    getSubPoints(subPoints){
        if(!subPoints.length) return;
        return subPoints.map((point,index)=>{
            return <li key={index}>{point} </li>
        });
    }

    createCards(){
        const { cards } = this.props;
        if(!cards.length)  return <h3>No Cards</h3>;
        return cards.map((card,index) => {
            return (
                <p className={card.title} key={index}>
                    <b><span>{index+1}. </span>
                    <span style={anotherStyle}>{card.title} </span></b>
                    <ul>{this.getSubPoints(card.subPoints)}</ul>
                </p>
            )
        });
    }
    render(){
        const allCards = this.createCards();
        return (
            <div style={{"padding-top":'30px'}}>
                <h1>Your Cards:</h1>
                {allCards}
            </div>
        )
    }
}