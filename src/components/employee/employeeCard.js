import React, { Component } from "react"

class EmployeeCard extends Component {
    render() {
        return (
        <section>
            <div className="card">
                <div className="card-content">
                    <picture>
                        <img src={require(`./employeeOne.png`)} alt="employeeOne" />
                    </picture>
                    <h3>Employee Name:<span className="card-location">Employee One</span></h3>
                    <p>Employee in the Nashville Kennel</p>
                </div>
            </div>
            <div className="card">
                <div className="card-content">
                    <picture>
                        <img src={require(`./employeeTwo.png`)} alt="employeeTwo" />
                    </picture>
                    <h3>Employee Name:<span className="card-location">Employee Two</span></h3>
                    <p>Employee in the Franklin Kennel</p>
                </div>
            </div>
            <div className="card">
                <div className="card-content">
                    <picture>
                        <img src={require(`./employeeThree.png`)} alt="employeeThree" />
                    </picture>
                    <h3>Employee Name:<span className="card-location">Employee Three</span></h3>
                    <p>Employee in the Hendersonville Kennel</p>
                </div>
            </div>
        </section>
        );
    }
}

export default EmployeeCard