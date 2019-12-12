import React from 'react';
import { ApplicationProvider, Layout, Button, IconRegistry, Icon } from '@ui-kitten/components';
import { mapping, dark as darkTheme } from '@eva-design/eva';
import { default as appTheme } from './custom-theme.json';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import { AppNavigator } from './src/navigate/index'
import 'react-native-gesture-handler'

const theme = { ...darkTheme, ...appTheme };

const App = () => (
  <React.Fragment>
    <IconRegistry icons={EvaIconsPack} />
    <ApplicationProvider mapping={mapping} theme={darkTheme}>
      <AppNavigator />
    </ApplicationProvider>
  </React.Fragment>
);

export default App;