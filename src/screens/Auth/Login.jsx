import { View, Text, TouchableOpacity, ImageBackground, StyleSheet, Image, TextInput } from 'react-native'
import React, { useEffect, useState } from 'react'
import IonIcon from "@expo/vector-icons/Ionicons"

import * as Linking from 'expo-linking';

import { GoogleSignin } from '@react-native-google-signin/google-signin';
import auth from '@react-native-firebase/auth';
import { firebase_auth } from '../../../firebase';
import { signInWithEmailAndPassword, updateProfile } from 'firebase/auth';

import { InterstitialAd, TestIds} from 'react-native-google-mobile-ads';


import { setDoc, doc, getDoc, serverTimestamp } from "firebase/firestore/lite"; 
import { db } from '../../../firebase';


const background = require('../../../assets/media/bg/slider-bg.png')

const google = require('../../../assets/media/icons/google.png')


const Login = ({navigation}) => {

  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null)

  GoogleSignin.configure({
    webClientId: '1089705311110-f92u2cmb57miqifm3k42idm8grpmm4ta.apps.googleusercontent.com',
  });

  const adUnitId = TestIds.INTERSTITIAL

  const interstitial = InterstitialAd.createForAdRequest(adUnitId);
  
  interstitial.load();


  async function onGoogleButtonPress() {
    // Check if your device supports Google Play
    await GoogleSignin.hasPlayServices({ showPlayServicesUpdateDialog: true });
    // Get the users ID token
    const { idToken } = await GoogleSignin.signIn();
  
    // Create a Google credential with the token
    const googleCredential = auth.GoogleAuthProvider.credential(idToken);
  
    // Sign-in the user with the credential
    const userSignedIn = auth().signInWithCredential(googleCredential);

    
    const user  = (await userSignedIn).user

    try {
      const docRef = doc(db, "users", user.uid);
      const docSnap = await getDoc(docRef);
      if(docSnap.exists()) {
        console.log("userExists!")
      } else {
        await setDoc(doc(db, "users", user.uid), {
          name: user.displayName,
          email: user.email,
          image: user.photoURL,
          bubbles: 0,
          rewards: 0,
          instagram: false,
          tiktok: false,
          facebook: false,
          first_ad: serverTimestamp(),
          second_ad: serverTimestamp(),
          first_exe_link: serverTimestamp(),
          second_exe_link: serverTimestamp(),
          first_shrink_link: serverTimestamp(),
          second_shrink_link: serverTimestamp(),
        });
      }
      interstitial.show();
    } catch (e) {
      console.error("Error adding document: ", e);
    }

  }


  async function handleSignIn() {
    
    const response = await signInWithEmailAndPassword(firebase_auth, email, password)
    const user = response.user

    updateProfile(user, { displayName: "Google Reviewer", photoURL: "https://lh3.googleusercontent.com/a/AAcHTtdLRxopWEzBxU5AWyZ4eVUUl9fmEcHu0IuoscudIVvS=s288-c-no"})
    
    try {
      const docRef = doc(db, "users", user.uid);
      const docSnap = await getDoc(docRef);
      if(docSnap.exists()) {
        console.log("userExists!")
      } else {
        await setDoc(doc(db, "users", user.uid), {
          name: user.displayName,
          email: user.email,
          image: user.photoURL,
          bubbles: 0,
          rewards: 0,
          instagram: false,
          tiktok: false,
          facebook: false,
          first_ad: serverTimestamp(),
          second_ad: serverTimestamp(),
          first_exe_link: serverTimestamp(),
          second_exe_link: serverTimestamp(),
          first_shrink_link: serverTimestamp(),
          second_shrink_link: serverTimestamp(),
        });
      }
      interstitial.show();
    } catch (e) {
      console.error(e)
    }
      
  }


  return (
    <View style={styles.container}>
      <ImageBackground source={background} resizeMode="cover" style={styles.bgImage}>
          <View style={styles.contentWrapper}>



            <View style={{display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 5}}>
              <Text style={{fontFamily: 'AsapBold', fontSize: 30, color: 'white'}}>Login Now</Text>
              <Text style={{fontFamily: 'AsapLight', fontSize: 14, color: 'rgba(255, 255, 255, 0.70)'}}>Please login to continue using our app</Text>
            </View>

            <View style={{width: '100%', display:'flex', textAlign: 'center', justifyContentt: 'center', alignItems: 'center', gap: 10}}>
              <TextInput multiline={true} onChangeText={(e) => {setEmail(e)}} cursorColor='white' placeholderTextColor='rgba(255, 255, 255, 0.60)' placeholder='Email Address' style={{width: '70%', paddingHorizontal: 25, color: 'white', height: 50, borderRadius: 5, textAlign: 'center', backgroundColor: 'rgba(255, 255, 255, 0.15)'}}/>
              <View style={{display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'row', gap: 10}}>
                <TextInput onChangeText={(e) => {setPassword(e)}} multiline={true} cursorColor='white' placeholderTextColor='rgba(255, 255, 255, 0.60)' placeholder='Password' style={{width: '52%', paddingHorizontal: 25, color: 'white', height: 50, borderRadius: 5, textAlign: 'center', backgroundColor: 'rgba(255, 255, 255, 0.15)'}}/>
                <TouchableOpacity onPress={() => {handleSignIn()}} style={{height: 50, width: '15%', backgroundColor: '#0037AF', display: 'flex', justifyContent: 'center', alignItems: 'center', borderRadius: 5}}>
                  <IonIcon name="chevron-forward-outline" color='white' size={26}/>
                </TouchableOpacity>
              </View>
            </View>
            
            <View style={{width: '80%', height: 1, backgroundColor: 'white', opacity: .2}}></View>

            <TouchableOpacity onPress={() => {onGoogleButtonPress()}} activeOpacity={.8} style={styles.googleButton}>
              <Image  source={google} style={{width: 20, height: 20,}}/>
              <Text style={{fontFamily: 'AsapMedium', fontSize: 18, color: '#0D3E9B', textAlign: 'center', bottom: 1}}>Sign in with Google</Text>
            </TouchableOpacity>
         
            <View style={styles.bottomTextWrapper}>
              <View style={{width: '80%', height: 2, backgroundColor: 'white'}}></View>
              <TouchableOpacity activeOpacity={1} onPress={() => {Linking.openURL('https://zoosea.net/terms-of-service/')}} style={{width: '80%'}}><Text style={{textAlign: 'center', color: 'white', fontSize: 12, fontFamily: 'AsapRegular'}}>You agree to the terms & conditions by signing in to the application.</Text></TouchableOpacity>
            </View>
         
         
         
          </View>


      </ImageBackground>
    </View>
  )
}

export default Login

const styles = StyleSheet.create({
  container: {
    flex: 1
  }, 

  bgImage: {
    flex: 1,
    width: "100%",
    display: 'flex',
    justifyContent:'center', 
    alignItems: 'center'
  },

  contentWrapper: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    gap: 20,
  },

  googleButton: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,

    backgroundColor: 'white',
    width: '70%',
    height: 60,
    borderRadius: 10,
    borderBottomColor: '#0D3E9B',
    borderBottomWidth: 5
  },

  bottomTextWrapper: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 50,
    gap: 20
  }
})