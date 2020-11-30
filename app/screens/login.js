import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';

import LoginView from '../components/login-view';

export default class Login extends React.PureComponent {
  loggedId = () => {
    this.props.navigation.navigate('Init');
  };

  render() {
    return (
      <SafeAreaView style={{flex: 1}}>
        <StatusBar backgroundColor="#333" barStyle="light-content" />
        <LoginView navigation={this.props.navigation} onLoggedIn={this.loggedId} />
      </SafeAreaView>
    );
  }
}
