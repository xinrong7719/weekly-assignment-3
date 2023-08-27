import React, { Component } from 'react';
import EmployeeList from './EmployeeList';
import employees from './data';
import GroceryList from './GroceryList';
import groceryData from './groceryData';
import SenderComponent from './SenderComponent';

class App extends Component {
    render() {
        return (
            <div>
                <h3>Question 2</h3>
                <GroceryList groceryData={groceryData} />
                <h3>Question 3</h3>
                <SenderComponent />
                <h3>Question 1</h3>
                <EmployeeList employees={employees} />
            </div>
        );
    }
}

export default App;