import React, { Component } from 'react';

import Row from '../row';
import {
    PersonList,
    PersonDetails
} from '../ws-components';

export default class PeoplePage extends Component {
    state = {
        selectedItem : null
    };

    onItemSelected = (selectedItem) => {
        this.setState({selectedItem});
    };
   

    render() {
        return (
            <Row left={<PersonList onItemSelected={this.onItemSelected}/>} 
            right={<PersonDetails itemId={this.state.selectedItem}/>}
            />
        )
    }
}