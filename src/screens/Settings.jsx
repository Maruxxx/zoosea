import { View, Text, TouchableOpacity, StyleSheet, ImageBackground } from 'react-native'
import React from 'react'
import Button from '../components/Button';
import IonIcon from "@expo/vector-icons/Ionicons"


const background = require('../../assets/media/bg/background.jpg')

const Settings = ({navigation}) => {
  


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
          <View onTouchStart={() => {navigation.navigate('PrivacyPolicy')}}>
            <Button name="Privacy Policy" color="#0D3E9B" font="AsapBold" size={20} backgroundColor="white" borderColor="#0D3E9B"/>
          </View>
          <View onTouchStart={() => {navigation.navigate('TermsOfService')}}>
            <Button name="Terms of service" color="#0D3E9B" font="AsapBold" size={20} backgroundColor="white" borderColor="#0D3E9B"/>
          </View>
          <View onTouchStart={() => {navigation.navigate('Support')}}>
            <Button name="Support" color="#0D3E9B" font="AsapBold" size={20} backgroundColor="white" borderColor="#0D3E9B"/>
          </View>
          <View onTouchStart={() => {navigation.navigate('About')}}>
            <Button name="About" color="#0D3E9B" font="AsapBold" size={20} backgroundColor="white" borderColor="#0D3E9B"/>
          </View>
        </View>
      </View>
      </ImageBackground>
    </View>
  )
}

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
    gap: 15,
  }, 

})