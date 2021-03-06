import React from 'react';
import ItemDetails, { Record } from '../item-details';
import {withSwapiService} from '../hoc-helpers';



const PlanetDetails = (props) => {

    return (
        <ItemDetails {...props}>
        <Record field="name" label="Name"/>
        <Record field="population" label="Population"/>
        <Record field="rotationPariod" label="Rotation Period"/>
        </ItemDetails> 
    )
}

const mapMathodsToProps = (swapiService) => {
    return {
        getData: swapiService.getPlanet,
        getImageUrl: swapiService.getPlanetImage
    }
}

export default withSwapiService(PlanetDetails, mapMathodsToProps);