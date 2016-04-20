import React from 'react';
import ReactDOM from 'react-dom';


export default class InfoBox extends React.Component {
    constructor() {
        super();
    }
    render() {
        return (
            <div>
                <div className='info-box'>
                    {this.props.text} 
                </div>
            </div>
        );
    }
}
