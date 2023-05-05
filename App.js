import { StatusBar } from 'expo-status-bar';
import React, { useCallback } from 'react';
import { useFonts } from "expo-font"
import * as SplashScreen from "expo-splash-screen"
import { ImageBackground, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const background = require('./assets/background.jpg')


import IonIcon from "@expo/vector-icons/Ionicons"

import { Home, Profile, Rewards, Settings, PrivacyPolicy, TermsOfService, CommunityGuidelines, Support, About } from './src/screens';


export default function App() {


  const [loadedFonts] = useFonts({
    "AsapBlack": require('./assets/fonts/Asap-Black.ttf'),
    "AsapBold": require('./assets/fonts/Asap-Bold.ttf'),
    "AsapLight": require('./assets/fonts/Asap-Light.ttf'),
    "AsapMedium": require('./assets/fonts/Asap-Medium.ttf'),
    "AsapRegular": require('./assets/fonts/Asap-Regular.ttf'),
    "AsapSemiBold": require('./assets/fonts/Asap-SemiBold.ttf')
  })

  const onLayoutRootView = useCallback(async () => {
    if (loadedFonts) {
      await SplashScreen.hideAsync();
    }
  }, [loadedFonts]);

  if (!loadedFonts) {
    return null;
  }

  const Tab = createBottomTabNavigator();
  const SettingsStack = createNativeStackNavigator();


  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarShowLabel: false,
          tabBarStyle: {
            position: "absolute",
            bottom: 40,
            marginHorizontal: 40,
            paddingHorizontal: 10,
            backgroundColor: "rgba(255, 255, 255, 0.15)",
            elevation: 0,
            borderRadius: 30,
            height: 65,
            borderTopWidth:0
          },
          headerShown: false,
        })}
      >
        <Tab.Screen 
        name="Home" 
        component={Home}
        options={{
          tabBarIcon: ({focused}) => (
            <View>
              {focused ? <IonIcon name='home' size={24} color="white"/> : <IonIcon name='home-outline' size={24} color="white"/>}
            </View>
          )
        }}
        />
        <Tab.Screen 
        name="Rewards" 
        component={Rewards}
        options={{
          tabBarIcon: ({focused}) => (
            <View>
              {focused ? <IonIcon name='gift' size={24} color="white"/> : <IonIcon name='gift-outline' size={24} color="white"/>}
            </View>
          )
        }}
        />
        <Tab.Screen 
        name="SettingsScreen" 
        options={{
          tabBarIcon: ({focused}) => (
            <View>
              {focused ? <IonIcon name='settings' size={24} color="white"/> : <IonIcon name='settings-outline' size={24} color="white"/>}
            </View>
          )
        }}
        >
          {() => (
            <SettingsStack.Navigator>
              <SettingsStack.Screen name='Settings' component={Settings} options={{ headerShown: false, animation: 'none'}}/>
              <SettingsStack.Screen name='PrivacyPolicy' component={PrivacyPolicy} options={{ headerShown: false, animation: 'none'}}/>
              <SettingsStack.Screen name='TermsOfService' component={TermsOfService} options={{ headerShown: false, animation: 'none'}}/>
              <SettingsStack.Screen name='CommunityGuidelines' component={CommunityGuidelines} options={{ headerShown: false, animation: 'none'}}/>
              <SettingsStack.Screen name='Support' component={Support} options={{ headerShown: false, animation: 'none'}}/>
              <SettingsStack.Screen name='About' component={About} options={{ headerShown: false, animation: 'none'}}/>
            </SettingsStack.Navigator>
          )}
        </Tab.Screen>
        <Tab.Screen 
        name="Profile" 
        component={Profile}
        options={{
          tabBarIcon: ({focused}) => (
            <View>
              {focused ? <IonIcon name='person' size={24} color="white"/> : <IonIcon name='person-outline' size={24} color="white"/>}
            </View>
          )
        }}
        />
      </Tab.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}
