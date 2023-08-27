import React, { Component } from 'react';
import PropTypes from 'prop-types'; // Import PropTypes

class ReceiverComponent extends Component {
    render() {
        const receivedData = this.props.receivedData;

        return (
            <div>
                <p>Name: {receivedData.name}</p>
                <p>Age: {receivedData.age}</p>
                <p>Occupation: {receivedData.occupation}</p>
            </div>
        );
    }
}

// Define prop types for receivedData
ReceiverComponent.propTypes = {
    receivedData: PropTypes.shape({
        name: PropTypes.string.isRequired,
        age: PropTypes.number.isRequired,
        occupation: PropTypes.string.isRequired
    }).isRequired
};

export default ReceiverComponent;
