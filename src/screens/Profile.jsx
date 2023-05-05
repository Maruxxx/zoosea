import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient';
import Button from '../components/Button';

const Profile = () => {
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
      <View style={styles.profileWrapper}>
          <Text style={styles.routeName}>Profile</Text>
          <View style={{
            width: '100%',
            height: 5,
            backgroundColor: 'white',
            marginVertical: 20,
            borderRadius: 30,
          }}></View>

          <View style={styles.profileCard}>
            <View style={{width: '80%', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'row', gap: 20}}>
              <View style={{width: 50, height: 50, backgroundColor: '#FF4163', borderRadius: 5}}></View>
              <View>
                <Text style={{fontFamily: 'AsapMedium', color: 'white', fontSize: 18}}>Full name</Text>
                <Text style={{fontFamily: 'AsapRegular', color: 'white', fontSize: 14}}>fulluser_email@gmail.com</Text>
              </View>
            </View>
            <View style={{width: '80%', height: 1, backgroundColor: 'white'}}></View>
            <View style={{width: '80%', display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
              <Text style={{fontFamily: 'AsapMedium', color: 'white', fontSize: 16}}>Bubbles collected:</Text>
              <Text style={{fontFamily: 'AsapMedium', color: 'white', fontSize: 20}}>200</Text>
            </View>
            <View style={{width: '80%', display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
              <Text style={{fontFamily: 'AsapMedium', color: 'white', fontSize: 16}}>Rewards redeemed:</Text>
              <Text style={{fontFamily: 'AsapMedium', color: 'white', fontSize: 20}}>0</Text>
            </View>
          </View>
          <View>
            <Button name="Log Out" color="white" font="AsapBold" size={20} backgroundColor="#FF4163" borderColor="white"/>
          </View>
      </View>
    </View>
  )
}

export default Profile

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

  profileWrapper: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: '80%',
    marginVertical: 50,
  },

  profileCard: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 20,
    paddingVertical: 30,
    backgroundColor: "rgba(255, 255, 255, 0.20)",
    width: '100%',
    borderRadius: 10,
    marginBottom: 20,
  }

})