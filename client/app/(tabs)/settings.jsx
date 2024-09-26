import React from 'react';
import { View, Text, Button } from 'react-native';

export default function SettingsPage({ navigation }) {
  return (
    <View>
      <Text>Settings Page</Text>
      <Button title='Go to Home' onPress={() => navigation.navigate('home')} />
    </View>
  );
}
