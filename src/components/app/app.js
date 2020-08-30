import React, {Component} from 'react';

import './app.css';

import Header from '../header';
import RandomPlanet from '../random-planet';
import SwapiService from '../../service/swapiservice';
import ErrorIndicator from '../error-indicator';
import ErrorBoundary from '../error-boundary';
import Row from '../row';

import { SwapiServiceProvider } from '../swapi-service-context';

import {
    PersonDetails,
    PlanetDetails,
    StarshipDetails,
    PersonList,
    PlanetList,
    StarshipList
} from '../ws-components';

export default class App extends Component {

    swapiService = new SwapiService();

    state = {
        showRandomPlanet: true,
        hasError: false
    };

    toggleRandomPlanet = () => {
        this.setState(({showRandomPlanet}) => {
            return {
                showRandomPlanet: !showRandomPlanet
            }  
        });
    };

    componentDidCatch() {
        this.setState({ hasError: true })
    };

    render() {

        if (this.state.hasError) {
            return <ErrorIndicator/>
        }

        const planet = this.state.showRandomPlanet ?
            <RandomPlanet/> :
            null;

        return (
            <ErrorBoundary>
                <SwapiServiceProvider value={this.swapiService}>
                    
                <div className="stardb-app">

                    <Header/>
                    {planet}

                    <Row left={<PersonList/>} 
                    right={<PersonDetails itemId={3}/>}
                    />

                    <Row left={<PlanetList/>} 
                    right={<PlanetDetails itemId={2}/>}
                    />

                    <Row left={<StarshipList/>}
                    right={<StarshipDetails itemId={9}/>}
                    />
      
                </div>
                </SwapiServiceProvider>
            </ErrorBoundary>
        )
    }   
};