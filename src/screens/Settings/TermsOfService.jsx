import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient'
import IonIcon from "@expo/vector-icons/Ionicons"
import { TouchableOpacity } from 'react-native'
import { ScrollView } from 'react-native'

const TermsOfService = ({navigation}) => {
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
      <View style={styles.TermsOfServiceWrapper}>
          <View style={styles.routeName}>
            <TouchableOpacity onPress={() => {navigation.goBack()}} style={{position: 'absolute', left: 0}}>
              <IonIcon name="chevron-back-outline" color='white' size={26}/>
            </TouchableOpacity>
            <Text style={{color: 'white', fontFamily: 'AsapBold', fontSize: 24,}}>Terms of service</Text>
          </View>
          <View style={{
            width: '100%',
            height: 5,
            backgroundColor: 'white',
            marginVertical: 20,
            borderRadius: 30,
          }}></View>
          <ScrollView style={{marginVertical: 10}}>
            <Text style={styles.text}>
            <Text style={{fontFamily: 'AsapSemiBold', fontSize: 14}}>Thank you for using our application! By accessing and using our application, you agree to be bound by the following terms and conditions:</Text>{"\n"} {"\n"}

1. Ad Rewards and Gifts Earning: {"\n"} Our mobile application allows you to earn rewards and gifts by watching advertisements. The rewards and gifts are provided by third-party advertisers and are subject to their terms and conditions. We do not guarantee the availability of any particular reward or gift. {"\n"} {"\n"}

2. Use of Information: {"\n"} We may collect certain information about you, such as your name, email address, and device identifier, in order to offer ad rewards and gifts earning. We will only use this information for the purpose of delivering rewards and gifts to you and will never sell or share it with third parties for their own marketing purposes. {"\n"} {"\n"}

3. Prohibited Activities: {"\n"} You agree not to use our mobile application for any illegal or unauthorized purpose. You also agree not to interfere with the operation of our mobile application or with the use of the ad rewards and gifts earning feature by others. {"\n"} {"\n"}

4. Modification of Terms: {"\n"} We reserve the right to modify these terms of service at any time. Your continued use of our mobile application after any such modification constitutes your acceptance of the modified terms. {"\n"} {"\n"}

5. Termination: {"\n"} We reserve the right to terminate your access to our mobile application at any time for any reason, including without limitation, any violation of these terms of service. {"\n"} {"\n"}

If you have any questions or concerns about our privacy policy, please contact us at contact@zoosea.net.

            </Text>

          </ScrollView>
      </View>
    </View>
  )
}

export default TermsOfService

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  TermsOfServiceWrapper: {
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