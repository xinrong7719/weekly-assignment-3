import React, { Component } from 'react';
import ReceiverComponent from './ReceiverComponent';

class SenderComponent extends Component {
    state = {
        dataToSend: {
            name: 'John',
            age: 30,
            occupation: 'Engineer'
        }
    };

    render() {
        return (
            <div>
                <button onClick={this.updateData}>Update Data</button>
                <ReceiverComponent receivedData={this.state.dataToSend} />
            </div>
        );
    }

    updateData = () => {
        const updatedData = {
            name: 'Alice',
            age: 25,
            occupation: 'Designer'
        };
        this.setState({ dataToSend: updatedData });
    };
}

export default SenderComponent;
