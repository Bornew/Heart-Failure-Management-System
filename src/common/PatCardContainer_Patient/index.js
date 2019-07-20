import React, {Component} from 'react';
import {
  CardContainer,
} from './style.js';
import storage from '../../storage';
import PatCard_Patient from './PatCard_Patient';

class PatCardContainer_Patient extends Component {
  render() {
    return (
        <CardContainer>
          {
            <PatCard_Patient/>
          }
        </CardContainer>
    );
  }
}

export default PatCardContainer_Patient;