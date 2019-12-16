import React from 'react';
import { StyleSheet, Image } from 'react-native';
import {
  Button,
  Layout,
  LayoutElement,
  Text,
  Card
} from 'react-native-ui-kitten';
import { TodoDoneScreenProps } from '../../navigation/todo.navigator';

export const CustomHeader = () => (
  <React.Fragment>
    <Image
      style={styles.headerImage}
      source={{ uri: 'https://cdn.pixabay.com/photo/2017/01/20/00/30/maldives-1993704__340.jpg' }}
    />
    <Text
      style={styles.headerText}
      category='h6'>
      Maldives
    </Text>
  </React.Fragment>
);

export const TodoDoneScreen = (props: TodoDoneScreenProps): LayoutElement => (
  <Layout style={styles.container}>
    <Card header={CustomHeader}>
      <Text>
        The Maldives, officially the Republic of Maldives, is a small country in South Asia,
        located in the Arabian Sea of the Indian Ocean.
        It lies southwest of Sri Lanka and India, about 1,000 kilometres (620 mi) from the Asian continent
    </Text>
    </Card>
    <Card header={CustomHeader}>
      <Text>
        The Maldives, officially the Republic of Maldives, is a small country in South Asia,
        located in the Arabian Sea of the Indian Ocean.
        It lies southwest of Sri Lanka and India, about 1,000 kilometres (620 mi) from the Asian continent
    </Text>
    </Card>
    <Card header={CustomHeader}>
      <Text>
        The Maldives, officially the Republic of Maldives, is a small country in South Asia,
        located in the Arabian Sea of the Indian Ocean.
        It lies southwest of Sri Lanka and India, about 1,000 kilometres (620 mi) from the Asian continent
    </Text>
    </Card>
    <Button style={styles.addButton}>
      ADD TODO
    </Button>
  </Layout>
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
  addButton: {
    marginVertical: 8,
  },
  headerText: {
    marginHorizontal: 24,
    marginVertical: 16,
  },
  headerImage: {
    flex: 1,
    height: 192,
  },
});
