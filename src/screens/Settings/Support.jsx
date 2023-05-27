import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient'
import IonIcon from "@expo/vector-icons/Ionicons"
import { TouchableOpacity } from 'react-native'

const zooseaLogo = require('../../../assets/media/icons/zoosea-logo.png')

const Support = ({navigation}) => {



  return (
    <View style={styles.container}>
      <LinearGradient
        colors={['#0035AE','#1F85EF']}
        start={{ x: 0.5, y: 1}}
        end={{x: 0, y: 0}}
        style={{
            position: "absolute",
            top: 0,
            bottom: 0,
            left: 0, 
            right: 0
        }}
      />
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
                <Text style={{fontFamily: 'AsapLight', color: 'white', fontSize: 18}}>contact.zoosea@gmail.com</Text>
            </View>
        </View>


          <View>
            <Image source={zooseaLogo} resizeMode='contain' style={{width: 120, bottom: 25}}/>
          </View>
            

      </View>
  )
}

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