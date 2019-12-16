import React from 'react';
import { StyleSheet } from 'react-native';
import {
  Divider,
  Layout,
  Text,
} from 'react-native-ui-kitten';
import { GroupsScreenProps } from '../../navigation/home.navigator';
import { Toolbar } from '../../components/toolbar.component';
import {
  SafeAreaLayout,
  SafeAreaLayoutElement,
  SaveAreaInset,
} from '../../components/safe-area-layout.component';

export const GroupsScreen = (props: GroupsScreenProps): SafeAreaLayoutElement => (
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
        Groups
      </Text>
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
