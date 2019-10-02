import React, { Component } from 'react';
import LocationManager from '../../modules/locationManager';
import '../animal/AnimalForm.css'

class LocationForm extends Component {
    state = {
        locationName: "",
        loadingStatus: false
    };

    handleFieldChange = evt => {
        const stateToChange = {};
        stateToChange[evt.target.id] = evt.target.value;
        this.setState(stateToChange);
    };

    /*  Local method for validation, set loadingStatus, create animal      object, invoke the AnimalManager post method, and redirect to the full animal list
    */
    constructNewLocation = evt => {
        evt.preventDefault();
        if (this.state.locationName === "") {
            window.alert("Please input a Location Name");
        } else {
            this.setState({ loadingStatus: true });
            const location = {
                name: this.state.locationName,
            };

            // Create the animal and redirect user to animal list
            LocationManager.post(location)
                .then(() => this.props.history.push("/locations"));
        }
    };

    render() {

        return (
            <>
                <form>
                    <fieldset>
                        <div className="formgrid">
                            <input type="text" required onChange={this.handleFieldChange} id="locationName" placeholder="Location Name" />
                            <label htmlFor="locationName">Name</label>
                        </div>
                        <div className="alignRight">
                            <button type="button" disabled={this.state.loadingStatus} onClick={this.constructNewLocation}>Submit
                            </button>
                        </div>
                    </fieldset>
                </form>
            </>
        )
    }
}

export default LocationForm