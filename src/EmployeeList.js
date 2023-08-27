import React from 'react';

const EmployeeList = ({ employees }) => {
    return (
        <div>
            <h4>Employee List</h4>
            {employees.map(employee => (
                <div key={employee.id} onMouseOver={() => handleMouseOver(employee)}>
                    <img src={employee.image} alt={`${employee.name} Image`} style={{ height: '150px', width: '120px' }} />
                    <div>{employee.name} - {employee.designation}</div>
                </div>
            ))}
        </div>
    );
};

const handleMouseOver = (employee) => {
    alert(
        `Name: ${employee.name}\nAge: ${employee.age}\nDOB: ${employee.DOB}\nSalary: ${employee.salary}\nDesignation: ${employee.designation}\nDepartment: ${employee.department}`
    );
};

export default EmployeeList;
