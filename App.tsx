/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import {DdLogs} from '@datadog/mobile-react-native';
import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  Text,
  TouchableOpacity,
  useColorScheme,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import {initializeDatadog} from './src/datadog';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  initializeDatadog();

  const onPress = async () => {
    throw 'Internal Async Exception';
  };

  const DDconnectionTestOnPress = () => {
    DdLogs.warn('DD connection test warning');
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <TouchableOpacity
        onPress={onPress}
        style={{margin: 10, padding: 10, top: 10}}>
        <Text style={{fontSize: 20}}>Async Exception</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={DDconnectionTestOnPress}
        style={{margin: 10, padding: 10, top: 10}}>
        <Text style={{fontSize: 20}}>DD connection log test</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default App;
