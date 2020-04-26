import React from 'react';
import { NavigationContainer, RouteProp } from '@react-navigation/native';
import {
  createStackNavigator,
  StackNavigationOptions,
} from '@react-navigation/stack';
import PostListScreen from './screens/PostListScreen';
import PostScreen from './screens/PostScreen';
import { Provider } from 'react-redux';

import store from './redux/store';

export type RootStackParamList = {
  PostListScreen: undefined;
  PostScreen: { postId: string; title: string };
};
export type PostScreenRouteProp = RouteProp<RootStackParamList, 'PostScreen'>;

const Stack = createStackNavigator<RootStackParamList>();
const staticOptions = (): StackNavigationOptions => ({
  headerTitleAlign: 'center',
});

export function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="PostListScreen"
          screenOptions={staticOptions}
        >
          <Stack.Screen
            name="PostListScreen"
            component={PostListScreen}
            options={{ title: 'Posts' }}
          />
          <Stack.Screen
            name="PostScreen"
            component={PostScreen}
            options={({ route }) => ({ title: route.params.title })}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
