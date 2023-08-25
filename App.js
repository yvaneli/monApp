import React, {useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {NativeBaseProvider, extendTheme} from 'native-base';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import { createDrawerNavigator } from '@react-navigation/drawer';

import {DrawerNavigator} from './navigation/DrawerNavigator';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function HomeScreen ({navigation}:{navigation: any}) {
  return <></>
}

const HomeStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Home" component={HomeScreen} />
        </Stack.Navigator>
    )
}

const BottomTabs = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Home" component={HomeStack} />
        </Tab.Navigator>
    )
}

const Notifications = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Notification" component={Notifications} />
        </Stack.Navigator>
    )
}

const RootStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="BottomTabs" component={BottomTabs} />
        </Stack.Navigator>
    )
}

function LemonBar() {

  return <></>
}

const drawerItemsMain = [
  {
    key: 'Pastry',
    title: 'Pastry',
    routes: [
      {nav: 'MainDrawer', routeName: "LemonBar", title: 'LemonBar'},
    ],
  },
]
const Drawer = createDrawerNavigator();

const MainDrawerNavigation = () => {
    return(
        <Drawer.Navigator drawerItems={drawerItemsMain}>
            {
                drawerItemsMain.map((item) => {
                    return item.routes.map((route) => {
                        console.log(route.title)
                        return (
                            <Drawer.Screen 
                                key={route.title}
                                name={route.title}
                                component={route.routeName}
                                options={{ title: route.title }}
                            />
                        )
                    })
                })
            }
        </Drawer.Navigator>
    )
}

export default function App() {
    return (
      <NativeBaseProvider>
        <NavigationContainer>
            <DrawerNavigator />
        </NavigationContainer>
      </NativeBaseProvider>
    )
}