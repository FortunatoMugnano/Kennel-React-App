import React, { Component } from 'react';
import OwnerManager from '../../modules/ownerManager';
import '../animal/AnimalForm.css'

class OwnerForm extends Component {
    state = {
        ownerName: "",
        ownerPhoneNumber: "",
        imageUrl: "",
        loadingStatus: false
    };

    handleFieldChange = evt => {
        const stateToChange = {};
        stateToChange[evt.target.id] = evt.target.value;
        this.setState(stateToChange);
    };

    /*  Local method for validation, set loadingStatus, create animal      object, invoke the AnimalManager post method, and redirect to the full animal list
    */
    constructNewOwner = evt => {
        evt.preventDefault();
        if (this.state.ownerName === "" || this.state.ownerPhoneNumber === "") {
            window.alert("Please input an Owner Name or the Telephone Number");
        } else {
            this.setState({ loadingStatus: true });
            const imageValue = this.state.imageUrl.replace("C:\\fakepath\\", "pictures/")
            const owner = {
                name: this.state.ownerName,
                phoneNumber: this.state.ownerPhoneNumber,
                url: imageValue
            };

            // Create the animal and redirect user to animal list
            OwnerManager.post(owner)
                .then(() => this.props.history.push("/owners"));
        }
    };

    render() {

        return (
            <>
                <form>
                    <fieldset>
                        <div className="formgrid">
                            <input type="text" required onChange={this.handleFieldChange} id="ownerName" placeholder="New Owner Name" />
                            <label htmlFor="ownerName">Name</label>
                            <input type="text" required onChange={this.handleFieldChange} id="ownerPhoneNumber" placeholder="Add Telephone Number" />
                            <label htmlFor="ownerPhoneNumber">Telephone Number</label>
                            <input type="file" required onChange={this.handleFieldChange} id="imageUrl" name="pic" accept="pictures/" />
                        </div>
                        <div className="alignRight">
                            <button type="button" disabled={this.state.loadingStatus} onClick={this.constructNewOwner}>Submit
                            </button>
                        </div>
                    </fieldset>
                </form>
            </>
        )
    }
}

export default OwnerForm