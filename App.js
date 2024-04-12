import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import SettingsScreen from "./screens/SettingsScreen";
import DashboardScreen from "./screens/DashboardScreen";
import ProfileScreen from "./screens/Profile";
import Ionicons from "@expo/vector-icons/Ionicons";
import EscanearPlacaScreen from './screens/EscanearPlacaScreen';
import { AboutStack } from "./AppStack"; // Assuming AboutStack is a defined navigator elsewhere}
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ajustes from './screens/AjustesScreen';


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
        
        <Tab.Screen name="Dashboard" component={DashboardScreen} options={{
            tabBarIcon: () => <Ionicons name={"home"} size={20} />,
          }}/>
        <Tab.Screen
          name="Escanear Placa"
          component={EscanearPlacaScreen}
          options={{
            tabBarIcon: () => <Ionicons name={"qr-code"} size={20} />,
          }}
        />
        <Tab.Screen
          name="Profile"
          component={ProfileScreen}
          options={{
            tabBarLabel: "Mi Perfil",
            tabBarIcon: () => <Ionicons name={"person"} size={20} />,
            tabBarBadge: 3, // Add a badge with number 3
          }}
        />
        
        <Tab.Screen
          name="Ajustes"
          component={Ajustes}
          options={{
            headerShown: false, // Hide header for About Stack
            tabBarIcon: () => <Ionicons name={"settings"} size={20} />
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
