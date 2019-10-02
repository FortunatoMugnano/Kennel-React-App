import React, { Component } from "react"
import LocationCard from "./locationCard"
import locationManager from "../../modules/locationManager"
import "../animal/animal.css"



class LocationList extends Component {
    //define what this component needs to render
    state = {
        locations: [],
    }

    closeLocation = id => {
        locationManager.delete(id)
            .then(() => {
                locationManager.getAll()
                    .then((newLocation) => {
                        this.setState({
                            locations: newLocation
                        })
                    })
            })
    }

    componentDidMount() {
        //getAll from AnimalManager and hang on to that data; put it in state
        locationManager.getAll()
            .then((locations) => {
                this.setState({
                    locations: locations
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
                        onClick={() => { this.props.history.push("/locations/new") }}>
                        Open a new Location
                    </button>
                </section>
                <div className="container-cards">
                    {this.state.locations.map(locations =>
                        <LocationCard key={locations.id} locations={locations} closeLocation={this.closeLocation} />)}
                </div>
            </>
        )
    }
}

export default LocationList