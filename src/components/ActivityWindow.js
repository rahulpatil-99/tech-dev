import React from 'react';
import { AddCard }  from './AddCard';

export class ActivityWindow extends React.Component{
    render(){
        const { addTitle,addSubPoint,saveCard,title,subPoint } = this.props;
        return (
            <div>
                <AddCard addTitle={addTitle} 
                addSubPoint={addSubPoint} saveCard={saveCard} 
                title={title} subPoint={subPoint}/>
            </div>
        );
    }
}