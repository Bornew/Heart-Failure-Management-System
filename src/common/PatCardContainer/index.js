import React, {Component} from 'react';
import {
  CardContainer,
} from './style.js';
import PatCard from './PatCard';
import storage from '../../storage';

class PatCardContainer extends Component {
  componentWillMount(){
    storage.registerComponent('patcardContainer', this);
  }
  render() {
    return (
        <CardContainer>
          {
            storage.patientList.map((patient) => {
              if (patient.patient_id.includes(storage.searchInput)) {
                console.log(patient.patient_id);
                return <PatCard info={patient}/>;
              }
            })
          }
        </CardContainer>
    );
  }
}

export default PatCardContainer;