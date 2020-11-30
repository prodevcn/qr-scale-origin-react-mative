import React from 'react';
import {StyleSheet, SafeAreaView, StatusBar, AsyncStorage} from 'react-native';

import PageIndicator from '../components/page-indicator';

export default class Logout extends React.PureComponent {
  componentDidMount() {
    AsyncStorage.removeItem('accessToken').then(() => {
      setTimeout(() => this.props.navigation.navigate('Login'), 200);
    });
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <StatusBar backgroundColor="#333" barStyle="light-content" />
        <PageIndicator />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#333',
    justifyContent: 'center',
    alignItems: 'center'
  }
});
