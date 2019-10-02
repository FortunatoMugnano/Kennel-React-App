import React, { Component } from 'react';
import EmployeeManager from '../../modules/employeeManager';
import '../animal/AnimalForm.css'

class EmployeeForm extends Component {
    state = {
        employeeName: "",
        loadingStatus: false
    };

    handleFieldChange = evt => {
        const stateToChange = {};
        stateToChange[evt.target.id] = evt.target.value;
        this.setState(stateToChange);
    };

    /*  Local method for validation, set loadingStatus, create animal      object, invoke the AnimalManager post method, and redirect to the full animal list
    */
    constructNewEmployee = evt => {
        evt.preventDefault();
        if (this.state.employeeName === "") {
            window.alert("Please input an Employee Name");
        } else {
            this.setState({ loadingStatus: true });
            const employee = {
                name: this.state.employeeName,
            };

            // Create the animal and redirect user to animal list
            EmployeeManager.post(employee)
                .then(() => this.props.history.push("/employees"));
        }
    };

    render() {

        return (
            <>
                <form>
                    <fieldset>
                        <div className="formgrid">
                            <input type="text" required onChange={this.handleFieldChange} id="employeeName" placeholder="New Employee Name" />
                            <label htmlFor="employeeName">Name</label>
                        </div>
                        <div className="alignRight">
                            <button type="button" disabled={this.state.loadingStatus} onClick={this.constructNewEmployee}>Submit
                            </button>
                        </div>
                    </fieldset>
                </form>
            </>
        )
    }
}

export default EmployeeForm