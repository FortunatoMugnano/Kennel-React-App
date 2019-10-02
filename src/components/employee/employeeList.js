import React, { Component } from "react"
import EmployeeCard from "./employeeCard"
import employeeManager from "../../modules/employeeManager"
import "../animal/animal.css"


class EmployeeList extends Component {
    //define what this component needs to render
    state = {
        employees: [],
    }

    fireEmployee = id => {
        employeeManager.delete(id)
            .then(() => {
                employeeManager.getAll()
                    .then((newEmployee) => {
                        this.setState({
                            employees: newEmployee
                        })
                    })
            })
    }

    componentDidMount() {
        //getAll from AnimalManager and hang on to that data; put it in state
        employeeManager.getAll()
            .then((employees) => {
                this.setState({
                    employees: employees
                })
            })
    }

    render() {

        return (
            //add this button above your display of animal cards
            <>
                <section className="section-content">
                    <button type="button"
                        className="btn"
                        onClick={() => { this.props.history.push("/employees/new") }}>
                        Hire a new Employee
                    </button>
                </section>
                <div className="container-cards">
                    {this.state.employees.map(employees =>
                        <EmployeeCard key={employees.id} employees={employees} fireEmployee={this.fireEmployee} />)}
                </div>
            </>
        )
    }
}

export default EmployeeList