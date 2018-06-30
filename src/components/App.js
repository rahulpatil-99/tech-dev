import React from 'react';
import ActiveWindow from '../containers/ActiveWindow';

export class App extends React.Component{
    render(){
        return (
            <span>
                <span className="main"><ActiveWindow /></span>
            </span>
        );
    }
}