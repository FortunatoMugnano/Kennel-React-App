import React, { Component } from "react"
import {Link} from "react-router-dom"
import {firstLetterCase} from '../../modules/helpers'

class LocationCard extends Component {
    render() {
        return (
            <section>
                <div className="card">
                    <div className="card-content">
                        <picture>
                            <img src={this.props.locations.photo} alt="nashville" />
                        </picture>
                        <h3>Location Name:<span className="card-location">{firstLetterCase(this.props.locations.name)}</span></h3>
                        <p>{this.props.locations.name}</p>
                        <button type="button" onClick={() => this.props.closeLocation(this.props.locations.id)}>Close this Location</button>
                        <Link to={`/locations/${this.props.locations.id}`}><button>Details</button></Link>
                    </div>
                </div>
            </section>
        );
    }
}

export default LocationCard