import { View, Text, TouchableOpacity, StyleSheet, ImageBackground } from 'react-native'
import React, { memo } from 'react'
import IonIcon from "@expo/vector-icons/Ionicons"


const background = require('../../assets/media/bg/background.jpg')

const Settings = memo(({navigation, route}) => {
  
  const { user } = route.params

  return (
    <View style={styles.container}>
      <ImageBackground source={background} resizeMode="cover" style={{flex: 1, width: "100%", display: 'flex', justifyContent:'center', alignItems: 'center'}}>
        
      <View style={styles.settingsWrapper}>
          <Text style={styles.routeName}>Settings</Text>
          <TouchableOpacity onPress={() => {navigation.navigate('Menu', { currentRoute: 'Settings'})}} style={{position: 'absolute', left: 0}}>
              <IonIcon name="chevron-back-outline" color='white' size={26}/>
            </TouchableOpacity>
          <View style={{
            width: '100%',
            height: 5,
            backgroundColor: 'white',
            marginVertical: 20,
            borderRadius: 30,
          }}></View>
        <View style={styles.buttonsFrame}>
          <TouchableOpacity activeOpacity={0.9} style={styles.setting} onPress={() => {navigation.navigate('HowItWorks')}}>
              <Text style={{fontFamily: 'AsapBold', fontSize: 20, color: '#0D3E9B'}}>How it works</Text>
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={0.9} style={styles.setting} onPress={() => {navigation.navigate('PrivacyPolicy')}}>
              <Text style={{fontFamily: 'AsapBold', fontSize: 20, color: '#0D3E9B'}}>Privacy Policy</Text>
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={0.9} style={styles.setting} onPress={() => {navigation.navigate('TermsOfService')}}>
              <Text style={{fontFamily: 'AsapBold', fontSize: 20, color: '#0D3E9B'}}>Terms of service</Text>
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={0.9} style={styles.setting} onPress={() => {navigation.navigate('Support')}}>
              <Text style={{fontFamily: 'AsapBold', fontSize: 20, color: '#0D3E9B'}}>Support</Text>
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={0.9} style={styles.setting} onPress={() => {navigation.navigate('About')}}>
              <Text style={{fontFamily: 'AsapBold', fontSize: 20, color: '#0D3E9B'}}>About</Text>
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={0.9} style={[styles.setting, {backgroundColor: '#F1316B'}]} onPress={() => {navigation.navigate('ConfirmDelete', {user: user})}}>
              <Text style={{fontFamily: 'AsapBold', fontSize: 20, color: 'white'}}>Delete Account</Text>
          </TouchableOpacity>
        </View>
      </View>

      </ImageBackground>
    </View>
  )
})

export default Settings

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },

  routeName: {
    color: 'white',
    fontFamily: 'AsapBold',
    fontSize: 24,
  },

  settingsWrapper: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: '80%',
    marginVertical: 50,
  },

  buttonsFrame: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%'
  }, 

  setting: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    width: '100%',
    paddingVertical: 15,
    marginVertical: 10,
    borderRadius: 8,
  }

})