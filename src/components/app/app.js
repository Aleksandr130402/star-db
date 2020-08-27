import React, {Component} from 'react';

import './app.css';

import Header from '../header';
import RandomPlanet from '../random-planet';
import PeoplePage from '../people-page/people-page';


export default class App extends Component {

    state={
        showRandomPlanet: true,
    };

    // toggleRandomPlanet = () => {
    //     this.setState({
    //         showRandomPlanet: true
    //     })
    // }

    onPersonSelected = (id) => {
        this.setState({
            selectedPerson: id
        });
    };

    render() {

        const planet = this.state.showRandomPlanet ?
            <RandomPlanet/> :
            null;

        return (
        <div className="stardb-app">
            <Header/>
            { planet }

            <button
            className="toggle-planet btn btn-warning btn-lg"
            onClick={this.toggleRandomPlanet}>
                Toggle Random Planet
            </button>

            <PeoplePage/>
        </div>
        )
    }   
};