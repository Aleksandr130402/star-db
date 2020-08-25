import React, { Component } from 'react';

import SwapiService from '../../service/swapiservice';

export default class PersonDetails extends Component {

    swapiService = new SwapiService();

    state = {
        person: {},
    }
    
    componentDidUpdate() {

        this.swapiService
        .getPerson(this.props.PersonId)
        .then((person) => {
            this.setState({person});
        });
    }  

    render() {

        const {person: {name, gender, birthYear, eyeColor}} = this.state;
        const {personId} = this.props;

       return (
        <div className="person-details card">
            <img className="person-image"
                    src={`https://starwars-visualguide.com/assets/img/people/${personId}.jpg`}
                />
            <div className="person-info">
                <h4 className="text-center">{name}</h4>
                <ul className="list-group-item">
                    <li className="list-group-item">
                        <span className="term"> Gender</span>
                        <span>{gender}</span>
                    </li>
                    <li className="list-group-item">
                        <span className="term"> Birth year</span>
                        <span>{birthYear}</span>
                    </li>
                    <li className="list-group-item">
                        <span className="term"> Eye color</span>
                        <span>{eyeColor}</span>
                    </li>
                </ul>
            </div>      
        </div>
        ) 
    }
    
}