import { StatusBar } from "expo-status-bar";
import { StyleSheet, Button, ImageBackground, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Ionicons } from "@expo/vector-icons";
import MealsOverviewScreen from "./screens/MealsOverviewScreen";
import CategoriesScreen from "./screens/CategoriesScreen";
import MealsDetailsScreen from "./screens/MealsDetailsScreen";
import FavoriteScreen from "./screens/FavoritesScreen";
//import FavoritesContextProvider from "./store/context/Favorites-context";
import { Provider } from "react-redux";
import { store } from "./store/redux/store";

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function DrawerNavigator() {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: "#aa184b" },
        headerTintColor: "white",
        sceneContainerStyle: { backgroundColor: "#20272F" },
        headerTitleAlign: "center",
        drawerContentStyle: { backgroundColor: "#aa184b" },
        drawerInactiveTintColor: "white",
        drawerActiveTintColor: "#ffffff",
        drawerActiveBackgroundColor: "#761e48",
      }}
    >
      <Drawer.Screen
        name="Categories"
        component={CategoriesScreen}
        options={{
          title: "All Categories",
          drawerIcon: ({ color, size }) => (
            <Ionicons name="list" color={color} size={size} />
          ),
        }}
      />
      <Drawer.Screen
        name="Favorites"
        component={FavoriteScreen}
        options={{
          drawerIcon: ({ color, size }) => (
            <Ionicons name="star" color={color} size={size} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
}
export default function App() {
  return (
    <>
      <StatusBar style="light" />
      {/* <FavoritesContextProvider> */}

      {/* <ImageBackground
        style={styles.rootScreen}
        source={require("./assets/bacgroundimages.png")}
        imageStyle={styles.backgrounImage}
      > */}
      <Provider store={store}>
        <NavigationContainer>
          {/* <ImageBackground
            style={styles.rootScreen}
            source={require("./assets/bacgroundimages.png")}
            imageStyle={styles.backgrounImage}
          > */}
          <Stack.Navigator
            screenOptions={{
              headerStyle: {
                backgroundColor: "#aa184b",
              },
              headerTintColor: "white",
              contentStyle: {
                backgroundColor: "#20272F",
              },
              headerTitleAlign: "center",
            }}
          >
            <Stack.Screen
              name="Drawer"
              component={DrawerNavigator}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="MealsOverview"
              component={MealsOverviewScreen}
            />
            <Stack.Screen
              name="MealsDetails"
              component={MealsDetailsScreen}
              options={{
                title: "About the Meal",
              }}
            />
          </Stack.Navigator>
          {/* </ImageBackground> */}
        </NavigationContainer>
      </Provider>
      {/* </ImageBackground> */}

      {/* </FavoritesContextProvider> */}
    </>
  );
}

const styles = StyleSheet.create({
  rootScreen: { flex: 1 },
  backgrounImage: {
    opacity: 0.31,
  },
});
