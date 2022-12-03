import { Component } from 'react';

class SurveyClass extends Component {
    constructor(props) {
        super(props);
        this.x = 'y';
    }
    render() {
        return (
            <div>
                <h2>Name of Survey: {this.props.name}</h2>

            </div>
        );
    }
}

export default SurveyClass;