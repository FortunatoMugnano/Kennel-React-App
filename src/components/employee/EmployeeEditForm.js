import React, { Component } from "react"
import employeeManager from "../../modules/employeeManager"
import "../animal/AnimalForm.css"


class EmployeeEditForm extends Component {
    //set the initial state
    state = {
        employeeName: "",
        loadingStatus: true,
        imageUrl: ""
    };

    handleFieldChange = evt => {
        const stateToChange = {}
        stateToChange[evt.target.id] = evt.target.value
        this.setState(stateToChange)
    }

    updateExistingEmployee = evt => {
        evt.preventDefault()
        const imageValue = this.state.imageUrl.replace("C:\\fakepath\\", "pictures/")
        this.setState({ loadingStatus: true });
        const editEmployee = {
            id: this.props.match.params.employeeId,
            name: this.state.employeeName,
            url: imageValue
        };


        employeeManager.update(editEmployee)
            .then(() => this.props.history.push("/employees"))
    }

    componentDidMount() {
        employeeManager.get(this.props.match.params.employeeId)
            .then(employee => {
                this.setState({
                    employeeName: employee.name,
                    imageUrl: employee.url,
                    loadingStatus: false,
                });
            });
    }


    render() {
        return (
            <>
                <form>
                    <fieldset>
                        <div className="formgrid">
                            <input
                                type="text"
                                required
                                className="form-control"
                                onChange={this.handleFieldChange}
                                id="employeeName"
                                value={this.state.employeeName}
                            />
                            <label htmlFor="employeeName">Employee Name</label>
                            <input type="file" className="form-control" onChange={this.handleFieldChange} id="imageUrl" name="pic" />
                            <label htmlFor="employeePicture">Employee Picture</label>
                        </div>
                        <div className="alignRight">
                            <button
                                type="button" disabled={this.state.loadingStatus}
                                onClick={this.updateExistingEmployee}
                                className="btn btn-primary"
                            >Submit</button>
                        </div>
                    </fieldset>
                </form>
            </>
        );
    }
}

export default EmployeeEditForm