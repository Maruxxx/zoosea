import { Image, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import IonIcon from "@expo/vector-icons/Ionicons"



const background = require('../../../assets/media/bg/background.jpg')
const success = require('../../../assets/media/rewards/success.png')


const SuccessReward = ({navigation, route}) => {

  const { title } = route.params 


  return (
    <View style={styles.container}>
      <ImageBackground source={background} resizeMode="cover" style={styles.bgImage}>
      
        <View style={styles.headerWrapper}>
        
          <Text style={styles.routeName}>{title}</Text>

          <TouchableOpacity onPress={() => {navigation.replace('Home')}} style={{position: 'absolute', left: 0}}>
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
          <Image source={success} resizeMode='contain' style={{width: 250, height: 170}}/>
          <Text style={{fontFamily: 'AsapBold', fontSize: 42, color: 'white', marginVertical: 15}}>Congrats!</Text>
          <Text style={{fontFamily: 'AsapLight', fontSize: 22, color: 'white', textAlign: 'center'}}>You’ll receive an email about your gift!</Text>
        </View>

        </View>
      </ImageBackground>
    </View>
  )
}

export default SuccessReward

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