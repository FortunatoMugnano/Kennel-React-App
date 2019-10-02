import React, { Component } from "react"

class EmployeeCard extends Component {
    render() {
        return (
        <section>
            <div className="card">
                <div className="card-content">
                    <picture>
                        <img src={this.props.employees.photo} alt="employeeOne" />
                    </picture>
                    <h3>Employee Name:<span className="card-location">{this.props.employees.name}</span></h3>
                    <p>Employee in the Nashville Kennel</p>
                    <button type="button" onClick={() => this.props.fireEmployee(this.props.employees.id)}>Fire Employee</button>
                </div>
            </div>
        </section>
        );
    }
}

export default EmployeeCard