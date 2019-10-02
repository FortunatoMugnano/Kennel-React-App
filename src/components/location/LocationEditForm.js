import React, { Component } from "react"
import locationManager from "../../modules/locationManager"
import "../animal/AnimalForm.css"


class LocationEditForm extends Component {
    //set the initial state
    state = {
        locationName: "",
        loadingStatus: true,
        imageUrl: ""
    };

    handleFieldChange = evt => {
        const stateToChange = {}
        stateToChange[evt.target.id] = evt.target.value
        this.setState(stateToChange)
    }

    updateExistingLocation = evt => {
        evt.preventDefault()
        const imageValue = this.state.imageUrl.replace("C:\\fakepath\\", "pictures/")
        this.setState({ loadingStatus: true });
        const editLocation = {
            id: this.props.match.params.locationId,
            name: this.state.locationName,
            url: imageValue
        };


        locationManager.update(editLocation)
            .then(() => this.props.history.push("/locations"))
    }

    componentDidMount() {
        locationManager.get(this.props.match.params.locationId)
            .then(location => {
                this.setState({
                    locationName: location.name,
                    imageUrl: location.url,
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
                                id="locationName"
                                value={this.state.locationName}
                            />
                            <label htmlFor="locationName">Location Name</label>
                            <input type="file" className="form-control" onChange={this.handleFieldChange} id="imageUrl" name="pic" />
                            <label htmlFor="locationPicture">Picture</label>
                        </div>
                        <div className="alignRight">
                            <button
                                type="button" disabled={this.state.loadingStatus}
                                onClick={this.updateExistingLocation}
                                className="btn btn-primary"
                            >Submit</button>
                        </div>
                    </fieldset>
                </form>
            </>
        );
    }
}

export default LocationEditForm