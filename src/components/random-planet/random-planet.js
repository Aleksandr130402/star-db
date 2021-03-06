import React, { Component } from 'react';

import './random-planet.css';

import SwapiService from '../../service/swapiservice';
import Spinner from '../spinner';
import ErrorIndicator from '../error-indicator';

export default class RandomPlanet extends Component {

    swapiService = new SwapiService();

    state = {
        planet: {},
        loading: true,
        error: false
    }

    componentDidMount() {
        this.updatePlanet();
        this.interval = setInterval(this.updatePlanet, 10000);
    };

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    onPlanetLoaded = (planet) => {
        this.setState({planet,
        loading: false,
        error: false
        });
    };

    onError = (err) => {
        this.setState({
            error: true,
            loading: false
        });
    };
    
    updatePlanet = () => {
        const id = Math.floor(Math.random()*17) + 2;
        this.swapiService
        .getPlanet(id)
        .then(this.onPlanetLoaded)
        .catch(this.onError);
    };

    render() {
        
        const { planet, loading, error } = this.state;

        const hasData = !(loading || error);

        const errorMessage = error ? <ErrorIndicator/> : null;
        const spinner = loading ? <Spinner/> : null;
        const content = hasData ? <PlanetView planet={planet}/> : null;
        
        return (
            <div 
            className="random-planet jumbotron rounded">
                {errorMessage}
                {spinner}
                {content}
            </div>
        );
    } 
}

const PlanetView = ({ planet }) => {

    const { id,
            name,
            population,
            rotationPariod,
            diameter} = planet;

    return (
        <React.Fragment>
            <img className="planet-image"
                    src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`}
                    alt="random_planet"
            />
            <div className="planet-info">
                <h4 className="text-center">{name}</h4>
                <ul className="list-group-item">
                    <li className="list-group-item">
                        <span className="term"> Population</span>
                        <span>{population}</span>
                    </li>
                    <li className="list-group-item">
                        <span className="term"> Rotation pariod</span>
                        <span>{rotationPariod}</span>
                    </li>
                    <li className="list-group-item">
                        <span className="term"> Diameter</span>
                        <span>{diameter}</span>
                    </li>
                </ul>
            </div>      
        </React.Fragment>
    )
}