import React, { Component } from 'react'
import employeeManager from '../../modules/employeeManager'
import AnimalCard from '../animal/AnimalCard'
import "../animal/AnimalDetail.css"
import AnimalManager from "../../modules/AnimalManager"

class EmployeeWithAnimals extends Component {
    state = {
        employee: {},
        animals: []
    }


    componentDidMount() {
        //got here now make call to get employee with animal
        employeeManager.getWithAnimals(this.props.match.params.employeeId)
            .then((APIResult) => {
                this.setState({
                    employee: APIResult,
                    animals: APIResult.animals,
                })
            })
    }
    deleteAnimal = id => {
        AnimalManager.delete(id)
            .then(() => {
                AnimalManager.getAll()
                    .then((newAnimals) => {
                        this.setState({
                            animals: newAnimals
                        })
                    })
            })
    }

    render() {
        return (
            <div className="card">
                <h4>Employee: {this.state.employee.name}</h4>
                <p>Taking care of:</p>
                {this.state.animals.map(animal =>
                    <AnimalCard
                        key={animal.id}
                        animal={animal}
                        deleteAnimal={this.deleteAnimal}
                        {...this.props}
                    />
                )}
            </div>
        )
    }
}

export default EmployeeWithAnimals;