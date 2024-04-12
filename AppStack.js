import { Pressable, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./screens/HomeScreen";
import AboutScreen from "./screens/AboutScreen";
import AjustesScreen from "./screens/AjustesScreen";

const Stack = createNativeStackNavigator();

export const AboutStack = ({ navigation }) => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: "#6a51ae" },
        headerTitleStyle: { fontWeight: "bold" },
        headerTintColor: "#fff",
        contentStyle: { backgroundColor: "#e8e4f3" },
        headerRight: () => (
          <Pressable onPress={() => navigation.navigate('Ajustes')}>
            <Text style={{ color: "#fff", fontSize: 16 }}>Ajustes</Text>
          </Pressable>
        ),
      }}
    >
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: "Welcome Home",
        }}
      />
      <Stack.Screen
        name="About"
        component={AboutScreen}
        initialParams={{
          name: "Guest",
        }}
        options={({ route }) => ({
          title: route.params.name,
        })}
      />
      <Stack.Screen
        name="Ajustes"
        component={AjustesScreen}
      />
    </Stack.Navigator>
  );
};

export default function App() {
  return (
    <NavigationContainer>
      <AboutStack />
    </NavigationContainer>
  );
}
