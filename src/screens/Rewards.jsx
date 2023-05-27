import { View, Text, StyleSheet, ScrollView, ImageBackground, Image, TouchableOpacity, RefreshControl } from 'react-native'
import React, { useCallback, useEffect, useState } from 'react'
import IonIcon from "@expo/vector-icons/Ionicons"

import { getDoc, doc, updateDoc } from "firebase/firestore/lite"; 
import { db } from '../../firebase'


const background = require('../../assets/media/bg/background.jpg')

const whiteBubble = require('../../assets/media/icons/white-bubble.png')


const ff = require('../../assets/media/rewards/ff.png')
const gp = require('../../assets/media/rewards/gp.png')
const nf = require('../../assets/media/rewards/nf.png')
const ppl = require('../../assets/media/rewards/ppl.png')
const ps = require('../../assets/media/rewards/ps.png')
const pubg = require('../../assets/media/rewards/pubg.png')
const steam = require('../../assets/media/rewards/steam.png')
const xbox = require('../../assets/media/rewards/xbox.png')

const shirt = require('../../assets/media/rewards/shirt.png')
const mug = require('../../assets/media/rewards/mug.png')


const Rewards = ({navigation, route}) => {

  const [bubblesCollected, setBubblesCollected] = useState()

  const { user } = route.params

  const [popUp, setPopUp] = useState(false)

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
        }
      } catch (e) {
        console.log(e)
      }
    }
    getUserDoc();
  }
  

  const insufficiantPopUp = () => {
    setPopUp(true);
    setTimeout(() => {
      setPopUp(false)
    }, 3500)
  }

  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    fetchData();
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  }, []);


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
          <TouchableOpacity onPress={() => navigation.navigate('Menu', { currentRoute: 'Rewards'})}>
            <IonIcon name="menu-outline" color='white' size={30}/>
          </TouchableOpacity>
        </View>

        <View style={styles.rewards}>
          <View style={styles.__text}>
            <Text style={{fontFamily: 'AsapBold', fontSize: 28, color: 'white'}}>Rewards</Text>
            <Text style={{fontFamily: 'AsapRegular', fontSize: 14, color: 'white', opacity: 0.6, paddingHorizontal: 40, textAlign: 'center'}}>Redeem your rewards by choosing the option that corresponds.</Text>
          </View>

          <View style={styles.packs}>
            
              <TouchableOpacity onPress={() => {navigation.navigate('RewardDetail', {image: gp, title: 'Google Play', bubblesCollected})}}>
                <Image source={gp} resizeMode='contain' style={styles.pack}/>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => {navigation.navigate('RewardDetail', {image: ppl, title: 'PayPal', bubblesCollected})}}>
                <Image source={ppl} resizeMode='contain' style={styles.pack}/>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => {navigation.navigate('RewardDetail', {image: nf, title: 'Netflix', bubblesCollected})}}>
                <Image source={nf} style={styles.pack}/>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => {navigation.navigate('RewardDetail', {image: steam, title: 'Steam', bubblesCollected})}}>
                <Image source={steam} style={styles.pack}/>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => {navigation.navigate('RewardDetail', {image: ps, title: 'PlayStation', bubblesCollected})}}>
                <Image source={ps} style={styles.pack}/>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => {navigation.navigate('RewardDetail', {image: xbox, title: 'Xbox', bubblesCollected})}}>
                <Image source={xbox} style={styles.pack}/>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => {navigation.navigate('RewardDetail', {image: ff, title: 'Free Fire', bubblesCollected})}}>
                <Image source={ff} style={styles.pack}/>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => {navigation.navigate('RewardDetail', {image: pubg, title: 'PUBG', bubblesCollected})}}>
                <Image source={pubg} style={styles.pack}/>
              </TouchableOpacity>
          
          </View>

          <View style={styles.__text}>
            <Text style={{fontFamily: 'AsapBold', fontSize: 28, color: 'white'}}>Zoosea Prizes</Text>
            <Text style={{fontFamily: 'AsapRegular', fontSize: 14, color: 'white', opacity: 0.6, paddingHorizontal: 40, textAlign: 'center'}}>You can spend your bubbles on Zoosea’s
customized shirts or mugs.</Text>
          </View>

          <View style={{
              display: popUp ? 'flex' : 'none' ,
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: 'rgba(241, 49, 109, 0.80)',
              width: '80%',
              height: 50,
              zIndex: 100,
              borderRadius: 10,
              
            }}>
              <View style={{display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'row', gap: 10}}>
                <IonIcon name="information-circle-outline" color='white' size={25} />
                <Text style={{fontFamily: 'AsapMedium', color: 'white', fontSize: 20, marginTop: -3}}>Insufficiant Bubbles!</Text>
              </View>
            </View>



          <View style={styles.prizes}>


                <View style={styles.prize}>
                <View style={styles.iconHolder}>
                  <Image source={mug} resizeMode='contain' style={{ width: 90}}/>
                </View>
                <TouchableOpacity onPress={() => {
                  if(bubblesCollected >= 1500) {
                    navigation.navigate('RewardDetail')
                  } else {
                    insufficiantPopUp();
                  }
                }} activeOpacity={.6} style={styles.bubbleCount}>
                  <Image source={whiteBubble} style={{height: 20, width: 20}}/>
                  <Text style={{fontFamily: 'AsapBold', fontSize: 18, color: 'white'}}>1500</Text>
                </TouchableOpacity>
                </View>
            
                <View style={styles.prize}>
                <View style={styles.iconHolder}>
                  <Image source={shirt} resizeMode='contain' style={{ width: 90}}/>
                </View>
                <TouchableOpacity activeOpacity={.6} style={styles.bubbleCount}>
                  <Image source={whiteBubble} style={{height: 20, width: 20}}/>
                  <Text style={{fontFamily: 'AsapBold', fontSize: 18, color: 'white'}}>2500</Text>
                </TouchableOpacity>
                </View>

          </View>

        </View>

      </ImageBackground>
    </ScrollView>
  )
}

export default Rewards

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
  },

  bubbleCountWrapper: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 10
  },

  rewards: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 4,
    width: '100%'
  },

  __text: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 25,
    gap: 5,
  },

  packs: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    gap: 10
  },

  pack: {
    borderRadius: 5,
    height: 55,
    width: 130
  },

  prizes: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    width: '80%',
    gap: 10,
    marginTop: 25,
    marginBottom: 50
  },

  
  prize: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 5,
    width: 140,
    height: 170,
  },

  iconHolder: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.20)',
    borderRadius: 5,
    width: '100%',
    height: 150
  },

  bubbleCount: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    gap: 10,
    paddingVertical: 10,
    backgroundColor: 'rgba(255, 255, 255, 0.20)',
    borderRadius: 5,
    width: '100%',
  },
})