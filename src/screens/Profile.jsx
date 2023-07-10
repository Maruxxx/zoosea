import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import IonIcon from "@expo/vector-icons/Ionicons"

import { db } from '../../firebase';
import { getDoc, doc } from "firebase/firestore/lite"; 

import { GoogleSignin } from '@react-native-google-signin/google-signin';
import auth from '@react-native-firebase/auth';


import { ImageBackground } from 'react-native';
import InternetCheck from '../components/InternetCheck';

const background = require('../../assets/media/bg/background.jpg')


const Profile = ({navigation, route}) => {

  const [bubblesCollected, setBubblesCollected] = useState('??')
  const [rewardsRedeemed, setRewardsRedeemed] = useState('??')

  const { user } = route.params


  useEffect( () => {

    async function getUserDoc() {
      try {
        const docRef = doc(db, "users", user.uid);
        const docSnap = await getDoc(docRef)
        if(docSnap.exists()) {
          setBubblesCollected(docSnap.data().bubbles)
          setRewardsRedeemed(docSnap.data().rewards)
        }
      } catch (e) {
        console.log(e)
      }
    }
    getUserDoc();
  }, [bubblesCollected])
 


  GoogleSignin.configure({
    webClientId: '1089705311110-f92u2cmb57miqifm3k42idm8grpmm4ta.apps.googleusercontent.com',
  });

  async function signOut() {
    try {
      GoogleSignin.revokeAccess();
      auth().signOut();
    } catch (error) {
      console.log(error)
    }
  }

  
 
 
  return (
    <View style={styles.container}>
      <ImageBackground blurRadius={2} source={background} resizeMode="cover" style={styles.bgImage}>
        

        <View style={styles.profileWrapper}>
            <Text style={styles.routeName}>Profile</Text>

            <TouchableOpacity onPress={() => {navigation.navigate('Menu', { currentRoute: 'Profile'})}} style={{position: 'absolute', left: 0}}>
              <IonIcon name="chevron-back-outline" color='white' size={26}/>
            </TouchableOpacity>

            <View style={{
              width: '100%',
              height: 5,
              backgroundColor: 'white',
              marginVertical: 20,
              borderRadius: 30,
            }}>


            </View>

            <View style={styles.cardsWrapper}>

            
                  <View style={styles.profileCard}>
                    <View style={{width: '80%', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'row', gap: 20}}>
                      <Image source={{ uri: user?.photoURL}} resizeMode='contain' style={{width: 50, height: 50, borderRadius: 5}} />
                      <View>
                        <Text style={{fontFamily: 'AsapMedium', color: 'white', fontSize: 16}}>{user?.displayName}</Text>
                        <Text style={{fontFamily: 'AsapRegular', color: 'white', fontSize: 14, opacity: .7}}>{user?.email}</Text>
                      </View>
                    </View>
                    </View>

                    <View style={styles.profileCard}>
                      <View style={{width: '80%', display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
                        <Text style={{fontFamily: 'AsapMedium', color: 'white', fontSize: 16}}>Bubbles collected:</Text>
                        <Text style={{fontFamily: 'AsapMedium', color: 'white', fontSize: 20}}>{bubblesCollected}</Text>
                      </View>
                      <View style={{width: '80%', display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
                        <Text style={{fontFamily: 'AsapMedium', color: 'white', fontSize: 16}}>Rewards redeemed:</Text>
                        <Text style={{fontFamily: 'AsapMedium', color: 'white', fontSize: 20}}>{rewardsRedeemed}</Text>
                      </View>
                    </View>


            </View>

            <TouchableOpacity onPress={() => {navigation.replace('ConfirmLogOut', { user: user, signOut})}} activeOpacity={.8} style={styles.googleButton}>
              <Text style={{fontFamily: 'AsapBold', fontSize: 22, color: 'white', textAlign: 'center', bottom: 1}}>Logout</Text>
            </TouchableOpacity>

        </View>
        <InternetCheck />
      </ImageBackground>
      
    </View>
  )
}

export default Profile

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  bgImage: {
    flex: 1,
    display: 'flex',
    alignItems: 'center',
  },

  routeName: {
    color: 'white',
    fontFamily: 'AsapBold',
    fontSize: 24,
  },

  cardsWrapper:{
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%'
  },

  profileWrapper: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: '80%',
    marginVertical: 50,
  },

  profileCard: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 20,
    paddingVertical: 30,
    backgroundColor: "rgba(255, 255, 255, 0.20)",
    width: '100%',
    borderRadius: 10,
    marginBottom: 10,
  },

  googleButton: {
    position: 'absolute',
    bottom: 0,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,

    backgroundColor: '#F1316B',
    width: '100%',
    height: 60,
    borderRadius: 10,
    borderBottomColor: 'white',
    borderBottomWidth: 5
  },

})