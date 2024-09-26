import React from 'react';
import { View, Text, Button } from 'react-native';

export default function HomePage({ navigation }) {
  return (
    <View>
      <Text>Home Page</Text>
      <Button
        title='Go to Settings'
        onPress={() => navigation.navigate('settings')}
      />
    </View>
  );
}
