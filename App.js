import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Router, Scene, Stack } from 'react-native-router-flux';
import { Ionicons, FontAwesome } from '@expo/vector-icons';
import { autoSignin } from './service/firebase';

import __Welcome from './pages/__Welcome';
import __Login from './pages/__Login';
import __Register from './pages/__Register';

import _News from './pages/_News';
import _ReadNews from './pages/_ReadNews';
import _Status from './pages/_Status';
import _User from './pages/_User';
import _ChangePassword from './pages/_ChangePassword';
import _Userinfo from './pages/_Userinfo';
import _Setting from './pages/_Setting';

import __Loading from './pages/__Loading';

const SimpleLineIcon = ({ title, focused, name }) => {
  if (focused) {
    return <FontAwesome name={name} size={24} color="#037ef3" />;
  } else {
    return <FontAwesome name={name} size={20} color="#aaa" />;
  }
};

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isAuthen: false,
      isLoad: true,
      currentUser: '',
    };
  }
  componentDidMount() {
    autoSignin()
      .then(respon => {
        this.setUser(respon);
      })
      .catch(error => {
        this.setState({
          isLoad: false,
        });
      });
  }

  setUser = user => {
    if (user) {
      this.setState({
        currentUser: user,
        isAuthen: true,
        isLoad: false,
      });
    } else {
      this.setState({
        currentUser: null,
        isAuthen: false,
        isLoad: false,
      });
    }
  };
  render() {
    return (
      <Router>
        <Scene key="root">
          <Scene
            key="loading"
            hideNavBar
            component={__Loading}
            title="Loading"
            initial={this.state.isLoad}
          />
          <Scene
            key="welcome"
            hideNavBar
            component={__Welcome}
            title="Welcome"
            initial={!this.state.isAuthen && !this.state.isLoad}
          />
          <Scene
            key="login"
            component={__Login}
            title="Login"
            setUser={this.setUser}
          />
          <Scene key="register" component={__Register} title="Register" />

          <Scene
            key="tabbar"
            hideNavBar
            tabs
            initial={this.state.isAuthen && !this.state.isLoad}>
            <Scene key="news" icon={SimpleLineIcon} name="newspaper-o" title="News">
              <Scene key="newslist" component={_News} title="News" initial />
              <Scene key="readnews" component={_ReadNews} title="รายละเอียด" />
            </Scene>

            <Scene key="status" icon={SimpleLineIcon} name="inbox" title="Status">
              <Scene
                key="viewstatus"
                component={_Status}
                title="Status"
                initial
              />
            </Scene>

            <Scene key="user" icon={SimpleLineIcon} name="user" title="Profile">
              <Scene
                key="overview"
                component={_User}
                title="Profile"
                userinfo={this.state.currentUser}
                setUser={this.setUser}
                initial
              />
              <Scene
                key="password"
                component={_ChangePassword}
                title="Change Password"
              />
              <Scene
                key="userinfo"
                component={_Userinfo}
                title="Infomation"
              />
              <Scene
                key="setting"
                component={_Setting}
                title="Setting"
              />
            </Scene>
          </Scene>
        </Scene>
      </Router>
    );
  }
}