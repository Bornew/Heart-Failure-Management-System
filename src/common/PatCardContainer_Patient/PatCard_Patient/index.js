import React, {Component} from 'react';
import {
  CardHeader, InfoContent, ButtonWrapper, MessageButton, InfoDiret,
  BasicInfoWrapper,
  InfoWrapper, Line, BasicInfo, Name, Avatar, IdWrapper, Card, Id,
  CardWrapper,
  DataContent,
  BasicInfoResult,
  BasicInfoCard, TitleWrapper, ReserveButton, MedicalHeader, MedicalWrapper,
  MedicalContent, Input,
  SelectMedicines, OptionMedicine, MedicineInfoWrapper,
  CancelButton, ConfirmButton, SubmitButtonWrapper, MedicineInfoCard,
  MedicinesWrapper,
  MedicineInfo, ConfirmAddButton, CancelAddButton, MedicineDeletableWrapper,
  DeleteButton,
} from './style';
import '../../../statics/iconfont/iconfont.css';
import storage from '../../../storage';

class PatCard_Patient extends Component {
  state = {
    medicines: [],
    lowPressures: [],
    highPressures: [],
    heartrates: [],
    editable: false,
    medicineEditable: false,
    medicineDeletable: false,
    allowDeleteMedicine: '',
  };
  cache = {
    lowPressure: 0,
    highPressure: 0,
    heartrate: 0,
    medicine: '',
  };
  handleEditable = (e) => {
    if (e) {
      this.setState({
        editable: true,
      });
    }
    else {
      this.setState({
        editable: false,
      });
    }
  };
  handleMedicineEditable = (e) => {
    if (e) {
      this.setState({
        medicineEditable: true,
      });
    }
    else {
      this.setState({
        medicineEditable: false,
      });
    }
  };
  handleMedicineDeletable = (e, medicine) => {
    if (e) {
      console.log(this.state.allowDeleteMedicine);
      this.setState({
        medicineDeletable: true,
        allowDeleteMedicine: medicine,
      });
    }
    else {
      console.log(this.state.allowDeleteMedicine);
      this.setState({
        medicineDeletable: false,
        allowDeleteMedicine: '',
      });
    }
  };
  handleEditMedicine = (e) => {
    this.handleMedicineEditable(true);
    console.log(e.target.value);
    this.cache.medicine = e.target.value;
  };
  handleInputChange = (e, event) => {
    this.handleEditable(true);
    switch (event) {
      case 'heartrate': {
        this.cache.heartrate = e.target.value;
        console.log(this.cache.heartrate);
        break;
      }
      case 'lowpressure': {
        this.cache.lowPressure = e.target.value;
        console.log(this.cache.lowPressure);
        break;
      }
      case 'highpressure': {
        this.cache.highPressure = e.target.value;
        console.log(this.cache.highPressure);
        break;
      }
        break;
    }
  };

  handleSubmitChange = () => {
    storage.handleInfoChange(this.cache.heartrate, this.cache.highPressure,
        this.cache.lowPressure, () => {this.handleEditable(false);});
  };

  handleDeleteMedicine = (medicine) => {
    console.log(medicine);
    storage.handleMedicineNameDelete(medicine, () => {
      console.log(this.state.medicineDeletable);
      this.handleMedicineDeletable(false, '');
      this.refreshPage();
    });
  };

  handleCancel = () => {
    this.handleEditable(false);
  };

  handleCancelAddMedicine = () => {
    this.handleMedicineEditable(false);
  };

  handleAddMedicine = () => {
    storage.handleMedicineInsert(this.cache.medicine, () => {
      this.handleMedicineEditable(false);
      this.refreshPage();
    });
  };
  refreshPage = () => {
    storage.fetchLowPressureData(storage.patientId, res => {
      console.log(res);
      this.setState({
        lowPressures: res.map(d => d.low_pressure),
      });
    });
    storage.fetchHighPressureData(storage.patientId, res => {
      console.log(res);
      this.setState({
        highPressures: res.map(d => d.high_pressure),
      });
    });
    storage.fetchHeartrateData(storage.patientId, res => {
      console.log(res);
      this.setState({
        heartrates: res.map(d => d.heartrate),
      });
    });
    storage.fetchMedicineData(storage.patientId, res => {
      console.log(res);
      this.setState({
        medicines: res.map(d => d.medicine_name),
      });
      console.log(this.state.medicines);
    });
  };

  componentWillMount() {
    storage.registerComponent('Patcard_Patient', this);
    storage.fetchLowPressureData(storage.patientId, res => {
      console.log(res);
      this.setState({
        lowPressures: res.map(d => d.low_pressure),
      });
    });
    storage.fetchHighPressureData(storage.patientId, res => {
      console.log(res);
      this.setState({
        highPressures: res.map(d => d.high_pressure),
      });
    });
    storage.fetchHeartrateData(storage.patientId, res => {
      console.log(res);
      this.setState({
        heartrates: res.map(d => d.heartrate),
      });
    });
    storage.fetchMedicineData(storage.patientId, res => {
      console.log(res);
      this.setState({
        medicines: res.map(d => d.medicine_name),
      });
      console.log(this.state.medicines);
    });
  }

  getMedicineUI = () => {
    return (
        <MedicinesWrapper>
          {
            this.state.medicines.map((medicine) => (
                    <MedicineDeletableWrapper>
                      <MedicineInfo onClick={() => this.handleMedicineDeletable(true,
                          medicine)}>
                        {medicine}
                      </MedicineInfo>
                      {this.state.medicineDeletable && this.state.allowDeleteMedicine === medicine ? <DeleteButton
                          onClick={()=>this.handleDeleteMedicine(
                              medicine)}>X</DeleteButton> : null}
                    </MedicineDeletableWrapper>
                ),
            )}
        </MedicinesWrapper>
    );
  };
  getDoctorInfoUI = () => {
    if (storage.doctorInfo.name === '0') {
      return (
          <MedicalWrapper>
            <MedicalHeader>
              <IdWrapper>
                <Name>
                  温馨提示
                </Name>
              </IdWrapper>
            </MedicalHeader>
            <Line/>
            <MedicalContent>
              您还没有主治医生哦～
              快联系医生添加您吧！
            </MedicalContent>
          </MedicalWrapper>
      );
    }
    else {
      return (
          <MedicalWrapper>
            <MedicalHeader>
              <Avatar
                  imgUrl="https://user-images.githubusercontent.com/37944486/57620562-b6ef9700-75bb-11e9-8c0e-4c47d8933b3c.jpg"/>
              <IdWrapper>
                <Name>
                  {storage.doctorInfo.name} 医生
                </Name>
              </IdWrapper>
            </MedicalHeader>
            <Line/>
            <MedicalContent>
              <BasicInfoCard>
                <BasicInfo>
                  <InfoDiret>性别</InfoDiret>
                  <InfoDiret>年龄</InfoDiret>
                  <InfoDiret>职龄</InfoDiret>
                  <InfoDiret>电话</InfoDiret>
                  <InfoDiret>邮箱</InfoDiret>
                </BasicInfo>
                <BasicInfoResult>
                  <DataContent>{storage.doctorInfo.gender === 1
                      ? '男'
                      : '女'}</DataContent>
                  <DataContent>{storage.doctorInfo.birthday} 岁</DataContent>
                  <DataContent>{storage.doctorInfo.professional_time}年</DataContent>
                  <DataContent>{storage.doctorInfo.tel}</DataContent>
                  <DataContent>{storage.doctorInfo.email}</DataContent>
                </BasicInfoResult>
              </BasicInfoCard>
            </MedicalContent>
            <ButtonWrapper>
              <ReserveButton>
                <i className='iconfont iconyuyue'></i>约诊</ReserveButton>
              <MessageButton>
                <i className='iconfont iconxiezi'></i>发信息</MessageButton>
            </ButtonWrapper>
          </MedicalWrapper>
      );
    }
  };

  render() {
    return (
        <CardWrapper>
          <Card>
            <CardHeader>
              <IdWrapper>
                <Name>
                  {storage.patientInfo.name}
                </Name>
                <Id>
                  {/*ID: {patient_id}*/}
                  ID: {storage.patientInfo.patient_id}
                </Id>
              </IdWrapper>
            </CardHeader>
            <Line/>
            <InfoWrapper>
              <TitleWrapper>基本信息</TitleWrapper>
              <BasicInfoWrapper>
                <BasicInfoCard>
                  <BasicInfo>
                    <InfoDiret>性别</InfoDiret>
                    <InfoDiret>生日</InfoDiret>
                    <InfoDiret>入院日期</InfoDiret>
                  </BasicInfo>
                  <BasicInfo>
                    <InfoContent>{storage.patientInfo.gender === 1
                        ? '男'
                        : '女'}</InfoContent>
                    <InfoContent>{storage.patientInfo.birthday}</InfoContent>
                    <InfoContent>{storage.patientInfo.sick_time}</InfoContent>
                  </BasicInfo>
                </BasicInfoCard>
                <BasicInfoCard>
                  <BasicInfo>
                    <InfoDiret>电话</InfoDiret>
                    <InfoDiret>邮箱</InfoDiret>
                  </BasicInfo>
                  <BasicInfo>
                    <DataContent>{storage.patientInfo.tel}</DataContent>
                    <DataContent>{storage.patientInfo.email}</DataContent>
                  </BasicInfo>
                </BasicInfoCard>
              </BasicInfoWrapper>
              <TitleWrapper>
                健康状况
                {this.showSubmitButton(this.state.editable)}
              </TitleWrapper>
              <BasicInfoWrapper>
                <BasicInfoCard>
                  <BasicInfo>
                    <InfoDiret>心率</InfoDiret>
                    <InfoDiret>高血压</InfoDiret>
                    <InfoDiret>低血压</InfoDiret>
                  </BasicInfo>
                  <BasicInfoResult>
                    <InfoContent>
                      <Input value={this.state.editable
                          ? this.cache.heartrate
                          : this.state.heartrates[0]}
                             onChange={(e) => this.handleInputChange(e,
                                 'heartrate')}/> bpm
                    </InfoContent>
                    <InfoContent>
                      <Input value={this.state.editable
                          ? this.cache.highPressure
                          : this.state.highPressures[0]}
                             onChange={(e) => this.handleInputChange(e,
                                 'highpressure')}/> mmHg
                    </InfoContent>
                    <InfoContent>
                      <Input value={this.state.editable
                          ? this.cache.lowPressure
                          : this.state.lowPressures[0]}
                             onChange={(e) => this.handleInputChange(
                                 e,
                                 'lowpressure')}/> mmHg
                    </InfoContent>
                  </BasicInfoResult>
                </BasicInfoCard>
                <BasicInfoCard>
                  <BasicInfo>
                    <InfoDiret>最近</InfoDiret>
                    <InfoDiret>最近</InfoDiret>
                    <InfoDiret>最近</InfoDiret>
                  </BasicInfo>
                  <BasicInfoResult>
                    <DataContent>123 134 112 132 123 112 120</DataContent>
                    <DataContent>123 134 112 132 123 112 120</DataContent>
                    <DataContent>102 134 112 134 123 110 102</DataContent>
                  </BasicInfoResult>
                </BasicInfoCard>
              </BasicInfoWrapper>
              <MedicineInfoWrapper>
                <MedicineInfoCard>
                  <TitleWrapper>
                    药物信息
                    {this.showAddButton(
                        this.state.medicineEditable)}</TitleWrapper>
                </MedicineInfoCard>
                <MedicineInfoCard>
                  {this.getMedicineUI()}
                  <SelectMedicines onChange={this.handleEditMedicine}>
                    <OptionMedicine value='1'>
                      美托洛尔
                    </OptionMedicine>
                    <OptionMedicine value='2'>
                      卡维地洛
                    </OptionMedicine>
                    <OptionMedicine value='3'>
                      塞利洛尔
                    </OptionMedicine>
                    <OptionMedicine value='4'>
                      艾司洛尔
                    </OptionMedicine>
                    <OptionMedicine value='5'>
                      拉贝洛尔
                    </OptionMedicine>
                    <OptionMedicine value='6'>
                      塞利洛尔
                    </OptionMedicine>
                    <OptionMedicine value='7'>
                      阿罗洛尔
                    </OptionMedicine>
                    <OptionMedicine value='8'>
                      阿替洛尔
                    </OptionMedicine>
                    <OptionMedicine value='9'>
                      普萘洛尔
                    </OptionMedicine>
                    <OptionMedicine value='10'>
                      塞利洛尔
                    </OptionMedicine>
                    <OptionMedicine value='11'>
                      倍他洛尔
                    </OptionMedicine>
                    <OptionMedicine value='12'>
                      尼群洛尔
                    </OptionMedicine>
                    <OptionMedicine value='13'>
                      吲哚洛尔
                    </OptionMedicine>
                    <OptionMedicine value='14'>
                      索他洛尔
                    </OptionMedicine>
                  </SelectMedicines>
                </MedicineInfoCard>
              </MedicineInfoWrapper>
            </InfoWrapper>
          </Card>
          {this.getDoctorInfoUI()}
        </CardWrapper>
    );
  }

  showSubmitButton = (show) => {
    if (show) {
      return (
          <SubmitButtonWrapper>
            <CancelButton
                onClick={this.handleCancel}>取消</CancelButton>
            <ConfirmButton
                onClick={this.handleSubmitChange}>确认</ConfirmButton>
          </SubmitButtonWrapper>
      );
    }
  };

  showAddButton = (show) => {
    if (show) {
      return (
          <SubmitButtonWrapper>
            <CancelAddButton
                onClick={this.handleCancelAddMedicine}>取消添加</CancelAddButton>
            <ConfirmAddButton
                onClick={this.handleAddMedicine}>添加药物</ConfirmAddButton>
          </SubmitButtonWrapper>
      );
    }
  };

}

export default PatCard_Patient;
