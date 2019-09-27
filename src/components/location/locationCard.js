import React, { Component } from "react"

class LocationCard extends Component {
    render() {
        return (
            <section>
                <div className="card">
                    <div className="card-content">
                        <picture>
                            <img src={require(`./nashvilleKennel.jpg`)} alt="nashville" />
                        </picture>
                        <h3>Location Name:<span className="card-location">Nashville</span></h3>
                        <p>Nashville Kennel</p>
                    </div>
                </div>
                <div className="card">
                    <div className="card-content">
                        <picture>
                            <img src={require(`./franklinKennel.jpg`)} alt="franklin" />
                        </picture>
                        <h3>Location Name:<span className="card-location">Franklin</span></h3>
                        <p>Franklin Kennel</p>
                    </div>
                </div>
                <div className="card">
                    <div className="card-content">
                        <picture>
                            <img src={require(`./hendersonvilleKennel.png`)} alt="hendersonville" />
                        </picture>
                        <h3>Location Name:<span className="card-location">Hendersonville</span></h3>
                        <p>Hendersonville Kennel</p>
                    </div>
                </div>
            </section>
        );
    }
}

export default LocationCard