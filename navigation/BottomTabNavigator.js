import React, {useContext} from 'react';

import UserLandingPage from '../screens/landing/UserLandingPage.js';
import BookNewEvent from '../screens/events/BookNewEvent.js';
import UserProfile from '../screens/profile/UserProfile.js';
import DrawerNavigator from './DrawerNavigator'
import { useNavigation } from '@react-navigation/native';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';

import {A} from "../screens/profile/UserProfile"

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const TabButton = (props) => {
  const navigation = useNavigation()
  console.log(navigation)
  return <></>
}

export const UserHomeStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name=""
        component={UserLandingPage}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="A"
        component={A}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export const BottomTabNavigator = ({navigation, route}) => {

  function getHeaderTitle(route) {

  const routeName = getFocusedRouteNameFromRoute(route) ?? 'Home';

  switch (routeName) {
    case 'Home':
      return 'Home';
    case 'UserBookNewEvent':
      return 'Book Class';
    case 'UserProfilePage':
      return 'Profile';
  }
}

 React.useLayoutEffect(() => {
    navigation.setOptions({ headerTitle: getHeaderTitle(route) });
  }, [navigation, route]);


  return (
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarStyle: { display: getFocusedRouteNameFromRoute(route) === "test" ? 'none' : 'flex'},
        }}>
        <Tab.Screen
          name="UserHomeStack"
          component={UserHomeStack}
          options={{
            tabBarIcon: () => <Ionicons name="home" size={22} />,
          }}
        />
        <Tab.Screen
          name="UserBookNewEvent"
          component={BookNewEvent}
          options={{
            tabBarIcon: () => <Ionicons name="add-circle" size={22} />,
          }}
        />
        <Tab.Screen
          listeners={({navigation, route}) => ({
            tabPress: (e) => {
              console.log(e)
            }
          })}
          name="UserProfilePage"
          component={UserProfile}
          options={{
            tabBarIcon: () => <Ionicons name="person" size={22} color="black" />,
          }}
        />
      </Tab.Navigator>
  );
};
export default BottomTabNavigator;
