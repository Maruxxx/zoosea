import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect} from 'react';
import { useFonts } from "expo-font"
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import auth from '@react-native-firebase/auth';

import { Home, Profile, Rewards, Settings, PrivacyPolicy, TermsOfService, Support, About, Menu, Login, Onboarding, RewardDetail, SuccessReward, Earn, ConfirmReward, HowItWorks, ConfirmLogOut } from './src/screens';
import { __general, __latestNews, __rules } from './src/data/articles';

export default function App() {

  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();
  
  const [latestNews, setLatestNews] = useState(__latestNews)
  const [rules, setRules] = useState(__rules)
  const [general, setGeneral] = useState(__general)
  
  function onAuthStateChanged(user) {
    setUser(user);
    if (initializing) setInitializing(false);
  }
  
  useEffect(() => {

    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; 
    
  }, [])
  
  
  const [loadedFonts] = useFonts({
    "AsapBlack": require('./assets/fonts/Asap-Black.ttf'),
    "AsapBold": require('./assets/fonts/Asap-Bold.ttf'),
    "AsapLight": require('./assets/fonts/Asap-Light.ttf'),
    "AsapMedium": require('./assets/fonts/Asap-Medium.ttf'),
    "AsapRegular": require('./assets/fonts/Asap-Regular.ttf'),
    "AsapSemiBold": require('./assets/fonts/Asap-SemiBold.ttf')
  })
  
  console.log(initializing)
  console.log(user)
  

      
  if (initializing) return null
        
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
            <Stack.Screen name='Home' component={Home} initialParams={{ user: user, latestNews, rules, general}} />
            <Stack.Screen name='Menu' component={Menu} initialParams={{ user: user}}/>
            <Stack.Screen name='Earn' component={Earn} initialParams={{ user: user}}/>
            <Stack.Screen name='Rewards' component={Rewards} />
            <Stack.Screen name='RewardDetail' component={RewardDetail}/>
            <Stack.Screen name='SuccessReward' component={SuccessReward}/>
            <Stack.Screen name='ConfirmReward' component={ConfirmReward}/>
            <Stack.Screen name='Profile' component={Profile} />
            <Stack.Screen name='Settings' component={Settings} />
            <Stack.Screen name='HowItWorks' component={HowItWorks} />
            <Stack.Screen name='PrivacyPolicy' component={PrivacyPolicy} />
            <Stack.Screen name='TermsOfService' component={TermsOfService} />
            <Stack.Screen name='Support' component={Support} />
            <Stack.Screen name='About' component={About} />
            <Stack.Screen name='ConfirmLogOut' component={ConfirmLogOut} />
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
