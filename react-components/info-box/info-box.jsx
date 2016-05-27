import React from 'react';
import ReactDOM from 'react-dom';


export default class InfoBox extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.getState(props);
    }

    getState(props) {
        return {
            text: 'updating props text' + props.text
        }
    }

    render() {
        return (
            <div>
                <div className='info-box'>
                    {this.state.text} 
                </div>
            </div>
        );
    }
}
