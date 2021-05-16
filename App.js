import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import {
  HeaderStyleInterpolators,
  createStackNavigator,
} from "@react-navigation/stack";

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
import FinalScoreScreen from "./src/screens/FinalScoreScreen";
import SelectLanguageScreen from "./src/screens/SelectLanguageScreen";

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator
      initialRouteName='SelectLanguageScreen'
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name='SelectLanguageScreen' component={SelectLanguageScreen} />
      {/* <Stack.Screen name='Signup' component={Signup} />
      <Stack.Screen name='Login' component={Login} />
      <Stack.Screen name='Dashboard' component={Dashboard} /> */}
      <Stack.Screen name='HomeScreen' component={HomeScreen} />
      <Stack.Screen name='NameEntryScreen' component={NameEntryScreen} />
      <Stack.Screen name='StoryScreen' component={StoryScreen} />
      <Stack.Screen name='StoryScreen2' component={StoryScreen2} />
      <Stack.Screen name='StoryScreen3' component={StoryScreen3} />
      <Stack.Screen name='StoryScreen4' component={StoryScreen4} />
      <Stack.Screen name='LevelScreen' component={LevelScreen} />
      <Stack.Screen name='TestScreenPing' component={TestScreenPing} />
      <Stack.Screen name='InterestingFact' component={InterestingFact} />
      <Stack.Screen name='FinalScoreScreen' component={FinalScoreScreen} />
    </Stack.Navigator>
  );
}
export const NameContext = React.createContext();
export const PointsContext = React.createContext();
export const LanguageContext = React.createContext();

export default function App() {
  const [username, setUsername] = useState("");
  const [points, setPoints] = useState(0);
  const [lang, setLang] = useState("en");
  return (
    <NavigationContainer>
      <LanguageContext.Provider value={{ lang, setLang }}>
        <NameContext.Provider value={{ username, setUsername }}>
          <PointsContext.Provider value={{ points, setPoints }}>
            <MyStack />
          </PointsContext.Provider>
        </NameContext.Provider>
      </LanguageContext.Provider>
    </NavigationContainer>
  );
}
