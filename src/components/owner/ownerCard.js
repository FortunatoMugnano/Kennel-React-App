import React, { Component } from "react"

class OwnerCard extends Component {
    render() {
        return (
            <section>
                <div className="card">
                    <div className="card-content">
                        <picture>
                            <img src={this.props.owners.photo} alt="owner" />
                        </picture>
                        <h3>Owner Name:<span className="card-location">{this.props.owners.name}</span></h3>
                        <p>Adopter from the Nashville Kennel</p>
                        <p>Telephone Number: {this.props.owners.phoneNumber}</p>
                        <button type="button" onClick={() => this.props.removeOwner(this.props.owners.id)}>Remove this Owner</button>
                    </div>
                </div>
            </section>)
    }
}

export default OwnerCard