import React from 'react';
import {connect} from 'react-redux';
import {SafeAreaView, StatusBar, AsyncStorage} from 'react-native';
import PageIndicator from '../components/page-indicator';
import {NavigationActions} from 'react-navigation';

import {LocaleKeys} from '../routes';

import {fetchLocale} from '../actions/locale';
import {fetchHome} from '../actions/common';

class Init extends React.PureComponent {
  componentDidMount() {
    AsyncStorage.getItem('accessToken').then(accessToken =>
      this.asyncLoadInitialData(accessToken).then(() => {
        // console.log('accessToken', accessToken);
        this.props.navigation.navigate(accessToken ? 'App' : 'Login');
      }).catch(() => {
        this.props.navigation.navigate('Login');
      })
    );
  }

  asyncLoadInitialData = accessToken =>
    new Promise((resolve, reject) =>
      this.props.fetchLocale().then(() => {
        this.setTitles();

        if (accessToken) {
          this.props.fetchHome().then(() => {
            AsyncStorage.setItem('userId', this.props.home.user.id).then(
              resolve
            );
          }).catch(() => {
            reject();
          });
        } else {
          resolve();
        }
      }).catch(() => {
        reject();
      })
    );

  setTitles = () => {
    const {navigation, strings} = this.props;

    LocaleKeys.forEach(key => {
      navigation.dispatch(
        NavigationActions.setParams({
          params: {
            title: strings.MobileUI[`${key}.Title`] || 'Locale Error'
          },
          key
        })
      );
    });
  };

  render() {
    return (
      <SafeAreaView style={{backgroundColor: '#333'}}>
        <StatusBar backgroundColor="#333" barStyle="light-content" />
        <PageIndicator />
      </SafeAreaView>
    );
  }
}

const mapStateToProps = store => {
  const {home} = store.common;
  const {strings} = store.locale;

  return {home, strings};
};

export default connect(
  mapStateToProps,
  {fetchLocale, fetchHome}
)(Init);
