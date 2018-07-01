import React from 'react';

export class SubPoint extends React.Component{
    constructor(props){
        super(props);
        this.handlePoint=this.handlePoint.bind(this);
    }
    handlePoint(index,e){
        const { saveSubPoint } = this.props;
        saveSubPoint(e.target.value,index);
    }
    getSubpoints(){
        const { subPoints } = this.props;
        if(!subPoints.length) return;
        return subPoints.map((point,index)=>{
            const __class = `subtitle input-${index}`;
            return <li key={index}><input type="text"
                onChange={(e)=>this.handlePoint(index,e)}
                className={__class}
                value={point}
                required
            /></li>
        })
    }
    render(){
        const subpoints = this.getSubpoints();
        const {addSubPoint} = this.props;
        return (
            <span className="subpoints">
                <div>{subpoints}</div>
                <button onClick={()=> addSubPoint()}>Add New</button>
            </span>
        );
    }
}