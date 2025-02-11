import React from "react";
import Icon from "@/components/shared/Icon";
import { Tabs } from "expo-router";
import AppHeader from "@/components/app/Header/Header"; // Import AppHeader
import { appHeaderStyles } from "@/components/app/Header/HeaderStyle";

export default function TabsLayout() {
  return (
    <Tabs
      initialRouteName="home"
      screenOptions={{ tabBarActiveTintColor: "black" }}
    >
      <Tabs.Screen
        name="home"
        options={{
          title: "Home",
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Icon name="home" size={size} color={color} type="AntDesign" />
          ),
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: "Settings",
          tabBarIcon: ({ color, size }) => (
            <Icon
              name="settings-outline"
              size={size}
              color={color}
              type="Ionicons"
            />
          ),
        }}
      />
    </Tabs>
  );
}
