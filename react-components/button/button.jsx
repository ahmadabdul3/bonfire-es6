import React from 'react';
import ReactDom from 'react-dom';


export default class Button extends React.Component {
    constructor(props) {
        super(props);
        //this.click = this.click.bind(this);
    }
    click() {
        alert('hi');
    }
    render() {
        return (
            <button onClick={this.click}>click</button>
        );
    }
}

if(typeof window !== 'undefined') {
  
    ReactDom.render(<Button/>, document.getElementById('button-spot'));
  
}