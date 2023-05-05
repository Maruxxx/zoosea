import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient'
import IonIcon from "@expo/vector-icons/Ionicons"
import { TouchableOpacity } from 'react-native'
import { ScrollView } from 'react-native'

const About = ({navigation}) => {
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
      <View style={styles.aboutWrapper}>
          <View style={styles.routeName}>
            <TouchableOpacity onPress={() => {navigation.goBack()}} style={{position: 'absolute', left: 0}}>
              <IonIcon name="chevron-back-outline" color='white' size={26}/>
            </TouchableOpacity>
            <Text style={{color: 'white', fontFamily: 'AsapBold', fontSize: 24,}}>About</Text>
          </View>
          <View style={{
            width: '100%',
            height: 5,
            backgroundColor: 'white',
            marginVertical: 20,
            borderRadius: 30,
          }}></View>
          <ScrollView style={{marginVertical: 10, flexGrow: 0.85}}>
            <Text style={styles.text}>
            <Text style={{fontFamily: 'AsapBold', fontSize: 24}}>Zoosea!</Text>{"\n"}Our app is designed to allow you to earn rewards and gifts by watching advertisements from our trusted third-party advertisers.

We are a team of passionate developers who believe in providing a fun and engaging experience for our users. Our goal is to make it easy for you to earn rewards and gifts, while also ensuring that your privacy and security are protected.

We work hard to ensure that our app is always up-to-date with the latest features and technologies, and we are committed to providing you with the best possible experience.

If you have any questions or feedback, please feel free to contact us at support.zoosea@gmail.com.{"\n"} {"\n"} Thank you for using our app!

            </Text>

          </ScrollView>
      </View>
    </View>
  )
}

export default About

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  aboutWrapper: {
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
  }
})