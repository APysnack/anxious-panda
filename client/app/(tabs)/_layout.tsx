import { Tabs } from 'expo-router';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';

const TabsLayout = () => {
  return (
    <Tabs>
      <Tabs.Screen
        name='(index)/index'
        options={{
          headerShown: false,
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name='home-outline' size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name='game-room/[id]'
        options={{
          headerShown: false,
          href: '/game-room/1',
          tabBarLabel: 'Game Room',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name='gamepad-variant'
              size={size}
              color={color}
            />
          ),
        }}
      />
    </Tabs>
  );
};

export default TabsLayout;
