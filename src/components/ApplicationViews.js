import { Route, Redirect } from 'react-router-dom'
import React, { Component } from 'react'
import Home from './home/home'
import AnimalList from './animal/AnimalList'
import EmployeeList from "./employee/employeeList"
import LocationList from "./location/LocationList"
import OwnerList from "./owner/OwnerList"
import AnimalDetail from "./animal/AnimalDetail"
import LocationDetail from "./location/LocationDetail"
import AnimalForm from "./animal/AnimalForm"
import LocationForm from "./location/LocationForm"
import EmployeeForm from "./employee/EmployeeForm"
import OwnerForm from "./owner/OwnerForm"
import Login from "./auth/Login"
import AnimalEditForm from "./animal/AnimalEditForm"
import LocationEditForm from "./location/LocationEditForm"
import EmployeeEditForm from "./employee/EmployeeEditForm"
import OwnerEditForm from "./owner/OwnerEditForm"




class ApplicationViews extends Component {

    // Check if credentials are in local storage
    //returns true/false
    isAuthenticated = () => localStorage.getItem("credentials") !== null

    render() {
        return (
            <React.Fragment>
                <Route exact path="/" render={props => {
                    if (this.isAuthenticated()) {
                        return <Home {...props} />
                    } else {
                        return <Redirect to="/login" />
                    }
                }} />

                {/* Make sure you add the `exact` attribute here */}
                {/*updated route: `/animals` */}
                <Route exact path="/animals" render={props => {
                    if (this.isAuthenticated()) {
                        return <AnimalList {...props} />
                    } else {
                        return <Redirect to="/login" />
                    }
                }} />
                <Route exact path="/animals/:animalId(\d+)" render={(props) => {
                    // Pass the animalId to the AnimalDetailComponent
                    return <AnimalDetail animalId={parseInt(props.match.params.animalId)} {...props} />
                }} />

                {/*
                  This is a new route to handle a URL with the following pattern:
                  http://localhost:3000/animals/1

                  It will not handle the following URL because the `(\d+)`
                  matches only numbers after the final slash in the URL
                  http://localhost:3000/animals/jack
                */}
                {/* Our shiny new route. */}
                <Route path="/animals/new" render={(props) => {
                    return <AnimalForm {...props} />
                }} />
                <Route path="/animals/:animalId(\d+)/edit" render={props => {
                    return <AnimalEditForm {...props} />
                }} />
                <Route exact path="/locations" render={props => {
                    if (this.isAuthenticated()) {
                        return <LocationList {...props} />
                    } else {
                        return <Redirect to="/login" />
                    }
                }} />
                <Route exact path="/locations/:locationId(\d+)" render={(props) => {
                    // Pass the animalId to the AnimalDetailComponent
                    return <LocationDetail locationId={parseInt(props.match.params.locationId)} {...props} />
                }} />
                {/* Our shiny new route. */}
                <Route path="/locations/new" render={(props) => {
                    return <LocationForm {...props} />
                }} />
                <Route path="/locations/:locationId(\d+)/edit" render={props => {
                    return <LocationEditForm {...props} />
                }} />
                <Route exact path="/employees" render={props => {
                    if (this.isAuthenticated()) {
                        return <EmployeeList {...props} />
                    } else {
                        return <Redirect to="/login" />
                    }
                }} />
                {/* Our shiny new route. */}
                <Route path="/employees/new" render={(props) => {
                    return <EmployeeForm {...props} />
                }} />
                <Route path="/employees/:employeeId(\d+)/edit" render={props => {
                    return <EmployeeEditForm {...props} />
                }} />
                <Route exact path="/owners" render={props => {
                    if (this.isAuthenticated()) {
                        return <OwnerList {...props} />
                    } else {
                        return <Redirect to="/login" />
                    }
                }} />
                {/* Our shiny new route. */}
                <Route path="/owners/new" render={(props) => {
                    return <OwnerForm {...props} />
                }} />
                <Route path="/owners/:ownerId(\d+)/edit" render={props => {
                    return <OwnerEditForm {...props} />
                }} />
                <Route path="/login" component={Login} />
            </React.Fragment>
        )
    }
}

export default ApplicationViews