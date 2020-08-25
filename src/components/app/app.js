import React, {Component} from 'react';

import './app.css';

import ItemList from '../item-list';
import Header from '../header';
import PersonDetails from '../person-details';
import RandomPlanet from '../random-planet';


export default class App extends Component {

    state={
        showRandomPlanet: true,
        selectedPerson: null
    };

    toggleRandomPlanet = () => {

    }

    onPersonSelected = (id) => {
        this.setState({
            selectedPerson: id
        })
    }

    render() {

        return (
        <div>
            <Header/>
            <RandomPlanet/>

            <div className="row mb2">
                <div className="col-md-6">
                    <ItemList onPersonSelected={this.onPersonSelected}/>
                </div>
                <div className="col-md-6">
                    <PersonDetails personId={this.state.selectedPerson}/>
                </div>
            </div>
        </div>
        )
    }   
};