import React from 'react';

export default class GeneralInput extends React.Component {
    constructor(props) {
        super(props);
        this.handleOnChange = this.handleOnChange.bind(this);
    }

    exposeElement(element) {
        this.getElement = function() {
            return element;
        }
    }

    getValue() {
        let thisVal = this.getElement().value;
        this.getElement().value = 'getting value';
    }

    idIsEmpty() {
        return (this.props.id === '' || this.props.id === ' ');
    }

    inputIsTextarea() {
        return this.props.type === 'textarea';
    }

    handleOnChange(e) {
        let value = e.target.value;
        this.props.handleOnChange(value);
    }

    render() {
        return (
            <div className='form-input-box'>
                
                    <input onChange={this.handleOnChange} type={this.props.inputType} value={this.props.getValue()} placeholder={this.props.inputPlaceholder} className={this.props.inputClass} />
                
            </div>  
        );
    }
}