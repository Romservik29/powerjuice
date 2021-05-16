import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Login from "./src/components/login";
import Signup from "./src/components/signup";
import Dashboard from "./src/components/dashboard";
import HomeScreen from "./src/screens/HomeScreen";
import NameEntryScreen from "./src/screens/NameEntryScreen";
import StoryScreen from "./src/screens/story-screens/StoryScreen";
import StoryScreen2 from "./src/screens/story-screens/StoryScreen2";
import StoryScreen3 from "./src/screens/story-screens/StoryScreen3";
import StoryScreen4 from "./src/screens/story-screens/StoryScreen4";
import LevelScreen from "./src/screens/LevelScreen";
import TestScreenPing from "./src/screens/TestScreenPing";
import InterestingFact from "./src/screens/InterestingFact";

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
        name='StoryScreen'
        component={StoryScreen}
        options={({ title: "StoryScreen" }, { headerLeft: null })}
      />
      <Stack.Screen
        name='StoryScreen2'
        component={StoryScreen2}
        options={({ title: "Hello" }, { headerLeft: null })}
      />
      <Stack.Screen
        name='StoryScreen3'
        component={StoryScreen3}
        options={({ title: "Hello" }, { headerLeft: null })}
      />
      <Stack.Screen
        name='StoryScreen4'
        component={StoryScreen4}
        options={({ title: "Hello" }, { headerLeft: null })}
      />
      <Stack.Screen
        name='LevelScreen'
        component={LevelScreen}
        options={({ title: "LevelScreen" }, { headerLeft: null })}
      />
      <Stack.Screen
        name='TestScreenPing'
        component={TestScreenPing}
        options={({ title: "TestScreenPing" }, { headerLeft: null })}
      />
      <Stack.Screen
        name='InterestingFact'
        component={InterestingFact}
        options={({ title: "InterestingFact" }, { headerLeft: null })}
      />
    </Stack.Navigator>
  );
}
export const NameContext = React.createContext(null)
export default function App() {
  const [username, setUsername] = useState("");
  return (
    <NavigationContainer>
      <NameContext.Provider value={{username,setUsername}}>
        <MyStack />
      </NameContext.Provider>
    </NavigationContainer>
  );
}
