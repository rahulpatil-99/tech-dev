import React from 'react';
import ActiveWindow from '../containers/ActiveWindow';

const spanStyle = {
    'display':'flex',
    'flex-wrap':'wrap'
}
const mainStyle = {
    'flex':'70%',
    'margin-left':'5%',
    'width':'100%'
}


export class App extends React.Component{
    render(){
        return (
            <span style={spanStyle}>
                <span className="main" style={mainStyle}><ActiveWindow /></span>
            </span>
        );
    }
}