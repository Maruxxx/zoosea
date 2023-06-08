import { View, Text, Image, ScrollView, ImageBackground, StyleSheet, TouchableOpacity, RefreshControl } from 'react-native'
import React, {useCallback, useEffect,useState} from 'react'

import IonIcon from "@expo/vector-icons/Ionicons";

import { RewardedAd, RewardedAdEventType, TestIds } from 'react-native-google-mobile-ads';


import { db } from '../../firebase';
import { getDoc, doc, updateDoc } from "firebase/firestore/lite"; 


import * as Linking from 'expo-linking';
import ActiveAdSquare from '../components/ActiveAdSquare';
import ActiveLink from '../components/ActiveLink';
import UnactiveLink from '../components/UnactiveLink';
import UnactiveAdSquare from '../components/UnactiveAdSquare';



const background = require('../../assets/media/bg/background.jpg')
const sanara = require('../../assets/media/icons/sanara.png')
const whiteBubble = require('../../assets/media/icons/white-bubble.png')
const btnBg = require('../../assets/media/bg/btn.jpg')

const octopus = require('../../assets/media/icons/fish1.png')
const notOctopus = require('../../assets/media/icons/fish1unactive.png')

const goldenFish = require('../../assets/media/icons/fish2.png')
const notGoldenFish = require('../../assets/media/icons/fish2unactive.png')


const exe = require('../../assets/media/links/exe.png')
const shrink = require('../../assets/media/links/shrink.png')

const cpx = require('../../assets/media/surveypartners/cpx.png')
const bitlabs = require('../../assets/media/surveypartners/bitlabs.png')


const ig = require('../../assets/media/icons/ig.png')
const tiktok = require('../../assets/media/icons/tiktok.png')
const fb = require('../../assets/media/icons/fb.png')


const zoosealogo = require('../../assets/media/icons/zoosea-logo.png')
const octopusHand = require('../../assets/media/icons/octopus-hand.png')


const Earn = ({navigation, route}) => {

  const [bubblesCollected, setBubblesCollected] = useState(0)
  const { user } = route.params

  const [igClaimed, setIgClaimed] = useState();
  const [tkClaimed, setTkClaimed] = useState();
  const [fbClaimed, setFbClaimed] = useState();


  const [Link1, setLink1] = useState(false);
  const [Link2, setLink2] = useState(true);


  const adUnitId = __DEV__ ? TestIds.REWARDED : 'ca-app-pub-3224909038709130/7223029991';

  const rewarded = RewardedAd.createForAdRequest(adUnitId, {
    requestNonPersonalizedAdsOnly: true,
  });
  
  
  useEffect( () => {
    fetchData();
  }, [])
  

  const fetchData = () => {
    async function getUserDoc() {
      try {
        const docRef = doc(db, "users", user.uid);
        const docSnap = await getDoc(docRef)
        if(docSnap.exists()) {
          setBubblesCollected(docSnap.data().bubbles)
          setFbClaimed(docSnap.data().facebook)
          setTkClaimed(docSnap.data().tiktok)
          setIgClaimed(docSnap.data().instagram)
        }
      } catch (e) {
        console.log(e)
      }
    }
    getUserDoc();

    async function unsubscribeEarned() {
      const docRef = doc(db, "users", user.uid);    
      const docSnap = await getDoc(docRef)    
      
      rewarded.addAdEventListener(
        RewardedAdEventType.EARNED_REWARD,
        reward => {
          updateDoc(docRef, "bubbles", docSnap.data().bubbles + 10);
          console.log('User earned reward of ', reward);
        },
      );
   } 

   rewarded.load();

   unsubscribeEarned()
  }

  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    fetchData();
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  }, []);


  const onTimeRenew = async() => {
    const docRef = doc(db, "users", user.uid);
    const docSnap = await getDoc(docRef);

    return await updateDoc(docRef, "")
  }



  const onClaimTen = async() => {
    const docRef = doc(db, "users", user.uid);    
    const docSnap = await getDoc(docRef);

    return await updateDoc(docRef, "bubbles", docSnap.data().bubbles + 10);
  }
  
  const onClaimFive = async() => {
    const docRef = doc(db, "users", user.uid);    
    const docSnap = await getDoc(docRef);

    return await updateDoc(docRef, "bubbles", docSnap.data().bubbles + 5);
  }

  const onClaimFinish = async(socialAccount) => {
    const docRef = doc(db, "users", user.uid);  
    return await updateDoc(docRef, `${socialAccount}`, true)
  }

  return (
    <ScrollView 
    refreshControl={
      <RefreshControl refreshing={refreshing} onRefresh={onRefresh} progressBackgroundColor='#0035AE' colors={['#fff']}/>
    }
    bounces={false} showsVerticalScrollIndicator={false} style={styles.container}>
      <ImageBackground blurRadius={2} source={background} resizeMode="cover" style={styles.bgImage}>

        
        <View style={styles.header}>
          <View style={styles.bubbleCountWrapper}>
            <Image source={whiteBubble} style={{height: 25, width: 25}}/>
            <Text style={{fontFamily: 'AsapBold', fontSize: 18, color: 'white'}}>
              {bubblesCollected > 999 ? `${bubblesCollected / 1000}k` : bubblesCollected}
              
              </Text>
          </View>
          <TouchableOpacity onPress={() => navigation.navigate('Menu', { currentRoute: 'Earn', user: user})}>
            <IonIcon name="menu-outline" color='white' size={30}/>
          </TouchableOpacity>
        </View>

        <View style={{position: 'absolute', top: 0}}>
          <Image source={sanara} resizeMode='contain' style={{width: 106, height: 173, }}/>
        </View>

        <View style={styles.WatchAndEarn}>

          <View style={styles.__text}>
            <Text style={{fontFamily: 'AsapBold', fontSize: 26, color: 'white'}}>Watch & Earn</Text>
            <Text style={{fontFamily: 'AsapRegular', fontSize: 14, color: 'white', opacity: 0.6}}>Earn bubbles by watching daily rewarded ads.</Text>
          </View>

          
          <View style={styles.adBannerCards}>
            <TouchableOpacity style={{borderBottomColor: 'white', borderBottomWidth: 5, borderRadius: 10}} onPress={() => {console.log(new Date(Date.now() + 60*60*5000))}}>
              <UnactiveAdSquare time="1 Hour" image={notOctopus}/>
            </TouchableOpacity>
            <TouchableOpacity style={{borderBottomColor: 'white', borderBottomWidth: 5, borderRadius: 10}}>
              <ActiveAdSquare name="Goldfish" image={goldenFish}/>
            </TouchableOpacity>
          </View>

        </View>

        <View style={styles.offerPartners}>

          <Image source={octopusHand} resizeMode='contain' style={{ width: 40, height: 75, position: 'absolute', left: 0, top: 50}}/>

          <View style={styles.__text}>
            <Text style={{fontFamily: 'AsapBold', fontSize: 26, color: 'white'}}>Download & Earn</Text>
            <Text style={{fontFamily: 'AsapRegular', fontSize: 14, color: 'white', opacity: 0.6}}>Earn 5 bubbles by completing every link.</Text>
          </View>
          
          <View style={{display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', gap: 15, marginBottom: 10}}>
            
            {
                Link1 ? (
                    <TouchableOpacity activeOpacity={0.8} style={styles.button}>
                        <ActiveLink image={exe} number="1"/>
                    </TouchableOpacity>
                ) : (
                    <TouchableOpacity activeOpacity={0.8} style={styles.button}>
                        <UnactiveLink time="24 Hrs" />
                    </TouchableOpacity>
                )
            }
            
            {
                Link2 ? (
                    <TouchableOpacity activeOpacity={0.8} style={styles.button}>
                        <ActiveLink image={exe} number="2"/>
                    </TouchableOpacity>
                ) : (
                    <TouchableOpacity activeOpacity={0.8} style={styles.button}>
                        <UnactiveLink time="24 Hrs" />
                    </TouchableOpacity>
                )
            }

          </View>
          
          <View style={{display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', gap: 15}}>

            <TouchableOpacity activeOpacity={0.8} style={styles.button}>
                <ActiveLink image={shrink} number="1"/>
            </TouchableOpacity>
            
            <TouchableOpacity activeOpacity={0.8} style={styles.button}>
                <ActiveLink image={shrink} number="2"/>
            </TouchableOpacity>

          </View>

        </View>

        <View style={styles.surveyPartners}>
         
         <View style={styles.__text}>
            <Text style={{fontFamily: 'AsapBold', fontSize: 26, color: 'white'}}>Surveys Partners</Text>
            <Text style={{fontFamily: 'AsapRegular', fontSize: 14, color: 'white', opacity: 0.6}}>Earn bubbles by taking some surveys.</Text>
          </View>
          
          <View style={{display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', gap: 10, marginBottom: 10}}>
            <TouchableOpacity onPress={() => {setCpxActive(true)}} activeOpacity={0.8} style={styles.button}>
              <Image resizeMode='contain' source={cpx} style={{position: 'absolute', zIndex: 10, width: 90}} />
              <ImageBackground resizeMode='cover' source={btnBg} style={{width: '100%', height: '100%', borderRadius: 10}} />
            </TouchableOpacity>
            
            <TouchableOpacity activeOpacity={0.8} style={styles.button}>
              <Image resizeMode='contain' source={bitlabs} style={{position: 'absolute', zIndex: 10, width: 70}} />
              <ImageBackground resizeMode='cover' source={btnBg} style={{width: '100%', height: '100%', borderRadius: 10}} />
            </TouchableOpacity>
          </View>

        </View>

        <View style={styles.followUs}>
         
         <View style={styles.__text}>
            <Text style={{fontFamily: 'AsapBold', fontSize: 26, color: 'white'}}>Follow us!</Text>
            <Text style={{fontFamily: 'AsapRegular', fontSize: 14, color: 'white', opacity: 0.6, paddingHorizontal: 40, textAlign: 'center'}}>Stay updated by following us on our
            social media accounts.</Text>
          </View>
          
          <View style={styles.socialMediaButtons}>

            <View style={styles.ig}>
              <View style={styles.iconHolder}>
                <Image source={ig} resizeMode='contain' style={{ width: 40, height: 40}}/>
              </View>
              {
                igClaimed ? (
                  <View onTouchStart={() => {Linking.openURL('https://www.instagram.com/zoosea.official/')}} style={styles.bubbleCount}>
                    <IonIcon name="checkmark-outline" color='white' size={25}/>
                  </View>
                ) : (
                <TouchableOpacity 
                onPress={() => {Linking.openURL('https://www.instagram.com/zoosea.official/'), setTimeout(() => {
                  onClaimFinish("instagram")
                  onClaimFive();
                }, 5000);}} 
                style={styles.bubbleCount}>
                      <Image source={whiteBubble} style={{height: 20, width: 20}}/>
                      <Text style={{fontFamily: 'AsapBold', fontSize: 18, color: 'white'}}>5</Text>                  
                </TouchableOpacity>
                )
              }
            </View>

            <View style={styles.tiktok}>
              <View style={styles.titkokIconHolder}>
                <Image source={tiktok} resizeMode='contain' style={{ width: 60, height: 60}}/>
              </View>
              {
                tkClaimed ? (
                  <View onTouchStart={() => {Linking.openURL('https://www.tiktok.com/@zoosea_')}} style={styles.bubbleCount}>
                    <IonIcon name="checkmark-outline" color='white' size={25}/>
                  </View>
                ) : (
                <TouchableOpacity 
                  onPress={() => {Linking.openURL('https://www.tiktok.com/@zoosea_'), setTimeout(() => {
                    onClaimFinish("tiktok")
                    onClaimTen();
                  }, 5000);}} 
                  style={styles.tiktokBubbleCount}>
                  <Image source={whiteBubble} style={{height: 25, width: 25}}/>
                  <Text style={{fontFamily: 'AsapBold', fontSize: 18, color: 'white'}}>10</Text>
                </TouchableOpacity>
                )
              }
            </View>
            
            <View style={styles.ig}>
              <View style={styles.iconHolder}>
                <Image source={fb} resizeMode='contain' style={{ width: 23, height: 40}}/>
              </View>
              
              {
                fbClaimed ? (
                  <View onTouchStart={() => {Linking.openURL('https://www.facebook.com/profile.php?id=100092825263228')}} style={styles.bubbleCount}>
                    <IonIcon name="checkmark-outline" color='white' size={25}/>
                  </View>
                ) : (
                <TouchableOpacity 
                onPress={() => {Linking.openURL('https://www.facebook.com/profile.php?id=100092825263228'), setTimeout(() => {
                  onClaimFinish("facebook")
                  onClaimFive();
                }, 5000);}} 
                style={styles.bubbleCount}>
                  <Image source={whiteBubble} style={{height: 20, width: 20}}/>
                  <Text style={{fontFamily: 'AsapBold', fontSize: 18, color: 'white'}}>5</Text>
                </TouchableOpacity>
                )
              }
            </View>
            
          </View>


          <View style={styles.footer}>
         
         <View style={styles.footerText}>
            <Image source={zoosealogo} resizeMode='contain' style={{ width: 100, height: 22, marginLeft: 5}}/>
            <Text style={{fontFamily: 'AsapRegular', fontSize: 14, color: 'white'}}>Zoosea | All Rights Reserved</Text>
            <Text style={{fontFamily: 'AsapRegular', fontSize: 14, color: 'white', opacity: 0.5}}>© Copyright 2023</Text>
          </View>

        </View>

        </View>

      </ImageBackground>
    </ScrollView>
  

  )
}

export default Earn

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  bgImage: {
    flex: 1,
    display: 'flex',
    alignItems: 'center',
  },

  header: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 40,
    width: '80%',
    height: 180
  },

  bubbleCountWrapper: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 10
  },

  VisitAndLearn: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },

  webBanner:{
    width: '90%',
    height: 180,
  }, 

  WatchAndEarn: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 4,
    width: '100%',
  },

  __text: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 30,
    gap: 5
  },

  offerPartners: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 4,
    width: '100%',
  },

  button: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#0D3E9B',
    borderRadius: 10,
    width: 140,
    height: 60,
    borderBottomColor: 'white',
    borderBottomWidth: 2
  }, 

  socialMediaButtons: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 20,
    gap: 15
  },

  ig: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 5,
    width: 80,
  },

  iconHolder: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.20)',
    borderRadius: 5,
    width: '100%',
    height: 90
  },

  bubbleCount: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    gap: 10,
    paddingVertical: 10,
    width: '100%',
    backgroundColor: 'rgba(255, 255, 255, 0.20)',
    borderRadius: 5
  },

  tiktok: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 5,
    width: 110,
  },

  titkokIconHolder: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.20)',
    borderRadius: 5,
    width: '100%',
    height: 130
  },

  tiktokBubbleCount: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    gap: 10,
    paddingVertical: 10,
    width: '100%',
    backgroundColor: 'rgba(255, 255, 255, 0.20)',
    borderRadius: 5
  },

  footer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 50
  },

  footerText: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10
  },


  adBannerCards: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 20
  }
})