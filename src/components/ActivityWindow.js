import React from 'react';
import { AddCard }  from './AddCard';
import { Cards } from './Cards';

export class ActivityWindow extends React.Component{
    render(){
        const { saveTitle,addSubPoint,saveSubPoint,saveCard,title,subPoints,cards } = this.props;
        return (
            <div>
                <AddCard saveTitle={saveTitle} 
                addSubPoint={addSubPoint} saveCard={saveCard} saveSubPoint={saveSubPoint}
                title={title} subPoints={subPoints}/>
                <Cards cards={cards}/>
            </div>
        );
    }
}