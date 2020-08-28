import React, {Component} from 'react';

import './app.css';

import Header from '../header';
import RandomPlanet from '../random-planet';
import PeoplePage from '../people-page';
import ItemDetails, {Record} from '../item-details/item-details';
import SwapiService from '../../service/swapiservice';
import ErrorIndicator from '../error-indicator';
import Row from '../row';

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
        <div className="stardb-app">
            <Header/>
            { planet }

        <div className="row mb-2 button-row">
            <button
            className="toggle-planet btn btn-warning btn-lg"
            onClick={this.toggleRandomPlanet}>
                Toggle Random Planet
            </button>
        </div>
            
        <PeoplePage/>

        <Row left={personDetails} right={starshipDetails} />

        </div>
        )
    }   
};