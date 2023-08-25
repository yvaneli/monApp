import React from 'react';
import {View, Text, Button} from 'native-base';

import { useNavigation } from '@react-navigation/native';

export const UserLandingPage = (props) => {

 const navigation = useNavigation()

  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
      }}>
      <Text>Hello, welcome to the Landing Page</Text>
    </View>
  );
};

export default UserLandingPage;
