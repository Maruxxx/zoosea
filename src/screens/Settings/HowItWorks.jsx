import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import IonIcon from "@expo/vector-icons/Ionicons"
import { TouchableOpacity } from 'react-native'
import { ScrollView } from 'react-native'

const background = require('../../../assets/media/bg/background.jpg')



const HowItWorks = ({navigation}) => {
  return (
    <View style={styles.container}>
    <ImageBackground source={background} resizeMode="cover" style={{flex: 1, width: "100%", display: 'flex', justifyContent:'center', alignItems: 'center'}}>
      <View style={styles.privacyPolicyWrapper}>
          <View style={styles.routeName}>
            <TouchableOpacity onPress={() => {navigation.goBack()}} style={{position: 'absolute', left: 0}}>
              <IonIcon name="chevron-back-outline" color='white' size={26}/>
            </TouchableOpacity>
            <Text style={{color: 'white', fontFamily: 'AsapBold', fontSize: 24,}}>How it works</Text>
          </View>
          <View style={{
            width: '100%',
            height: 5,
            backgroundColor: 'white',
            marginVertical: 20,
            borderRadius: 30,
          }}></View>
          <ScrollView style={{marginVertical: 10}}>
            <Text style={styles.text}>
              <Text style={{fontFamily: 'AsapBold', fontSize: 24, color: 'white'}}>1 - Home</Text> 
            
              {"\n"} {"\n"}  Welcome to Zoosea, your ultimate source for staying up to date with the latest news of oceans world,  simply navigate to our website by clicking on any article you like as you can see,  Where you'll find a carefully curated selection of articles, pictures, and captivating visuals to keep you informed and inspired with the secrets that lie beneath the waves.

            </Text>

            <Text style={styles.text}>
              <Text style={{fontFamily: 'AsapBold', fontSize: 24, color: 'white'}}>2 - Earn</Text> 
            
              {"\n"} {"\n"}  Zoosea, where you can dive into the mesmerizing world of the oceans while earning money In our mobile app, we provide four exciting ways for you to earn money.
              {"\n"} <Text style={{fontFamily: 'AsapBold', fontSize: 18, color: 'white'}}>1- Watch & Earn :</Text>
              {"\n"} 
            </Text>

          </ScrollView>
      </View>
      </ImageBackground>
    </View>
  )
}

export default HowItWorks

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
      },
      privacyPolicyWrapper: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        width: '80%',
        marginVertical: 50,
      },
    
      routeName: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%'
      },
    
      text:{
        textAlign: 'center',
        color: 'white',
        fontFamily: 'AsapLight',
        lineHeight: 25,
        marginVertical: 10
      }
})