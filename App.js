import React from 'react';
import { ApplicationProvider, Layout, Button, IconRegistry, Icon } from '@ui-kitten/components';
import { mapping, dark as darkTheme } from '@eva-design/eva';
import { default as appTheme } from './custom-theme.json';
import { EvaIconsPack } from '@ui-kitten/eva-icons';

const theme = { ...darkTheme, ...appTheme };
export const FacebookIcon = (style) => (
  <Icon name='facebook' {...style} />
);
const HomeScreen = () => (
  <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Button icon={FacebookIcon}>HOME</Button>
  </Layout>
);

const App = () => (
  <React.Fragment>
    <IconRegistry icons={EvaIconsPack} />
    <ApplicationProvider mapping={mapping} theme={darkTheme}>
      <HomeScreen />
    </ApplicationProvider>
  </React.Fragment>
);

export default App;