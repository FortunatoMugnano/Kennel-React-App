import React, { Component } from "react"
import OwnerCard from "./ownerCard"
import "../animal/animal.css"
import ownerManager from "../../modules/ownerManager"



class OwnerList extends Component {
    //define what this component needs to render
    state = {
        owners: [],
    }

    removeOwner = id => {
        ownerManager.delete(id)
            .then(() => {
                ownerManager.getAll()
                    .then((newOwner) => {
                        this.setState({
                            owners: newOwner
                        })
                    })
            })
    }

    componentDidMount() {
        //getAll from AnimalManager and hang on to that data; put it in state
        ownerManager.getAll()
            .then((owners) => {
                this.setState({
                    owners: owners
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
                        onClick={() => { this.props.history.push("/owners/new") }}>
                        Add a new Owner
            </button>
                </section>
                <div className="container-cards">
                    {this.state.owners.map(owners =>
                        <OwnerCard key={owners.id} owners={owners} removeOwner={this.removeOwner} {...this.props} />)}
                </div>
            </>
        )
    }
}

export default OwnerList