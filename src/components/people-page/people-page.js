import React, { Component } from 'react';

import './people-page.css';

import ItemList from '../item-list';
import PersonDetails from '../person-details';

export default class PeoplePage extends Component {

    state = {
        selectedPerson: 3
    }

    onPersonSelected = (selectedPerson) => {
        this.setState({ selectedPerson });
    };

    render() {
        return (
            <div className="row mb2">
                <div className="col-md-6">
                    <ItemList 
                    onItemSelected={this.onPersonSelected}
                    getData={this.swapiService.getAllPlanets}/>
                </div>
                <div className="col-md-6">
                    <PersonDetails personId={this.state.selectedPerson}/>
                </div>
            </div>
        )   
    }
}