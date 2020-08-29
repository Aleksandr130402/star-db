import React, {Component} from 'react';

import './app.css';

import Header from '../header';
import RandomPlanet from '../random-planet';
import ItemDetails, {Record} from '../item-details/item-details';
import SwapiService from '../../service/swapiservice';
import ErrorIndicator from '../error-indicator';
import ErrorBoundary from '../error-boundary';
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

    // toggleRandomPlanet = () => {
    //     this.setState({
    //         showRandomPlanet: true
    //     })
    // }

    componentDidCatch() {
        this.setState({ hasError: true })
    };

    onPersonSelected = (id) => {
        this.setState({
            selectedPerson: id
        });
    };

    render() {

        if (this.state.hasError) {
            return <ErrorIndicator/>
        }

        const planet = this.state.showRandomPlanet ?
            <RandomPlanet/> :
            null;

        const {getPerson,
            getStarship,
            getPersonImage,
            getStarshipImage} = this.swapiService;

        const personDetails = (
            <ItemDetails itemId={11}
            getData={getPerson}
            getImageUrl={getPersonImage}>
            <Record field="gender" label="Gender"/>
            <Record field="birthYear" label="Birth Year"/>
            <Record field="eyeColor" label="Eye Color"/>
            </ItemDetails>
        );

        const starshipDetails = (
            <ItemDetails itemId={5}
            getData={getStarship}
            getImageUrl={getStarshipImage}>
            <Record field="model" label="Model"/>
            <Record field="lenght" label="Lenght"/>
            <Record field="costInCredits" label="Cost"/>
            </ItemDetails>

        )

        return (
            <ErrorBoundary>
                <div className="stardb-app">
                    <Header/>
                    <PersonDetails itemId={3}/>
                    <PlanetDetails itemId={2}/>
                    <StarshipDetails itemId={9}/>
                    <PersonList>
                        { ({name}) => <span>{name}</span>}
                    </PersonList>
                    <PlanetList>
                        { ({name}) => <span>{name}</span>}
                    </PlanetList>
                    <StarshipList>
                        { ({name}) => <span>{name}</span>}
                    </StarshipList>
                    
                </div>
            </ErrorBoundary>
        )
    }   
};