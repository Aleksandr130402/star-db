import React, { Component } from 'react';

import SwapiService from '../../service/swapiservice';

export default class RandomPlanet extends Component {

    swapiService = new SwapiService();

    state = {
        id: null,
        name: null,
        population: null,
        rotationPariod: null,
        diameter: null
    }

    constructor() {
        super();
        this.updatePlanet();
    }
    
    updatePlanet() {
            const id = 11;
            this.swapiService
            .getPlanet(id)
            .then((planet) => {
                this.setState({
                    id,
                    name: planet.name,
                    population: planet.population,
                    rotationPariod: planet.rotation_period,
                    diameter: planet.diameter
                });
            });
        }

    render() {
        
        const {id, name, population, rotationPariod, diameter} = this.state;
        

        return (
            <div className="random-planet jumbotron rounded">
                <img className="planet-image"
                    src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`}
                />
                <div>
                    <h4>{name}</h4>
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
                
            </div>
        );
    }

    
}