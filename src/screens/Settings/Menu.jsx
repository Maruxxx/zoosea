import { StyleSheet, Text, View, ImageBackground, TouchableOpacity } from 'react-native'
import React from 'react'
import IonIcon from "@expo/vector-icons/Ionicons"



const background = require('../../../assets/media/bg/background.jpg')


const Menu = ({ navigation, route }) => {

    const { currentRoute, user } = route.params;
  
    return (
    <View style={styles.container}>
      <ImageBackground source={background} resizeMode="cover" style={{flex: 1, width: "100%", display: 'flex', justifyContent:'center', alignItems: 'center'}}>
        
        <TouchableOpacity style={styles.close} onPress={() => navigation.navigate(currentRoute == 'Profile' || 'Settings' ? 'Home' : `${currentRoute}`)}>
        <IonIcon name="close-outline" color='white' size={30}/>
        </TouchableOpacity>

        <View style={styles.menuItems}>
            <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                <Text style={currentRoute == 'Home' ? styles.activeRoute : styles.notActiveRoute}>Home</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Earn')}>
                <Text style={currentRoute == 'Earn' ? styles.activeRoute : styles.notActiveRoute}>Earn</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Rewards', {user})}>
                <Text style={currentRoute == 'Rewards' ? styles.activeRoute : styles.notActiveRoute}>Rewards</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Profile', {user})}>
                <Text style={currentRoute == 'Profile' ? styles.activeRoute : styles.notActiveRoute}>Profile</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Settings')}>
                <Text style={currentRoute == 'Settings' ? styles.activeRoute : styles.notActiveRoute}>Settings</Text>
            </TouchableOpacity>
        </View>

        </ImageBackground>
    </View>
  )
}

export default Menu

const styles = StyleSheet.create({
    container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },

  close: {
    position: 'absolute',
    top: 40,
    right: 40
  },

  menuItems:{
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10
  },

  activeRoute: {
    fontFamily: "AsapBold",
    fontSize: 26,
    color: 'white'
  },

  notActiveRoute: {
    fontFamily: "AsapRegular",
    fontSize: 26,
    color: 'white'
  }
})