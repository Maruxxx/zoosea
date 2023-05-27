import { View, Text, Image, ScrollView, ImageBackground, StyleSheet, TouchableOpacity, RefreshControl } from 'react-native'
import React, {useCallback, useEffect,useState} from 'react'

import IonIcon from "@expo/vector-icons/Ionicons";


const background = require('../../assets/media/bg/background.jpg')
const sanara = require('../../assets/media/icons/sanara.png')
const whiteBubble = require('../../assets/media/icons/white-bubble.png')

import { db } from '../../firebase';
import { getDoc, doc, updateDoc } from "firebase/firestore/lite"; 


const Home = ({navigation, route}) => {

  const [bubblesCollected, setBubblesCollected] = useState(0)
  const { user } = route.params

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
          <TouchableOpacity onPress={() => navigation.navigate('Menu', { currentRoute: 'Home', user: user})}>
            <IonIcon name="menu-outline" color='white' size={30}/>
          </TouchableOpacity>
        </View>

        <View style={{position: 'absolute', top: 0}}>
          <Image source={sanara} resizeMode='contain' style={{width: 106, height: 173, }}/>
        </View>


      </ImageBackground>
    </ScrollView>
  )
}

export default Home

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
})