import { View, Text, TouchableOpacity, ImageBackground, StyleSheet, Image } from 'react-native'
import React from 'react'


import { GoogleSignin } from '@react-native-google-signin/google-signin';
import auth from '@react-native-firebase/auth';

import { InterstitialAd, TestIds } from 'react-native-google-mobile-ads';


import { setDoc, doc, getDoc, serverTimestamp } from "firebase/firestore/lite"; 
import { db } from '../../../firebase';


const background = require('../../../assets/media/bg/slider-bg.png')

const zoosea = require('../../../assets/media/icons/zoosea-logo.png')
const google = require('../../../assets/media/icons/google.png')


const Login = ({navigation}) => {

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
        console.log("Document written!!");
      }
      interstitial.show();
    } catch (e) {
      console.error("Error adding document: ", e);
    }

  }



  return (
    <View style={styles.container}>
      <ImageBackground source={background} resizeMode="cover" style={styles.bgImage}>
          <View style={styles.contentWrapper}>



            <Image source={zoosea} resizeMode='contain' style={{width: 170 / 1.1, height: 36 / 1.1, marginVertical: 10}}/>
            <TouchableOpacity onPress={() => {onGoogleButtonPress()}} activeOpacity={.8} style={styles.googleButton}>
              <Image  source={google} style={{width: 20, height: 20,}}/>
              <Text style={{fontFamily: 'AsapMedium', fontSize: 18, color: '#0D3E9B', textAlign: 'center', bottom: 1}}>Sign in with Google</Text>
            </TouchableOpacity>
         
            <View style={styles.bottomTextWrapper}>
              <View style={{width: '80%', height: 2, backgroundColor: 'white'}}></View>
              <Text style={{width: '60%', textAlign: 'center', color: 'white', fontSize: 12, fontFamily: 'AsapRegular'}}>You agree to the terms & conditions by signing in with Google</Text>
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
    gap: 20
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