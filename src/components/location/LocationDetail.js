import React, { Component } from 'react';
import LocationManager from '../../modules/locationManager';
import '../animal/AnimalDetail.css'
import {firstLetterCase} from '../../modules/helpers'


class LocationDetail extends Component {

    state = {
        name: "",
        photo: "",
        loadingStatus: true,
        imageUrl: ""
    }

    handleDelete = () => {
        //invoke the delete function in AnimalManger and re-direct to the animal list.
        this.setState({ loadingStatus: true })
        LocationManager.delete(this.props.locationId)
            .then(() => this.props.history.push("/locations"))
    }

    componentDidMount() {
        LocationManager.get(this.props.locationId)
            .then((locations) => {
                this.setState({
                    name: locations.name,
                    photo: locations.photo,
                    imageUrl: locations.url,
                    loadingStatus: false
                });
            });
    }

    render() {
        if (this.state.loadingStatus)
         { return <p>Loading.. </p> }
        return (
            <div className="card">
                <div className="card-content">
                    <picture>
                        <img src={require(`../${this.state.imageUrl}`)} alt="location" />
                    </picture>
                    <h3>Location Name: {firstLetterCase(this.state.name)}</h3>
                    <button type="button" disabled={this.state.loadingStatus} onClick={this.handleDelete}>Close this location</button>
                </div>
            </div>
        );
    }
}

export default LocationDetail;