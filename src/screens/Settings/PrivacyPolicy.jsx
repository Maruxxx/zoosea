import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient'
import IonIcon from "@expo/vector-icons/Ionicons"
import { TouchableOpacity } from 'react-native'
import { ScrollView } from 'react-native'

const PrivacyPolicy = ({navigation}) => {
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
      <View style={styles.privacyPolicyWrapper}>
          <View style={styles.routeName}>
            <TouchableOpacity onPress={() => {navigation.goBack()}} style={{position: 'absolute', left: 0}}>
              <IonIcon name="chevron-back-outline" color='white' size={26}/>
            </TouchableOpacity>
            <Text style={{color: 'white', fontFamily: 'AsapBold', fontSize: 24,}}>Privacy Policy</Text>
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
            <Text style={{fontFamily: 'AsapBold', fontSize: 16}}>Thank you for using Zoosea!</Text> {"\n"}  Here is our short privacy policy regarding ad rewards and gifts earning:

            We may display advertisements in our mobile application from third-party advertisers. These advertisers may collect certain information about you, such as your device identifier and location, in order to serve relevant ads. We do not control the information collected by these advertisers and are not responsible for their privacy practices.

            In order to offer ad rewards and gifts earning, we may collect certain information about you, such as your name, email address, and device identifier. This information may be used to track your progress in earning rewards and gifts and to deliver those rewards and gifts to you. We will never sell or share this information with third parties for their own marketing purposes.

            If you have any questions or concerns about our privacy policy, please contact us at support.zoosea@gmail.com.

            </Text>

          </ScrollView>
      </View>
    </View>
  )
}

export default PrivacyPolicy

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  privacyPolicyWrapper: {
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