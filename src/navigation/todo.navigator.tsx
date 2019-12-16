import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { AppRoute } from './app-routes';
import { TodoTabBar, TodoInProgressScreen, TodoDoneScreen } from '../scenes/todo';
import { Messages, Pictures } from '../assets/icons';

const TopTab = createMaterialTopTabNavigator();

export const TodoNavigator = (): React.ReactElement => (
  <TopTab.Navigator tabBar={props => <TodoTabBar {...props} />}>
    <TopTab.Screen
      name={AppRoute.TODO_IN_PROGRESS}
      component={TodoInProgressScreen}
      options={{ title: 'MESSAGES', tabBarIcon: Messages }}
    />
    <TopTab.Screen
      name={AppRoute.TODO_DONE}
      component={TodoDoneScreen}
      options={{ title: 'PICTURES', tabBarIcon: Pictures }}
    />
  </TopTab.Navigator>
);