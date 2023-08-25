import React, {useContext} from 'react';
import CustomDrawer from '../components/CustomDrawer.js';
import {BookNewEvent} from '../screens/events/BookNewEvent.js';
import {UserProfile} from '../screens/profile/UserProfile.js';

import BottomTabNavigator, {ProfileStack, UserHomeStack, UserLandingPage} from '../navigation/BottomTabNavigator.js';

import {createDrawerNavigator} from '@react-navigation/drawer';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Drawer = createDrawerNavigator();

export const DrawerNavigator = ({navigation}) => {

  return (
      <Drawer.Navigator
        drawerContent={props => <CustomDrawer {...props} />}
        screenOptions={{
          drawerActiveBackgroundColor: '#2B6EB5',
          drawerActiveTintColor: '#fff',
          drawerInactiveTintColor: '#333',
          drawerLabelStyle: {marginLeft: -25, fontSize: 15},
        }}>
        <Drawer.Screen
          name="Home"
          component={BottomTabNavigator}
          options={{
            title: 'Home',
            unmountOnBlur:true,
            drawerIcon: ({color}) => <Ionicons name="home" size={22} color={color} />,
          }}
        />
        <Drawer.Screen
          name="BookNewEvent"
          component={BookNewEvent}
          options={{
            title: 'Book Class',
            drawerIcon: ({color}) => <Ionicons name="calendar-outline" size={22} color={color} />,
          }}
        />
        <Drawer.Screen
          name="UserProfilePage"
          component={UserProfile}
          options={{
            title: 'Profile',
            drawerIcon: ({color}) => <Ionicons name="person" size={22} color={color} />,
          }}
        />
      </Drawer.Navigator>
  );
};
