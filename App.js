import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Login from "./src/components/login";
import Signup from "./src/components/signup";
import Dashboard from "./src/components/dashboard";
import HomeScreen from "./src/screens/HomeScreen";
import NameEntryScreen from "./src/screens/NameEntryScreen";
import MyStoryScreen from "./src/screens/MyStoryScreen";
import StoryScreen from "./src/screens/StoryScreen";

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator
      initialRouteName='HomeScreen'
      screenOptions={{
        headerTitleAlign: "center",
        headerStyle: {
          backgroundColor: "#313494",
        },
        headerTintColor: "#fff",
        headerTitleStyle: {
          fontWeight: "bold",
        },
      }}>
      <Stack.Screen
        name='Signup'
        component={Signup}
        options={{ title: "Signup" }}
      />
      <Stack.Screen
        name='Login'
        component={Login}
        options={({ title: "Login" }, { headerLeft: null })}
      />
      <Stack.Screen
        name='Dashboard'
        component={Dashboard}
        options={({ title: "Dashboard" }, { headerLeft: null })}
      />
      <Stack.Screen
        name='HomeScreen'
        component={HomeScreen}
        options={({ title: "Hello" }, { headerLeft: null })}
      />
      <Stack.Screen
        name='NameEntryScreen'
        component={NameEntryScreen}
        options={({ title: "Hello" }, { headerLeft: null })}
      />
      <Stack.Screen
        name='MyStoryScreen'
        component={MyStoryScreen}
        options={({ title: "Hello" }, { headerLeft: null })}
      />
            <Stack.Screen
        name='StoryScreen'
        component={StoryScreen}
        options={({ title: "Hello" }, { headerLeft: null })}
      />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}
