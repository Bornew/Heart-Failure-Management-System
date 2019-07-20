import React, {Component} from 'react';
import {NameListWrapper, NameCard, Avatar} from './style';
import storage from '../../../storage';

class NameListContainer extends Component {
  render() {
    return (
        <NameListWrapper>
          {
            storage.patientList.map((patient, index) => {
              return (
                  <NameCard className={index===storage.chatId? 'active':''}>
                    <Avatar imgUrl="https://user-images.githubusercontent.com/37944486/57620562-b6ef9700-75bb-11e9-8c0e-4c47d8933b3c.jpg"></Avatar>
                    {patient.name}
                  </NameCard>);
            })
          }

        </NameListWrapper>
    );
  }

}

export default NameListContainer;

