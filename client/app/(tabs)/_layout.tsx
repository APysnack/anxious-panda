import { Tabs } from 'expo-router';

const TabsLayout = () => {
  return (
    <Tabs>
      <Tabs.Screen name='home' />
      <Tabs.Screen name='(index)/index' />
      <Tabs.Screen
        name='game-room/[id]'
        options={{ headerTitle: 'Game Room', title: 'Game Room' }}
      />
    </Tabs>
  );
};

export default TabsLayout;
