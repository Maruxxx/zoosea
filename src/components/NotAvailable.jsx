import { Image, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import IonIcon from "@expo/vector-icons/Ionicons"



const background = require('../../assets/media/bg/background.jpg')
const success = require('../../assets/media/rewards/success.png')


const NotAvailable = ({navigation, route}) => {

  const { title } = route.params 


  return (
    <View style={styles.container}>
      <ImageBackground source={background} resizeMode="cover" style={styles.bgImage}>
      
        <View style={styles.headerWrapper}>
        
          <Text style={styles.routeName}>{title}</Text>

          <TouchableOpacity onPress={() => {navigation.goBack()}} style={{position: 'absolute', left: 0}}>
            <IonIcon name="close-outline" color='white' size={32}/>
          </TouchableOpacity>

          <View style={{
            width: '100%',
            height: 5,
            backgroundColor: 'white',
            marginVertical: 20,
            borderRadius: 30,
          }}>

          </View>
        
        <View style={styles.congratsWrapper}>
          <Text style={{fontFamily: 'AsapBold', fontSize: 30, color: 'white', marginVertical: 5}}>Not Available!</Text>
          <Text style={{fontFamily: 'AsapLight', fontSize: 20, color: 'white', textAlign: 'center'}}>We'll notify you when it will be available.</Text>
        </View>

        </View>
      </ImageBackground>
    </View>
  )
}

export default NotAvailable

const styles = StyleSheet.create({
  container:{
    flex: 1,
  },

  bgImage:{
    flex: 1,
    display: 'flex',
    justifyContent:'center',
    alignItems: 'center',
    width: "100%"
  },

  headerWrapper: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: '80%',
    marginVertical: 50,
  },

  routeName: {
    color: 'white',
    fontFamily: 'AsapBold',
    fontSize: 24,
  },

  congratsWrapper: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '80%'
  }

})