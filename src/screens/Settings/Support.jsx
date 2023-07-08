import { ImageBackground, StyleSheet, Text, View } from 'react-native'
import React, { memo } from 'react'
import IonIcon from "@expo/vector-icons/Ionicons"
import { TouchableOpacity } from 'react-native'


const background = require('../../../assets/media/bg/background.jpg')


const Support = memo(({navigation}) => {

  return (
    <View style={styles.container}>
      <ImageBackground source={background} resizeMode="cover" style={{flex: 1, width: "100%", display: 'flex', justifyContent:'center', alignItems: 'center'}}>
        <View style={styles.supportWrapper}>
          <View style={styles.routeName}>
              <TouchableOpacity onPress={() => {navigation.goBack()}} style={{position: 'absolute', left: 0}}>
                <IonIcon name="chevron-back-outline" color='white' size={26}/>
              </TouchableOpacity>
              <Text style={{color: 'white', fontFamily: 'AsapBold', fontSize: 24,}}>Support</Text>
          </View>
          <View style={{
              width: '100%',
              height: 5,
              backgroundColor: 'white',
              marginVertical: 20,
              borderRadius: 30,
            }}>
          </View>
          

            <View style={styles.profileCard}>
                <View style={{width: '80%', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'row', gap: 10}}>
                  <IonIcon name="mail" size={35} color='white'/>
                  <Text style={{fontFamily: 'AsapBold', color: 'white', fontSize: 26}}>Email us!</Text>
                </View>
                <Text style={{fontFamily: 'AsapLight', color: 'white', fontSize: 18}}>contact@zoosea.net</Text>
            </View>
        </View>
            
          </ImageBackground>
      </View>
  )
})

export default Support

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  supportWrapper: {
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
    lineHeight: 25
  },

  contactForm: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    gap: 15
  },

  profileCard: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 30,
    backgroundColor: "rgba(255, 255, 255, 0.20)",
    width: '100%',
    borderRadius: 10,
    marginBottom: 10,
  },
})