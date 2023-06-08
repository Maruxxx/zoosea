import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect} from 'react';
import { useFonts } from "expo-font"
import * as SplashScreen from "expo-splash-screen"
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


import auth from '@react-native-firebase/auth';


import { Home, Profile, Rewards, Settings, PrivacyPolicy, TermsOfService, Support, About, Menu, Login, Onboarding, RewardDetail, SuccessReward, Earn } from './src/screens';
import axios from 'axios';

SplashScreen.preventAutoHideAsync();

export default function App() {

  const [appIsReady, setAppIsReady] = useState(false)
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();

  const [latestNews, setLatestNews] = useState(null)
  const [rules, setRules] = useState(null)
  const [general, setGeneral] = useState(null)

  function onAuthStateChanged(user) {
    setUser(user);
    if (initializing) setInitializing(false);
  }

  async function checkUserState() {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; 
  }

  async function fetchArticles() {
    axios.get('https://zoosea-scrapper.onrender.com/latest-news')
        .then(response => {
          const data = response.data
          setLatestNews(data)
        })
        .catch(err => console.log(err))
      axios.get('https://zoosea-scrapper.onrender.com/rules')
        .then(response => {
          const data = response.data
          setRules(data)
        })
        .catch(err => console.log(err))
      axios.get('https://zoosea-scrapper.onrender.com/general')
        .then(response => {
          const data = response.data
          setGeneral(data)
        })
        .catch(err => console.log(err))
  }

  useEffect(() => {

    async function preLoad() {
            
      try {
          await fetchArticles();
          await checkUserState()
        } 
        
        catch(err) {
          console.warn(err)
        } 
      
        finally {
          if(latestNews && rules && general) {
            setAppIsReady(true)
            SplashScreen.hideAsync();
          }
        }
    }


    preLoad();


  }, [latestNews, rules, general])

    
  

  const [loadedFonts] = useFonts({
    "AsapBlack": require('./assets/fonts/Asap-Black.ttf'),
    "AsapBold": require('./assets/fonts/Asap-Bold.ttf'),
    "AsapLight": require('./assets/fonts/Asap-Light.ttf'),
    "AsapMedium": require('./assets/fonts/Asap-Medium.ttf'),
    "AsapRegular": require('./assets/fonts/Asap-Regular.ttf'),
    "AsapSemiBold": require('./assets/fonts/Asap-SemiBold.ttf')
  })


  
    

  // const onLayoutRootView = useCallback(async () => {
  //   if (loadedFonts && appIsReady && !initializing) {
  //     await SplashScreen.hideAsync();
  //   }
  // }, [appIsReady, loadedFonts, initializing])


  if (!appIsReady) return null


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
            <Stack.Screen name='Profile' component={Profile} />
            <Stack.Screen name='Settings' component={Settings} />
            <Stack.Screen name='PrivacyPolicy' component={PrivacyPolicy} />
            <Stack.Screen name='TermsOfService' component={TermsOfService} />
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
