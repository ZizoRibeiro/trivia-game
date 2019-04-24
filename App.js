import React from 'react';
import { SafeAreaView } from 'react-navigation';

import { Provider } from 'react-redux';
import store from './src/store';

import Routes from './src/routes';

export default class App extends React.Component {
  render() {
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: '#09274A' }}>
        <Provider store={store}>
          <Routes />
        </Provider>
      </SafeAreaView>
    );
  }
}
