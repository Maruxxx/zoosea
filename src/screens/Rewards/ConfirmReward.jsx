import { Image, ImageBackground, StyleSheet, Text, Touchable, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import IonIcon from "@expo/vector-icons/Ionicons"

import { getDoc, doc, updateDoc } from "firebase/firestore/lite"; 
import { db } from '../../../firebase'



const background = require('../../../assets/media/bg/background.jpg')


const ConfirmReward = ({navigation, route}) => {

  const { title, user, selected } = route.params 

  const [bubs, setBubs] = useState()


  useEffect(() => {
    if (selected == 1 ) {
        setBubs(4000)
    } else if (selected == 2) {
        setBubs(10000)
    } else if (selected == 3) {
        setBubs(18500)
    } else if (selected == 4) {
        setBubs(30000)
    }
  }, [])




  const accountSubtraction = async(x) => {
    const docRef = doc(db, "users", user.uid)
    const docSnap = await getDoc(docRef)

    return await updateDoc(docRef, "bubbles", {
      bubbles: docSnap.data().bubbles - x,
      rewards: docSnap.data().rewards + 1
    });
  }


  return (
    <View style={styles.container}>
      <ImageBackground blurRadius={10} source={background} resizeMode="cover" style={styles.bgImage}>
              
        <View style={styles.congratsWrapper}>
          <Text style={{color: 'white', fontFamily: 'AsapBold', fontSize: 22, marginHorizontal: 25, textAlign: 'center', marginVertical: 10}}>Do you want to confirm your {title} reward redeem ?</Text>

          <TouchableOpacity style={styles.confirm} onPress={() => {accountSubtraction(bubs) ;navigation.navigate('SuccessReward', {title})}}>
            <Text style={{fontFamily: 'AsapBold', fontSize: 24, color: '#0037AF'}}>Confirm</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.cancel} onPress={() => {navigation.goBack()}}>
            <Text style={{fontFamily: 'AsapBold', fontSize: 20, color: 'white'}}>Cancel</Text>
          </TouchableOpacity>
        </View>

      </ImageBackground>
    </View>
  )
}

export default ConfirmReward

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
    backgroundColor: 'white',
    width: 250,
    paddingVertical: 20,
    marginVertical: 20,
    borderRadius: 8,
  },

  cancel: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F1316B',
    width: 250,
    paddingVertical: 20,
    borderRadius: 8,

  }

})