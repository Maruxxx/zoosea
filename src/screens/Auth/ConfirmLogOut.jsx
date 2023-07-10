import { ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'






const background = require('../../../assets/media/bg/background.jpg')


const ConfirmLogOut = ({navigation, route}) => {

  const { user, signOut } = route.params 


  return (
    <View style={styles.container}>
      <ImageBackground blurRadius={10} source={background} resizeMode="cover" style={styles.bgImage}>
              
        <View style={styles.congratsWrapper}>
          <Text style={{color: 'white', fontFamily: 'AsapBold', fontSize: 22, marginHorizontal: 25, textAlign: 'center', marginVertical: 10}}>Do you want to log out from this account ?</Text>

          <TouchableOpacity style={styles.confirm} onPress={() => {signOut();}}>
            <Text style={{fontFamily: 'AsapBold', fontSize: 22, color: 'white'}}>Log out</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.cancel} onPress={() => {navigation.replace('Profile', {user: user})}}>
            <Text style={{fontFamily: 'AsapBold', fontSize: 20, color: '#0037AF'}}>Cancel</Text>
          </TouchableOpacity>
        </View>

      </ImageBackground>
    </View>
  )
}

export default ConfirmLogOut

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
  },

  confirm: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F1316B',
    width: 250,
    paddingVertical: 15,
    marginVertical: 10,
    borderRadius: 8,
  },

  cancel: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    width: 250,
    paddingVertical: 15,
    borderRadius: 8,

  }

})