import React from 'react';

export class AddCard extends React.Component{
    constructor(props){
        super(props);
        this.handleTitle = this.handleTitle.bind(this);
        this.handleForm = this.handleForm.bind(this);
        this.handleSubPoint = this.handleSubPoint.bind(this);
    }
    handleTitle(e){
        const { addTitle } = this.props;
        addTitle(e.target.value);
    }
    handleSubPoint(e){
        const { addSubPoint } = this.props;
        addSubPoint(e.target.value);
    }
    handleForm(event){
        event.preventDefault();
        const { saveCard } = this.props;
        saveCard();
    }
    render(){
        const { title } = this.props;
        return(
            <form className="add-card-form" onSubmit={this.handleForm}>
                <h1>Add Card:</h1>
                <label>
                    title:
                    <input type="text" name="titletext" 
                        onChange={this.handleTitle}
                        className="title-input"
                        value={title}
                        required 
                    />
                </label>
                <input type="text" name="subTitle" 
                    onBlur={this.handleSubPoint}
                    className="subtitle-input"
                    required
                />
                <input type="submit" value="submit" />
             </form>
        );
    }
};