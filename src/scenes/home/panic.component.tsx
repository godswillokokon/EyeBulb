import React from 'react';
import { StyleSheet } from 'react-native';
import {
  Divider,
  Layout,
  Text,
} from 'react-native-ui-kitten';
import { PanicScreenProps } from '../../navigation/home.navigator';
import { Toolbar } from '../../components/toolbar.component';
import {
  SafeAreaLayout,
  SafeAreaLayoutElement,
  SaveAreaInset,
} from '../../components/safe-area-layout.component';
import {
  Icon,
  Button,
} from 'react-native-ui-kitten';
const iconRef = React.createRef();

const onStart = () => {
  iconRef.current.startAnimation();
};

const onStop = () => {
  iconRef.current.stopAnimation();
};

const renderIcon = (style) => (
  <Icon
    {...style}
    ref={iconRef}
    name='alert-triangle-outline'
    animation='shake'
    fill='#000000'
    animationConfig={{ cycles: Infinity }}
  />
);

export const PanicScreen = (props: PanicScreenProps): SafeAreaLayoutElement => (

  <SafeAreaLayout
    style={styles.safeArea}
    insets={SaveAreaInset.TOP}>
    <Toolbar
      title='EyeBulb'
      onBackPress={props.navigation.goBack}
    />
    <Divider />
    <Layout style={styles.container}>
      <Text category='h1'>
        Panic
      </Text>
      <Button
        icon={renderIcon}
        onPress={onStart}
        status='danger'

      >
        START
    </Button>
      <Divider />
      <Button
        icon={renderIcon}
        onPress={onStop}
        status='danger'

      >
        STOP
    </Button>
    </Layout>
  </SafeAreaLayout>
);

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
