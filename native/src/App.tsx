import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer, RouteProp } from '@react-navigation/native';
import {
  createStackNavigator,
  StackNavigationOptions,
} from '@react-navigation/stack';
import PostsListScreen from './screens/PostsList';
import PostDetailScreen from './screens/PostDetail';
import { Provider } from 'react-redux';

import store from './redux/store';

export type RootStackParamList = {
  PostsList: undefined;
  PostDetail: { postId: string; title: string };
};
export type PostDetailScreenRouteProp = RouteProp<
  RootStackParamList,
  'PostDetail'
>;

const Stack = createStackNavigator<RootStackParamList>();
const staticOptions = (): StackNavigationOptions => ({
  headerTitleAlign: 'center',
});

export function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="PostsList"
          screenOptions={staticOptions}
        >
          <Stack.Screen
            name="PostsList"
            component={PostsListScreen}
            options={{ title: 'Posts' }}
          />
          <Stack.Screen
            name="PostDetail"
            component={PostDetailScreen}
            options={({ route }) => ({ title: route.params.title })}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
