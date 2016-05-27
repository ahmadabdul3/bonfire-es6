import React from 'react';
import ReactDOM from 'react-dom';
import InfoBox from '../../../react-components/info-box/info-box.jsx';


export default class InfoBoxes extends React.Component {
    constructor() {
        super();
        this.state = {
            'infoBoxes': [
                {
                    'text': 'first info box'
                },
                {
                    'text': 'second info box'
                },
                {
                    'text': 'third info box'
                },
                {
                    'text': 'fourth info box'
                },
                {
                    'text': 'fifth info box'
                }
            ]
        };
    }

    getInfoBoxComponents() {
        var elements = this.state['infoBoxes'].map(function(data, index) {
            return (
                <InfoBox text={data['text']} key={index}/>
            );
        }, this);
        return elements;
    }

    render() {
        var InfoBoxesWithData = this.getInfoBoxComponents();
        return (
            <div>
                <h4>
                    info boxes
                </h4>
                {InfoBoxesWithData}
            </div>
        );
    }
}

if(typeof window !== 'undefined') {
    ReactDOM.render(<InfoBoxes/>, document.getElementById('info-box-mount-point'));
}
