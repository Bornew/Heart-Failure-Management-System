import React, {Component} from 'react';
import {
  CardHeader, InfoContent, ButtonWrapper, MessageButton, InfoDiret,
  BasicInfoWrapper, HealthInfoWrapper, HealthInfoDirect, HealthInfoContent,
  InfoWrapper, Line, BasicInfo, Name, Avatar, IdWrapper, Card, Id,
  MedicineWrapper, ReserveButton,
} from './style';
import '../../../statics/iconfont/iconfont.css';
import storage from '../../../storage';

class PatCard extends Component {
  state = {
    medicines: [],
    lowPressures: [],
    highPressures: [],
    heartrates: []
  };
  handleClick = (state) => {
    storage.sendMessage(
        {
          patientID: this.props.info.patient_id,
        },
    );
  };
  componentWillMount() {

    storage.fetchLowPressureData(this.props.info.patient_id, res=>{
      console.log(res);
      this.setState({
        lowPressures: res.map(d => d.low_pressure),
      })
      console.log(this.state.lowPressures);
    });
    storage.fetchHighPressureData(this.props.info.patient_id, res=>{
      console.log(res);
      this.setState({
        highPressures: res.map(d => d.high_pressure),
      })
      console.log(this.state.highPressures);
    });
    storage.fetchHeartrateData(this.props.info.patient_id, res=>{
      console.log(res);
      this.setState({
        heartrates: res.map(d => d.heartrate),
      })
      console.log(this.state.highPressures);
    });
    storage.fetchMedicineData(this.props.info.patient_id, res=>{
      this.setState({
        medicines: res.map(d => d.medicine_name),
      })
    });
  }
  render() {
    console.log(this.props);
    const {
      name, gender, patient_id, password,
      birthday, sick_time, doctor_id,
      tel, email, blood_type,
    } = this.props.info;
    return (
        <Card>
          <CardHeader>
            <Avatar
                imgUrl="https://user-images.githubusercontent.com/37944486/57620562-b6ef9700-75bb-11e9-8c0e-4c47d8933b3c.jpg"></Avatar>
            <IdWrapper>
              <Name>
                {
                  name
                }
              </Name>
              <Id>
                ID: {patient_id}
              </Id>
            </IdWrapper>
          </CardHeader>
          <Line/>
          <InfoWrapper>
            <BasicInfoWrapper>
              <BasicInfo>
                <InfoDiret>性别</InfoDiret>
                <InfoDiret>年龄</InfoDiret>
                <InfoDiret>电话</InfoDiret>
                <InfoDiret>邮箱</InfoDiret>
                <InfoDiret>入院</InfoDiret>
              </BasicInfo>
              <BasicInfo>
                <InfoContent>{gender}</InfoContent>
                <InfoContent>{birthday}</InfoContent>
                <InfoContent>{tel}</InfoContent>
                <InfoContent>{email}</InfoContent>
                <InfoContent>{sick_time}</InfoContent>
              </BasicInfo>
            </BasicInfoWrapper>
            <HealthInfoWrapper>
              <HealthInfoDirect>高压</HealthInfoDirect>
              <HealthInfoDirect>低压</HealthInfoDirect>
              <HealthInfoDirect>心率</HealthInfoDirect>
            </HealthInfoWrapper>
            <HealthInfoWrapper>
              <HealthInfoContent>{this.state.highPressures[0]} mmHg</HealthInfoContent>
              <HealthInfoContent>{this.state.lowPressures[0]} mmHg</HealthInfoContent>
              <HealthInfoContent>{this.state.heartrates[0]} bpm</HealthInfoContent>
            </HealthInfoWrapper>
          </InfoWrapper>
          <MedicineWrapper>
            <BasicInfo>
              <InfoDiret>药物</InfoDiret>
            </BasicInfo>
            <BasicInfo>
              <InfoContent>{this.state.medicines.join(', ')}</InfoContent>
            </BasicInfo>
          </MedicineWrapper>
          <ButtonWrapper>
            <ReserveButton onClick={() => this.handleClick('reserve')}>
              <i className='iconfont iconyuyue'></i>约诊</ReserveButton>
            <MessageButton onClick={() => this.handleClick('message')}>
              <i className='iconfont iconxiezi'></i>发信息</MessageButton>
          </ButtonWrapper>
        </Card>
    );
  }

}


export default PatCard;
