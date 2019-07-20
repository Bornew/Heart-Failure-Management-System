import React, {Component} from 'react';
import Menu from './common/menu';
import Header from './common/Header';
import Header_Patient from './common/Header_Patient';
import {GlobalStyle} from './style';
import PatCardContainer from './common/PatCardContainer';
import MessageContainer from './common/MessageContainer';
import {Provider} from 'react-redux';
import storage from './storage';
import store from './store';
import Login from './common/Login';
import PatCardContainer_Patient from './common/PatCardContainer_Patient';

// import {Route, Router, Redirect} from 'react-router-dom';

class App extends Component {
  componentWillMount() {
    storage.registerComponent('app', this);
  }

  render() {
    if (storage.logged === true && storage.user === 'doctor')
      return (
          <Provider store={store}>
            <Menu onSwitchPage={this.handleSwitch}/>
            {storage.page === 'home' &&
            <Header></Header>}
            {storage.page === 'home' &&
            <PatCardContainer
                onSwitchPage={this.handleSwitch}> </PatCardContainer>}
            {storage.page === 'message' &&
            <Header></Header>}
            {storage.page === 'message' &&
            <MessageContainer></MessageContainer>}
            <GlobalStyle/>
          </Provider>
      );
    if (storage.logged === true && storage.user === 'patient') {
      return (
          <Provider store={store}>
            <Menu onSwitchPage={this.handleSwitch}/>
            {storage.page === 'home' &&
            <Header_Patient></Header_Patient>}
            {storage.page === 'home' &&
            <PatCardContainer_Patient
                onSwitchPage={this.handleSwitch}> </PatCardContainer_Patient>}
            {storage.page === 'message' &&
            <Header></Header>}
            {storage.page === 'message' &&
            <MessageContainer></MessageContainer>}
            <GlobalStyle/>
          </Provider>
      );
    }
    else if (!this.logged) {
      return (
          <Provider store={store}>
            {storage.page === 'login' &&
            <Login></Login>}
          </Provider>
      );
    }
  }
}

export default App;
