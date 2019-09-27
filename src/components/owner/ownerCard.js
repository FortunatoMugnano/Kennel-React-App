import React, { Component } from "react"

class OwnerCard extends Component {
    render() {
        return (
            <section>
                <div className="card">
                    <div className="card-content">
                        <picture>
                            <img src={require(`./mugnano.jpeg`)} alt="owner" />
                        </picture>
                        <h3>Owner Name:<span className="card-location">Mr. Mugnano Fortunato</span></h3>
                        <p>Adopted from the Nashville Kennel</p>
                    </div>
                </div>
            </section>)
    }
}

export default OwnerCard