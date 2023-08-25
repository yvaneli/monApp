import React from 'react';
import {View, Text, Button} from 'native-base';

const UserProfile = ({navigation}) => {
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
      }}>
      <Text>Hello, welcome to the user profile area</Text>
      <Button title="Go to A" onPress={() => navigation.navigate("UserHomeStack", {screen: "A"})} />

    </View>
  );
};

export const A = ({navigation}) => {
  return (
    <Button title="Go back" onPress={() => navigation.goBack()} />
  )
}

export default UserProfile;
