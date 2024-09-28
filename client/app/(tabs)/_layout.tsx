import { Tabs } from 'expo-router';

const TabsLayout = () => {
  return (
    <Tabs>
      <Tabs.Screen name='(index)/index' options={{ headerShown: false }} />
      <Tabs.Screen name='game-room/[id]' options={{ headerShown: false }} />
    </Tabs>
  );
};

export default TabsLayout;
