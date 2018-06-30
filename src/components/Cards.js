import React from 'react';

const style={
    "margin-left":'15px'
}

const anotherStyle={
    "margin-left":'3px'
}

export class Cards extends React.Component{
    createCards(){
        const { cards } = this.props;
        if(!cards.length)  return <h3>No Cards</h3>;
        return cards.map((card,index) => {
            return (
                <p className={card.title} key={index}>
                    <b><span>{index+1}. </span>
                    <span style={anotherStyle}>{card.title} </span></b>
                    <span style={style}>{card.subPoint}</span>
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