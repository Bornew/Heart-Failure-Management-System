import React, {Component} from 'react';
import storage from '../../storage';
import {
  Background, LoginPanel, ContentPanel, LeftPanel, TitlePanel, Item,
  RadioButton, RadioButtonLabel, Wrapper, SubTitlePanel,
  SubTitlePanel2, CheckId, Input, SubContent, RightPanel, Button, ChangeMode,
  LoginPanelContent, RadioButton2, RadioButtonLabel2, ButtonWrapper,
  ChangeModeLabel,
} from './style';

class Login extends Component {
  componentWillMount() {
    storage.registerComponent('login', this);
  }

  constructor(props) {
    super(props);
    this.state = {
      user: 'doctor',
      name: '',
      login: false,
      id: '',
      password: '',
      gender: 'male',
      birthday: '',
      professionalTime: '',
      tel: '',
      email: '',
      bloodType: '',
      sickTime: '',
    };
  }

  render() {
    return (
        <Background className={storage.page === 'login'}>
          <LoginPanel>
            <TitlePanel>
              杭州第三人民医院
            </TitlePanel>
            <LeftPanel>
              <SubContent>
                <SubTitlePanel>您的身份是</SubTitlePanel>
                <Wrapper>
                  <Item>
                    <RadioButton
                        type="radio"
                        value="doctor"
                        checked={this.state.user === 'doctor'}
                        onClick={this.handleSelectChange}
                    />
                    <RadioButtonLabel/>
                    <div>医生</div>
                  </Item>
                  <Item>
                    <RadioButton
                        type="radio"
                        value="patient"
                        checked={this.state.user === 'patient'}
                        onClick={this.handleSelectChange}
                    />
                    <RadioButtonLabel/>
                    <div>患者</div>
                  </Item>
                </Wrapper></SubContent>
            </LeftPanel>
            {this.getRegisterList(this.state.user, this.state.login)}
            {this.getButton(this.state.user, this.state.login)}
          </LoginPanel>
        </Background>
    );

  }

  getRegisterList = (user, login) => {
    //患者注册
    if (user === 'patient' && login === false) {
      return (
          <LoginPanel>
            <ContentPanel>
              <LeftPanel>
                <SubContent>
                  <SubTitlePanel>姓名</SubTitlePanel>
                  <Input onChange={(e) => this.handleInputChange(e, 'name')}/>
                </SubContent>
                <SubContent>
                  <SubTitlePanel>ID(不可重复）</SubTitlePanel>
                  <Input onChange={(e) => this.handleInputChange(e, 'id')}/>
                </SubContent>
                <SubContent>
                  <SubTitlePanel>出生日期</SubTitlePanel>
                  <Input
                      onChange={(e) => this.handleInputChange(e, 'birthday')}/>
                </SubContent>
                <SubContent>
                  <SubTitlePanel>血型</SubTitlePanel>
                  <Input
                      onChange={(e) => this.handleInputChange(e, 'bloodType')}/>
                </SubContent>
                <SubContent>
                  <SubTitlePanel>过往病史</SubTitlePanel>
                  <Input onChange={(e) => this.handleInputChange(e,
                      'pastDiseases')}/>
                </SubContent>
              </LeftPanel>
              <RightPanel>
                <CheckId>
                  <SubTitlePanel2>性别</SubTitlePanel2>
                  <Wrapper>
                    <Item>
                      <RadioButton2
                          type="radio"
                          value="male"
                          checked={this.state.gender === 'male'}
                          onClick={this.handleChangeGender}
                      />
                      <RadioButtonLabel2/>
                      <div>男</div>
                    </Item>
                    <Item>
                      <RadioButton
                          type="radio"
                          value="female"
                          checked={this.state.gender === 'female'}
                          onClick={this.handleChangeGender}
                      />
                      <RadioButtonLabel/>
                      <div>女</div>
                    </Item>
                  </Wrapper>
                </CheckId>
                <SubContent>
                  <SubTitlePanel2>密码</SubTitlePanel2>
                  <Input
                      onChange={(e) => this.handleInputChange(e, 'password')}/>
                </SubContent>
                <SubContent>
                  <SubTitlePanel2>入院日期</SubTitlePanel2>
                  <Input
                      onChange={(e) => this.handleInputChange(e, 'sickTime')}/>
                </SubContent>
                <SubContent>
                  <SubTitlePanel2>电话</SubTitlePanel2>
                  <Input onChange={(e) => this.handleInputChange(e, 'tel')}/>
                </SubContent>
                <SubContent>
                  <SubTitlePanel2>邮箱</SubTitlePanel2>
                  <Input onChange={(e) => this.handleInputChange(e, 'email')}/>
                </SubContent>
              </RightPanel>
            </ContentPanel>
          </LoginPanel>
      );
    }
    //医生注册
    else if (user === 'doctor' && login === false) {
      return (
          <LoginPanel>
            <ContentPanel>
              <LeftPanel>
                <SubContent>
                  <SubTitlePanel>姓名</SubTitlePanel>
                  <Input onChange={(e) => this.handleInputChange(e, 'name')}/>
                </SubContent>
                <SubContent>
                  <SubTitlePanel>ID(不可重复）</SubTitlePanel>
                  <Input onChange={(e) => this.handleInputChange(e, 'id')}/>
                </SubContent>
                <SubContent>
                  <SubTitlePanel>出生日期</SubTitlePanel>
                  <Input
                      onChange={(e) => this.handleInputChange(e, 'birthday')}/>
                </SubContent>
                <SubContent>
                  <SubTitlePanel>电话</SubTitlePanel>
                  <Input onChange={(e) => this.handleInputChange(e, 'tel')}/>
                </SubContent>
              </LeftPanel>
              <RightPanel>
                <CheckId>
                  <SubTitlePanel2>性别</SubTitlePanel2>
                  <Wrapper>
                    <Item>
                      <RadioButton2
                          type="radio"
                          value="male"
                          checked={this.state.gender === 'male'}
                          onClick={this.handleChangeGender}
                      />
                      <RadioButtonLabel2/>
                      <div>男</div>
                    </Item>
                    <Item>
                      <RadioButton2
                          type="radio"
                          value="female"
                          checked={this.state.gender === 'female'}
                          onClick={this.handleChangeGender}
                      />
                      <RadioButtonLabel2/>
                      <div>女</div>
                    </Item>
                  </Wrapper>
                </CheckId>
                <SubContent>
                  <SubTitlePanel2>密码</SubTitlePanel2>
                  <Input
                      onChange={(e) => this.handleInputChange(e, 'password')}/>
                </SubContent>
                <SubContent>
                  <SubTitlePanel2>入职日期</SubTitlePanel2>
                  <Input onChange={(e) => this.handleInputChange(e,
                      'professionalTime')}/>
                </SubContent>
                <SubContent>
                  <SubTitlePanel2>邮箱</SubTitlePanel2>
                  <Input onChange={(e) => this.handleInputChange(e, 'email')}/>
                </SubContent>
              </RightPanel>
            </ContentPanel>
          </LoginPanel>
      );
    }
    //患者登录
    else if (login === true) {
      return (
          <LoginPanel>
            <ContentPanel>
              <LoginPanelContent>
                <SubContent>
                  <SubTitlePanel2>ID</SubTitlePanel2>
                  <Input onChange={(e) => this.handleInputChange(e, 'id')}/>
                </SubContent>
                <SubContent>
                  <SubTitlePanel2>密码</SubTitlePanel2>
                  <Input
                      onChange={(e) => this.handleInputChange(e, 'password')}/>
                </SubContent>
              </LoginPanelContent>
            </ContentPanel>
          </LoginPanel>
      );
    }
  };

  //用来获取不同的button样式
  getButton = (user, login) => {
    if (login === true) {
      return (
          <div>
            <ButtonWrapper>
              <Button onClick={this.handleLogged}>登录</Button>
            </ButtonWrapper>
            <ChangeModeLabel>还没有账号？
              <ChangeMode onClick={this.handleRegister}>立即注册</ChangeMode>
            </ChangeModeLabel>
          </div>
      );
    }
    else if (login === false) {
      return (
          <div>
            <ButtonWrapper>
              <Button onClick={this.submitRegister}>注册</Button>
            </ButtonWrapper>
            <ChangeModeLabel>已有账号？
              <ChangeMode onClick={this.handleLoginChange}>立即登录</ChangeMode>
            </ChangeModeLabel>
          </div>
      );
    }
  };
  //用来分辨是医生还是患者
  handleSelectChange = (e) => {
    this.setState({
      user: e.target.value,
    });
    console.log(this.state.user);
  };

  handleChangeGender = (e) => {
    this.setState({
      gender: e.target.value,
    });
  };
  //用来切换成登录模式
  handleLoginChange = () => {
    this.setState({
      login: true,
    });
  };
  //用来切换前端页面为注册模式
  handleRegister = () => {
    this.setState({
      login: false,
    });
  };
  submitRegister = () => {
    if (this.state.user === 'patient') {
      storage.handlePatientRegisterSubmit(
          this.state.name, this.state.gender === 'male' ? 1 : 0, this.state.id,
          this.state.password, this.state.birthday, this.state.sickTime,
          this.state.bloodType, this.state.tel,
          this.state.email,
          (success) => {
            if (success == 1) {
              this.setState({
                login: true,
              });
            }
          })
      ;
    }
    else if (this.state.user === 'doctor') {
      storage.handleDoctorRegisterSubmit(
          this.state.name, this.state.gender === 'male' ? 1 : 0, this.state.id,
          this.state.password, this.state.birthday, this.state.professionalTime,
          this.state.tel,
          this.state.email,
          (success) => {
            if (success == 1) {
              this.setState({
                login: true,
              });

            }
          });
    }
  };

  handleLogged = () => {
    //控制是否log in 首先确定是谁（医生or患者）在登录 然后确定是否登录成功。
    storage.handleUserChange(this.state.user);
    storage.handleLogged(this.state.id, this.state.password);
    // storage.handleSwitch('home');
  };

  handleInputChange = (e, event) => {
    switch (event) {
      case 'name': {
        this.setState({
          name: e.target.value,
        });
        break;
      }
      case 'id': {
        this.setState({
          id: e.target.value,
        });
        console.log(this.state.id);
        break;
      }
      case 'password': {
        this.setState({
          password: e.target.value,
        });
        console.log(this.state.password);
        break;
      }
      case 'birthday': {
        this.setState({
          birthday: e.target.value,
        });
        break;
      }
      case 'professionalTime': {
        this.setState({
          professionalTime: e.target.value,
        });
        break;
      }
      case 'sickTime': {
        this.setState({
          sickTime: e.target.value,
        });
        break;
      }
      case 'tel': {
        this.setState({
          tel: e.target.value,
        });
        break;
      }
      case 'email': {
        this.setState({
          email: e.target.value,
        });
        break;
      }
      case 'bloodType': {
        this.setState({
          bloodType: e.target.value,
        });
        break;
      }
      default:
        break;
    }

    console.log(this.state.id);
  };
}

export default Login;


