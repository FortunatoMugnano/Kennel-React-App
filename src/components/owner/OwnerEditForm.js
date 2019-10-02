import React, { Component } from "react"
import ownerManager from "../../modules/ownerManager"
import "../animal/AnimalForm.css"


class OwnerEditForm extends Component {
    //set the initial state
    state = {
        ownerName: "",
        ownerPhone: "",
        loadingStatus: true,
        imageUrl: ""
    };

    handleFieldChange = evt => {
        const stateToChange = {}
        stateToChange[evt.target.id] = evt.target.value
        this.setState(stateToChange)
    }

    updateExistingOwner = evt => {
        evt.preventDefault()
        const imageValue = this.state.imageUrl.replace("C:\\fakepath\\", "pictures/")
        this.setState({ loadingStatus: true });
        const editOwner = {
            id: this.props.match.params.ownerId,
            name: this.state.ownerName,
            phoneNumber: this.state.ownerPhone,
            url: imageValue
        };


        ownerManager.update(editOwner)
            .then(() => this.props.history.push("/owners"))
    }

    componentDidMount() {
        ownerManager.get(this.props.match.params.ownerId)
            .then(owner => {
                this.setState({
                    ownerName: owner.name,
                    ownerPhone: owner.phoneNumber,
                    imageUrl: owner.url,
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
                                id="ownerName"
                                value={this.state.ownerName}
                            />
                            <label htmlFor="ownerName">Owner Name</label>
                            <input
                                type="text"
                                required
                                className="form-control"
                                onChange={this.handleFieldChange}
                                id="ownerPhone"
                                value={this.state.ownerPhone}
                            />
                            <label htmlFor="ownerPhone">Owner Phone Number</label>
                            <input type="file" className="form-control" onChange={this.handleFieldChange} id="imageUrl" name="pic" />
                            <label htmlFor="locationPicture">Picture</label>
                        </div>
                        <div className="alignRight">
                            <button
                                type="button" disabled={this.state.loadingStatus}
                                onClick={this.updateExistingOwner}
                                className="btn btn-primary"
                            >Submit</button>
                        </div>
                    </fieldset>
                </form>
            </>
        );
    }
}

export default OwnerEditForm