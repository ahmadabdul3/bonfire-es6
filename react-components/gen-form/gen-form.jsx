import React from 'react';
import FormInput from './gen-input.jsx';

export default class GeneralForm extends React.Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleClear = this.handleClear.bind(this);
    }

    handleSubmit() {
        this.props.handleSubmit();
    }
    handleClear() {
        this.props.handleClear();
    }

    mapInputs() {
        let inputs = this.props.inputData.map(function(data, index) {
            return (
                <FormInput handleOnChange={data.handleOnChange} inputType={data.type} getValue={data.getValue} inputPlaceholder={data.placeholder} inputId={data.id} inputClass={data.class} key={index}/>
            );
        });
        return inputs;
    }

    render() {
        let inputs = this.mapInputs();
        return (
            <div className='form-box'>
                {inputs}
                <button onClick={this.handleSubmit}>
                    Tell story
                </button>
                <button onClick={this.handleClear}>
                    Nevermind
                </button>
            </div>  
        );
    }
}