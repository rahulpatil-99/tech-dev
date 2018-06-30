import React from 'react';
import { AddCard }  from './AddCard';
import { Cards } from './Cards';

export class ActivityWindow extends React.Component{
    render(){
        const { addTitle,addSubPoint,saveCard,title,subPoint,cards } = this.props;
        return (
            <div>
                <AddCard addTitle={addTitle} 
                addSubPoint={addSubPoint} saveCard={saveCard} 
                title={title} subPoint={subPoint}/>
                <Cards cards={cards}/>
            </div>
        );
    }
}