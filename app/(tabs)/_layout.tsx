import {
  IconAlertHexagon,
  IconAlertOctagon,
  IconAlertOctagonFilled,
  IconHome,
  IconHomeFilled,
  IconRoute,
  IconSettings,
  IconSettingsFilled,
  IconWallet,
} from "@tabler/icons-react-native";
import { Tabs } from "expo-router";
import { Text, View } from "react-native";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "#330072",
        tabBarStyle: {
          height: 70,
          paddingTop: 10,
          shadowOffset: { height: 0, width: 0 },
          shadowOpacity: 0,
          shadowRadius: 0,
          elevation: 0,
          borderWidth: 0,
        },
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          title: "Home",
          tabBarIcon: ({ color, focused }) =>
            focused ? (
              <IconHomeFilled size={28} fill={color} />
            ) : (
              <IconHome size={28} color={color} />
            ),
        }}
      />
      <Tabs.Screen
        name="routes"
        options={{
          title: "Routes",
          tabBarIcon: ({ color }) => <IconRoute size={28} color={color} />,
        }}
      />
      <Tabs.Screen
        name="wallet"
        options={{
          title: "Wallet",
          tabBarIcon: ({ color }) => <IconWallet size={28} color={color} />,
        }}
      />
      <Tabs.Screen
        name="reports"
        options={{
          title: "Reports",
          tabBarIcon: ({ color, focused }) =>
            focused ? (
              <IconAlertOctagonFilled size={28} fill={color} />
            ) : (
              <IconAlertOctagon size={28} color={color} />
            ),
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: "Settings",
          tabBarIcon: ({ color, focused }) =>
            focused ? (
              <IconSettingsFilled size={28} fill={color} />
            ) : (
              <IconSettings size={28} color={color} />
            ),
        }}
      />
    </Tabs>
  );
}
