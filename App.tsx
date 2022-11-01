import {NavigationContainer, DefaultTheme} from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaView } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Tabs from './components/Tabs';
import Home from './screens/MyGarden';
import Profile from './screens/Profile';

const Stack = createNativeStackNavigator();

const AppTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: '#cfd0ce'
  },
};

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer theme={AppTheme}>
        <Tabs/>
      </NavigationContainer>
      </SafeAreaProvider>
  );
}

