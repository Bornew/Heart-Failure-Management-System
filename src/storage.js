import {Component} from 'react';

class Storage {
  constructor() {
    console.log('construct');

  }

  refreshPatientList = () => {
    console.log('yeah');
    fetch(`http://127.0.0.1:5000/patientlist/${this.doctorId}`).then((res) =>
        res.json(),
    ).then((res) => {
      this.patientList = res;
      console.log(this.patientList);
      this.refreshComponent('app');
    });
  };

  fetchPatientInfo = () => {
    //根据病人的id获取病人的信息
    fetch(`http://127.0.0.1:5000/patientinfo/${this.patientId}`).then((res) =>
        res.json(),
    ).then((res) => {
      this.patientInfo = res[0];
      console.log(this.patientInfo);
      this.refreshComponent('app');
    });
  };

  fetchPatientDoctorInfo = () => {
    fetch(`http://127.0.0.1:5000/patientdoctorinfo/${this.patientId}`).
        then((res) =>
            res.json(),
        ).
        then((res) => {
          this.doctorInfo = res[0];
        });
  };

  fetchDoctorInfo = () => {
    console.log('id' + this.doctorId);
    //根据医生的id获取医生的信息
    fetch(`http://127.0.0.1:5000/doctorinfo/${this.doctorId}`).then((res) =>
        res.json(),
    ).then((res) => {
      this.doctorInfo = res[0];
      console.log(this.doctorInfo);
      this.refreshComponent('app');
    });
  };
  //获取病人的密码
  fetchPatientPassword = (patient_id, password) => {
    fetch(`http://127.0.0.1:5000/patientpassword`, {
      method: 'POST',
      body: JSON.stringify({
        id: patient_id,
        password: password,
      }),
    }).
        then(res => res.text()).
        then(res => {
          console.log(res);
          if (res == '1') {
            this.logged = true;
            this.user = 'patient';
            this.patientId = patient_id;
            this.page = 'home';
            this.fetchPatientDoctorInfo();
            this.fetchPatientInfo();
          }
          else {
            alert('账号或密码有误，请检查输入');
          }
        });
  };

  //获取医生的密码 然后验证是否正确
  fetchDoctorPassword = (doctor_id, password) => {
    fetch(`http://127.0.0.1:5000/doctorpassword`, {
      method: 'POST',
      body: JSON.stringify({
        id: doctor_id,
        password: password,
      }),
    }).
        then(res => res.text()).
        then(res => {
          console.log(res);
          if (res === '1') {

            this.logged = true;
            this.user = 'doctor';
            this.doctorId = doctor_id;
            this.page = 'home';
            this.refreshPatientList();
            this.fetchDoctorInfo();
          }
          else {
            alert('账号或密码有误，请检查输入');
          }
        });
  };

  //获取药物信息
  fetchMedicineData = (patient_id, callback) => {
    fetch(`http://127.0.0.1:5000/medicineInfo/${patient_id}`).
        then(res => res.json()).
        then(res => {
          console.log(res);
          if (callback instanceof Function)
            callback(res);
        });
  };

  fetchHighPressureData = (patient_id, callback) => {
    fetch(`http://127.0.0.1:5000/highpressurelist/${patient_id}`).
        then(res => res.json()).
        then(res => {
          if (callback instanceof Function)
            callback(res);
        });
  };
  fetchLowPressureData = (patient_id, callback) => {
    fetch(`http://127.0.0.1:5000/lowpressurelist/${patient_id}`).
        then(res => res.json()).
        then(res => {
          if (callback instanceof Function)
            callback(res);
        });
  };

  fetchHeartrateData = (patient_id, callback) => {
    fetch(`http://127.0.0.1:5000/heartratelist/${patient_id}`).
        then(res => res.json()).
        then(res => {
          if (callback instanceof Function)
            callback(res);
        });
  };

  handleInputChange = (e) => {
    this.searchInput = e;
    console.log(e);
  };
  //region refresh
  components = {};

  handleMedicineInsert = (medicine, callback) =>{
    fetch(`http://127.0.0.1:5000/insertmedicine`, {
      method: 'POST',
      body: JSON.stringify({
        id: this.patientId,
        medicine: medicine
      }),
    }).
        then(res => res.text()).
        then(res => {
          console.log(res);
          if (res === '1') {
            alert('添加成功！');
            callback();
            //this.fetchPatientInfo();
            //this.refreshComponent('app');
          }
          else {

          }
        });
  }


  handleMedicineNameDelete = (medicine, callback) =>{
    console.log(medicine);
    fetch(`http://127.0.0.1:5000/deletemedicinebyname`, {
      method: 'POST',
      body: JSON.stringify({
        id: this.patientId,
        medicine_name: medicine
      }),
    }).
        then(res => res.text()).
        then(res => {
          console.log(res);
          if (res === '1') {
            callback();
            //this.fetchPatientInfo();
            //this.refreshComponent('app');
          }
          else {
          }
        });
  }

  handleInfoChange = (heartrate, highPressure, lowPressure, callback) => {
    let time = new Date();
    console.log(time);
    fetch(`http://127.0.0.1:5000/changeinfo`, {
      method: 'POST',
      body: JSON.stringify({
        time: `${time.getFullYear()}-${time.getMonth()}-${time.getDate()} ${time.getHours()}:${time.getMinutes()}:${time.getSeconds()}`,
        id: this.patientId,
        heartrate: heartrate,
        highpressure: highPressure,
        lowpressure: lowPressure,
      }),
    }).
        then(res => res.text()).
        then(res => {
          console.log(res);
          if (res === '1') {
            alert('修改成功！');
            callback();
            //this.fetchPatientInfo();
            this.refreshComponent('app');
          }
          else {

          }
        });
  };

  addPatient = (id, callback) => {
    console.log(id);
    console.log(this.doctorId);
    fetch(`http://127.0.0.1:5000/addpatient`, {
      method: 'POST',
      body: JSON.stringify({
        patient_id: id,
        doctor_id: this.doctorId,
      }),
    }).
        then(res => res.text()).
        then(res => {
          console.log(res);
          if (res === '1') {
            callback('1');
            this.refreshPatientList();
          }
          else {
            callback('0');
          }
        });
  };

  registerComponent(name, inst) {
    console.log('name' + name);
    if (!inst instanceof Component) return;
    this.components[name] = inst;
    if (inst.state === null) inst.setState({refresh: false});
    else if (inst.state.refresh === undefined) inst.setState({refresh: false});
  }

  unregisterComponent(name, inst) {
    if (this.components[name] === inst) this.components[name] = undefined;
  }

  refreshComponent(name) {
    const component = this.components[name];
    console.log(name);
    // console.log('component' + component===true);
    if (component) component.setState({refresh: !component.state.refresh});
  }

  //判断是否已经登录
  handleLogged = (id, password) => {
    if (this.user === 'patient') {
      this.fetchPatientPassword(id, password);

    }
    else if (this.user === 'doctor') {
      this.fetchDoctorPassword(id, password);
    }
  };
  handleLogout = () => {
    this.logged = false;
    this.user = 'patient';
    this.page = 'login';
    this.patientInfo = [];
    this.doctorInfo = [];
    this.patientId = '';
    this.doctorId = '';
    this.refreshComponent('app');
  };
  handlePatientRegisterSubmit = (
      name, gender, id, password, birthday, sickTime, bloodType, tel,
      email, callback) => {
    fetch(`http://127.0.0.1:5000/patientregister`, {
      method: 'POST',
      body: JSON.stringify({
        name: name,
        gender: gender,
        id: id,
        password: password,
        birthday: birthday,
        sickTime: sickTime,
        bloodType: bloodType,
        tel: tel,
        email: email,
      }),
    }).
        then(res => res.text()).
        then(res => {
          console.log(res);
          if (res === '1') {
            callback(1);
            // this.logged = true;
            // this.user = 'patient';
            // this.patientId = id;
            // this.page = 'home';
            // this.fetchPatientDoctorInfo();
            // this.fetchPatientInfo();
            this.refreshComponent('login');
          }
          else {
            alert('添加失败！请检查您的数据输入！');
          }
        });
  };

  handleDoctorRegisterSubmit = (
      name, gender, id, password, birthday, professionalTime, tel, email, callback) => {
    fetch(`http://127.0.0.1:5000/doctorregister`, {
      method: 'POST',
      body: JSON.stringify({
        name: name,
        gender: gender,
        id: id,
        password: password,
        birthday: birthday,
        professionalTime: professionalTime,
        tel: tel,
        email: email,
      }),
    }).
        then(res => res.text()).
        then(res => {
          console.log(res);
          if (res === '1') {
            callback(1);
            this.refreshComponent('login');
            // this.logged = true;
            // this.user = 'doctor';
            // this.doctorId = id;
            // this.page = 'home';
            // this.refreshPatientList();
            // this.fetchDoctorInfo();
          }
          else {
            alert('添加失败！请检查您的数据输入！');
          }
        });
  };

//endregion
  handleInputSubmit = () => {
    this.refreshComponent('patcardContainer');
  };
  handleUserChange = user => {
    this.user = user;
  };
  handleSwitch = page => {
    this.page = page;
    this.refreshComponent('app');
    // this.refresh();
    console.log(page);
  };
  // refresh = () => {
  //   this.app.setState({refresh: !this.app.state.refresh});
  // };
  sendMessage = (patient) => {
    this.handleSwitch('message');
    const index = this.chatList.indexOf(patient.patientID);
    // if (index !== -1)
    //   this.chatList.splice(index, 1);
    // this.chatList.splice(0, 0, patient.patientID);
    this.chatId = patient;
  };
  //下面三个用来控制当前页面是什么
  //logged表示是否已经登录
  //page表示页面的切换
  //user表示当前的用户是医生还是患者
  logged = false;
  page = 'login';
  user = 'doctor';
  patientId = '';
  doctorId = '';
  searchInput = '';
  chatId = -1;
  doctorInfo = [];
  patientInfo = [];
  patientList = [];
  chatList = ['13455', '1341', '13456'];
  medicalOrderList = [
    {
      patient_id: '1345577', medicalOrderInfo: [
        {time: '12/03/2019 12:30', info: '消息一'},
        {time: '12/03/2019 12:30', info: '消息一'},
        {time: '12/03/2019 12:30', info: '消息一'},
        {time: '12/03/2019 12:30', info: '消息一'}],
      patient_id: '1345576', medicalOrderInfo: [
        {time: '12/03/2019 12:30', info: '消息一'},
        {time: '12/03/2019 12:30', info: '消息一'},
        {time: '12/03/2019 12:30', info: '消息一'},
        {time: '12/03/2019 12:30', info: '消息一'}],
      patient_id: '13455', medicalOrderInfo: [
        {time: '12/03/2019 12:30', info: '消息一'},
        {time: '12/03/2019 12:30', info: '消息一'},
        {time: '12/03/2019 12:30', info: '消息一'},
        {time: '12/03/2019 12:30', info: '消息一'}],
      patient_id: '1341',
      medicalOrderInfo: [{time: '12/04/2019 16:30', info: '消息二'}],
      patient_id: '13456',
      medicalOrderInfo: [{time: '12/09/2019 17:30', info: '多读书，多看报，少吃零食，多睡觉'}],
      patient_id: '1345',
      medicalOrderInfo: [{time: '12/09/2019 17:30', info: '多读书，多看报，少吃零食，多睡觉'}],
      patient_id: '134',
      medicalOrderInfo: [{time: '12/09/2019 17:30', info: '多读书，多看报，少吃零食，多睡觉'}],
      patient_id: '13',
      medicalOrderInfo: [{time: '12/09/2019 17:30', info: '多读书，多看报，少吃零食，多睡觉'}],
      patient_id: '1',
      medicalOrderInfo: [{time: '12/09/2019 17:30', info: '多读书，多看报，少吃零食，多睡觉'}],

    },

  ];
}

const storage = new Storage();
export default storage;