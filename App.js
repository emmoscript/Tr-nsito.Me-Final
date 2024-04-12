import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import SettingsScreen from "./screens/SettingsScreen";
import DashboardScreen from "./screens/DashboardScreen";
import ProfileScreen from "./screens/Profile";
import Ionicons from "@expo/vector-icons/Ionicons";
import EscanearPlacaScreen from './screens/EscanearPlacaScreen';
import { AboutStack } from "./AppStack"; // Assuming AboutStack is a defined navigator elsewhere}
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          // tabBarShowLabel: false, // Optional: Hide tab labels
          tabBarLabelPosition: "below-icon", //  Position labels below icons
          tabBarActiveTintColor: "green", // Set active tab color
        }}
      >
        
        <Tab.Screen name="DashboardScreen" component={DashboardScreen} />
        <Tab.Screen
          name="EscanearPlaca"
          component={EscanearPlacaScreen}
          options={{
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="qrcode-scan" color={color} size={26} />
            ),
          }}
        />
        <Tab.Screen
          name="Profile"
          component={ProfileScreen}
          options={{
            tabBarLabel: "My Profile",
            tabBarIcon: () => <Ionicons name={"person"} size={20} />,
            tabBarBadge: 3, // Add a badge with number 3
          }}
        />
        <Tab.Screen name="Settings" component={SettingsScreen} />
        <Tab.Screen
          name="About Stack"
          component={AboutStack}
          options={{
            headerShown: false, // Hide header for About Stack
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
