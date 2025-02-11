import { IconType } from "@/interfaces/types";

export const content = [
  {
    id: "profile", // Unique identifier
    iconName: "profile",
    iconLabel: "Profile",
    iconType: "AntDesign" as IconType,
    size: 40,
    route: "/profile" as const, 
  },
  {
    id: "dashboard",
    iconName: "dashboard",
    iconLabel: "Dashboard",
    iconType: "AntDesign" as IconType,
    size: 40,
    route: "/settings" as const, 
  },
  {
    id: "code-1",
    iconName: "code",
    iconLabel: "Code",
    iconType: "Entypo" as IconType,
    size: 40,
    route: "/options" as const, 
  },
  {
    id: "google-1",
    iconName: "sc-google-plus",
    iconLabel: "Google",
    iconType: "EvilIcons" as IconType,
    size: 40,
    route: "/profile" as const, 
  },
  {
    id: "code-2",
    iconName: "code",
    iconLabel: "Code",
    iconType: "Entypo" as IconType,
    size: 40,
    route: "/profile" as const, 
  },
  {
    id: "google-2",
    iconName: "sc-google-plus",
    iconLabel: "Google",
    iconType: "EvilIcons" as IconType,
    size: 40,
    route: "/profile" as const, 
  },
];
