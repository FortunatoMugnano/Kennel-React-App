import { Route } from 'react-router-dom'
import React, { Component } from 'react'
import Home from './home/home'
import LocationCard from './location/locationCard'
import EmployeeCard from './employee/employeeCard'
import OwnerCard from './owner/ownerCard'
import AnimalList from './animal/AnimalList'




class ApplicationViews extends Component {

  render() {
    return (
      <React.Fragment>
        <Route exact path="/" render={(props) => {
          return <Home />
        }} />
        <Route path="/animals" render={(props) => {
          return <AnimalList />
        }} />
        <Route path="/locations" render={(props) => {
          return <LocationCard />
        }} />
        <Route path="/employees" render={(props) => {
          return <EmployeeCard />
        }} />
        <Route path="/owners" render={(props) => {
          return <OwnerCard/>
        }} />
      </React.Fragment>
    )
  }
}

export default ApplicationViews