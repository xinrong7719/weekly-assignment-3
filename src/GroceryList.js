import React from 'react';

const GroceryList = ({ groceryData }) => {
    return (
        <div>
            <h4>Grocery List</h4>
            <ul>
                {groceryData.map(item => (
                    <li key={item.id}>{item.name}</li>
                ))}
            </ul>
        </div>
    );
};

export default GroceryList;
