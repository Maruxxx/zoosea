import { View, Text, Image, ScrollView, ImageBackground, StyleSheet, TouchableOpacity, RefreshControl, FlatList } from 'react-native'
import React, {useCallback, useEffect,useRef,useState} from 'react'

import IonIcon from "@expo/vector-icons/Ionicons";


const background = require('../../assets/media/bg/background.jpg')
const sanara = require('../../assets/media/icons/sanara.png')
const whiteBubble = require('../../assets/media/icons/white-bubble.png')

import { db } from '../../firebase';
import { getDoc, doc, updateDoc } from "firebase/firestore/lite"; 
import GeneralArticle from '../components/GeneralArticle';
import RulesArticle from '../components/RulesArticle';


const Home = ({navigation, route}) => {

  const [bubblesCollected, setBubblesCollected] = useState(0)
  const { user, latestNews, rules, general } = route.params


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

  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    fetchData();
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  }, []);


  const renderItem = ({item}) => (
    <RulesArticle key={item.id} title={item.title} desc={item.desc} image={item.image} url={item.url} />
    )

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





        <View style={styles.__text}>
            <Text style={{fontFamily: 'AsapBold', fontSize: 26, color: 'white'}}>Oceanic Wisdom</Text>
            <Text style={{fontFamily: 'AsapRegular', fontSize: 14, color: 'white', opacity: 0.6}}>Earn bubbles by watching daily rewarded ads.</Text>
          </View>


              <FlatList 
              contentContainerStyle={{marginHorizontal: 20}}
              data={rules}
              renderItem={renderItem}
              keyExtractor={item => item.id}
              horizontal={true}
              />



        <View style={styles.__text}>
            <Text style={{fontFamily: 'AsapBold', fontSize: 26, color: 'white'}}>Splash Of Knowledge</Text>
            <Text style={{fontFamily: 'AsapRegular', fontSize: 14, color: 'white', opacity: 0.6}}>Earn bubbles by watching daily rewarded ads.</Text>
          </View>


        {
          general.map((item) => (
            <GeneralArticle key={item.id} title={item.title} desc={item.desc} image={item.image} url={item.url}/>
          ))
        }


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

  __text: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 30,
    gap: 5
  },

})