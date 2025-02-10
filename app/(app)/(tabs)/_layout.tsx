import React from "react";
import Icon from "@/components/shared/Icon";
import { Tabs, usePathname } from "expo-router";
import AppHeader from "@/components/app/appHeader/AppHeader"; // Import AppHeader
import { appHeaderStyles } from "@/components/app/appHeader/AppHeaderStyle";

export default function TabsLayout() {
  const headerTitle = usePathname(); // Get the current pathname
  const { content, textStyle } = appHeaderStyles();
  return (
    <Tabs
      initialRouteName="home"
      screenOptions={{ tabBarActiveTintColor: "black" }}
    >
      <Tabs.Screen
        name="home"
        options={{
          title: "Home",
          headerTitle: () => (
            <AppHeader
              text={headerTitle} // Pass the pathname as header text
              containerStyle={content} // Custom container styles
              customTextStyle={textStyle} // Custom label styles
            />
          ),
          tabBarIcon: ({ color, size }) => (
            <Icon name="home" size={size} color={color} type="AntDesign" />
          ),
       
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: "Settings",
          headerTitle: () => (
            <AppHeader
            text={headerTitle} // Pass the pathname as header text
            containerStyle={content} // Custom container styles
            customTextStyle={textStyle} // Custom label styles
          />
          ),
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
