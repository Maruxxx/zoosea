import { StatusBar } from 'expo-status-bar';
import React, { useCallback, useState, useEffect } from 'react';
import { useFonts } from "expo-font"
import * as SplashScreen from "expo-splash-screen"
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


import auth from '@react-native-firebase/auth';


import { Home, Profile, Rewards, Settings, PrivacyPolicy, TermsOfService, CommunityGuidelines, Support, About, Menu, Login, Onboarding, RewardDetail, SuccessReward, Earn } from './src/screens';

export default function App() {


  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();

  // Handle user state changes
  function onAuthStateChanged(user) {
    setUser(user);
    if (initializing) setInitializing(false);
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

    
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

  if (initializing) return null;


  const Stack = createNativeStackNavigator();


  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        headerShown: false,
        animation:'none'
      }}>
        {
          !user ? (
            <>
            <Stack.Screen name='Onboarding' component={Onboarding} options={{animation: 'slide_from_right'}}/>
            </>
          ) : (
            <>
            <Stack.Screen name='Home' component={Home} initialParams={{ user: user}} />
            <Stack.Screen name='Menu' component={Menu} initialParams={{ user: user}}/>
            <Stack.Screen name='Earn' component={Earn} initialParams={{ user: user}}/>
            <Stack.Screen name='Rewards' component={Rewards} />
            <Stack.Screen name='RewardDetail' component={RewardDetail}/>
            <Stack.Screen name='SuccessReward' component={SuccessReward}/>
            <Stack.Screen name='Profile' component={Profile} />
            <Stack.Screen name='Settings' component={Settings} />
            <Stack.Screen name='PrivacyPolicy' component={PrivacyPolicy} />
            <Stack.Screen name='TermsOfService' component={TermsOfService} />
            <Stack.Screen name='CommunityGuidelines' component={CommunityGuidelines} />
            <Stack.Screen name='Support' component={Support} />
            <Stack.Screen name='About' component={About} />
            <Stack.Screen name='Onboarding' component={Onboarding} options={{animation: 'slide_from_right'}}/>
            </>
          )
        }
        <Stack.Screen navigationKey={user ? 'user' : 'guest'} name="Login" component={Login} />
      </Stack.Navigator>
      
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}
