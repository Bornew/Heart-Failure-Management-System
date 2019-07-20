import React, {Component} from 'react';
import {MessageWrapper, Space, Space2} from './style';
import NameListContainer from './NameListContainer';
import MedicalOrderContainer from './MedicalOrderContainer';
import ChatContainer from './ChatContainer';
import storage from '../../storage.js';

class MessageContainer extends Component {
  render() {
    return (
        <MessageWrapper>
          {storage.user === 'doctor' ? <NameListContainer></NameListContainer> :
              <Space></Space>}
          <MedicalOrderContainer/>
          {storage.user === 'patient' ? <Space2></Space2> :null}
          <ChatContainer></ChatContainer>
        </MessageWrapper>
    );
  }
}

export default MessageContainer;