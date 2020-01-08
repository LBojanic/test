import { AppRegistry, Platform, StatusBar } from 'react-native';
import App from './App';
import colors from './src/styles/colors';

AppRegistry.registerComponent('CarApp', () => App);

if (Platform.OS === 'web') {
  const rootTag = document.getElementById('root') || document.getElementById('main');
  AppRegistry.runApplication('CarApp', { rootTag });
}

StatusBar.setBarStyle('light-content', true);
StatusBar.setBackgroundColor(colors.green01);