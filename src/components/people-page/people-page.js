import React, { Component } from 'react';

import './people-page.css';

import ItemList from '../item-list';
import ItemDetails from '../item-details';
import SwapiService from '../../service/swapiservice';
import ErrorBoundary from '../error-boundary';
import Row from '../row';

export default class PeoplePage extends Component {

    swapiService = new SwapiService();

    state = {
        selectedPerson: 3
    }

    onPersonSelected = (selectedPerson) => {
        this.setState({ selectedPerson });
    };

    render() {

        const itemList = ( 
                    <ItemList 
                    onItemSelected={this.onPersonSelected}
                    getData={this.swapiService.getAllPeople}>
                    { (i) => (
                        `${i.name} (${i.gender}, ${i.birthYear})`
                        )}
                    </ItemList>
                    );

        return (
        <ErrorBoundary>
            <Row left={itemList}
            right={<ItemDetails personId={this.state.selectedPerson}/>}>
            </Row>
        </ErrorBoundary>    
                 
        );   
    };
}