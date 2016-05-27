import React from 'react';
import ReactDom from 'react-dom';
import GenForm from '../../../react-components/gen-form/gen-form.jsx';
import GenInput from '../../../react-components/gen-form/gen-input.jsx';

export default class AddStoryForm extends React.Component {
    constructor() {
        super();
        this.clearForm = this.clearForm.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.updateNewItemHeader = this.updateNewItemHeader.bind(this);
        this.updateNewItemBody = this.updateNewItemBody.bind(this);
        this.getHeaderValue = this.getHeaderValue.bind(this);
        this.getBodyValue = this.getBodyValue.bind(this);
        
        this.state = {
            inputData: [
                {
                    type: 'text',
                    getValue: this.getHeaderValue,
                    placeholder: '',
                    id: '',
                    class: 'cg-story-add-item-form-input',
                    handleOnChange: this.updateNewItemHeader
                    
                },
                {
                    type: 'text',
                    getValue: this.getBodyValue,
                    placeholder: '',
                    id: '',
                    class: 'cg-story-add-item-form-input',
                    handleOnChange: this.updateNewItemBody
                    
                }
            ],
            newItemHeader: '',
            newItemBody: ''
        };

    }

    isAnEmptyString(string) {
        if (string && string.trim().length > 0) return false;
        return true;
    }

    handleSubmit() {
        if(!this.isAnEmptyString(this.state.newItemHeader) 
            && !this.isAnEmptyString(this.state.newItemBody)) 
        {
            /*FluxActions.addItem({
                title: this.state.newItemHeader,
                body: this.state.newItemBody
            });*/
            alert(this.state.newItemHeader + ' ' + this.state.newItemBody);
        } else { alert('inputs are empty');}
        this.clearForm();
    }

    clearForm() {
        this.setState({
            newItemBody: '',
            newItemHeader: ''
        });
    }

    updateNewItemHeader(title) {
        this.setState({
            newItemHeader: title
        });
    }

    updateNewItemBody(body) {
        this.setState({
            newItemBody: body
        });
    }

    getHeaderValue() {
        return this.state.newItemHeader;
    }
    getBodyValue() {
        return this.state.newItemBody;
    }

    render() {
        return (
            <div>
                <GenForm
                    inputData={this.state.inputData}
                    includeSubmitButton={true}
                    includeClearButton={true}
                    handleSubmit={this.handleSubmit}
                    handleClear={this.clearForm}
                />
            </div>
        );
    }
}
if(typeof window !== 'undefined') {
  
    ReactDom.render(<AddStoryForm/>, document.getElementById('story-form'));
  
}



