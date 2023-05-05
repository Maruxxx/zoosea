import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient'
import IonIcon from "@expo/vector-icons/Ionicons"
import { TouchableOpacity } from 'react-native'
import { ScrollView } from 'react-native'
import { TextInput } from 'react-native'

const Support = ({navigation}) => {
  
  const [subject, setSubject] = React.useState('')
  const [description, setDescription] = React.useState('')
  
  
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
  }
})