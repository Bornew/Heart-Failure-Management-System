import React, {Component} from 'react';
import {
  MedicalWrapper, MedicalHeader, MedicalContent, DateBox, MedicalSender,
  ButtonArea,
  MedicalBox, Button,
} from './style';
import storage from '../../../storage';

class MedicalOrderContainer extends Component {
  state = {
    id: 0,
    medicalOrderInfo: '',
  };

  render() {
    const medicalOrderInfo = storage.medicalOrderList[0];
    return (
        <MedicalWrapper>
          <MedicalHeader>医嘱箱</MedicalHeader>
          <MedicalContent>
            <DateBox>12/06/2019</DateBox>
            <MedicalBox>
              DIP视频
            </MedicalBox>
            <DateBox>12/06/2019</DateBox>
            <MedicalBox>
              iOS视频
            </MedicalBox>
            <DateBox>12/06/2019</DateBox>
            <MedicalBox>
              通核论文
            </MedicalBox>
          </MedicalContent>
          <MedicalSender placeholder='| 写医嘱'>
          </MedicalSender>
          <ButtonArea>
            <Button>发送</Button>
          </ButtonArea>
        </MedicalWrapper>
    );
  }
}

export default MedicalOrderContainer;