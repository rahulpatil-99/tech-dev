import React from 'react';
import { SubPoint } from './SubPoint';

export class AddCard extends React.Component{
    constructor(props){
        super(props);
        this.handleTitle = this.handleTitle.bind(this);
        this.handleForm = this.handleForm.bind(this);
    }
    handleTitle(e){
        const { saveTitle } = this.props;
        saveTitle(e.target.value);
    }
    handleForm(event){
        event.preventDefault();
        const { saveCard } = this.props;
        saveCard();
    }
    render(){
        const { title,subPoints,addSubPoint,saveSubPoint } = this.props;
        return(
            <form className="add-card-form" onSubmit={this.handleForm}>
                <h1>Add Card:</h1>
                <label>
                    title:
                    <input type="text" name="titletext" 
                        onChange={this.handleTitle}
                        className="title-input"
                        value={title}
                        placeholder="Enter Title here.."
                        required 
                    />
                </label>
                <SubPoint subPoints={subPoints} addSubPoint={addSubPoint} saveSubPoint={saveSubPoint}/>
                <input type="submit" value="submit" className="submit-input"/>
             </form>
        );
    }
};