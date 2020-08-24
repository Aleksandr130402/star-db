import React, {Component} from 'react';

import './app.css';

import ItemList from '../item-list';
import Header from '../header';
import PersonDetails from '../person-details';
import RandomPlanet from '../random-planet';

export default class App extends Component {
    render() {
        return (
        <div>
            <Header/>
            <RandomPlanet/>

            <div className="row mb2">
                <div className="col-md-6">
                    <ItemList/>
                </div>
                <div className="col-md-6">
                    <PersonDetails/>
                </div>
            </div>
        </div>
        )
    }   
};