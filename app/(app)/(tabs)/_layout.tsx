import { Tabs } from "expo-router";

export default function TabsLayout() {
  return (
    <Tabs
      initialRouteName='home'
      screenOptions={{ tabBarActiveTintColor: "blue" }}
    >
      <Tabs.Screen
        name= 'home'
        options={{
          title: 'Home',
          headerShown: false
        }}
      />
      <Tabs.Screen
        name= 'settings'
        options={{
          title: 'Settings',
          headerShown: false
        }}
      />
    </Tabs>
  );
}
