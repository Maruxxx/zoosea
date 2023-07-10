import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import IonIcon from "@expo/vector-icons/Ionicons"
import { TouchableOpacity } from 'react-native'
import { ScrollView } from 'react-native'

const background = require('../../../assets/media/bg/background.jpg')



const HowItWorks = ({navigation}) => {
  return (
    <View style={styles.container}>
    <ImageBackground source={background} resizeMode="cover" style={{flex: 1, width: "100%", display: 'flex', justifyContent:'center', alignItems: 'center'}}>
      <View style={styles.privacyPolicyWrapper}>
          <View style={styles.routeName}>
            <TouchableOpacity onPress={() => {navigation.goBack()}} style={{position: 'absolute', left: 0}}>
              <IonIcon name="chevron-back-outline" color='white' size={26}/>
            </TouchableOpacity>
            <Text style={{color: 'white', fontFamily: 'AsapBold', fontSize: 24,}}>How it works</Text>
          </View>
          <View style={{
            width: '100%',
            height: 5,
            backgroundColor: 'white',
            marginVertical: 20,
            borderRadius: 30,
          }}></View>
          <ScrollView showsVerticalScrollIndicator={false} style={{marginVertical: 10}}>
            <Text style={styles.text}>
              <Text style={{fontFamily: 'AsapBold', fontSize: 24, color: 'white'}}>1 - Home</Text> 
            
              {"\n"} {"\n"}  Welcome to Zoosea, your ultimate source for staying up to date with the latest news of oceans world,  simply navigate to our website by clicking on any article you like as you can see,  Where you'll find a carefully curated selection of articles, pictures, and captivating visuals to keep you informed and inspired with the secrets that lie beneath the waves.

            </Text>

            <Text style={styles.text}>
              <Text style={{fontFamily: 'AsapBold', fontSize: 24, color: 'white'}}>2 - Earn</Text> 
            
              {"\n"} {"\n"}  Zoosea, where you can dive into the mesmerizing world of the oceans while earning money In our mobile app, we provide four exciting ways for you to earn real prizes.
              {"\n"} {"\n"} <Text style={{fontFamily: 'AsapMedium', fontSize: 18, color: 'white'}}>Watch & Earn :</Text>
              {"\n"} {"\n"} Through our Octopus Ads feature. By simply interacting with an Octopus Ad, you can earn 10 bubbles every hour. It's a fun and rewarding way to stay engaged, we also offer you the Gold Fish Ads option, which takes your earnings to the next level. With Gold Fish Ads, you can earn a whopping 20 bubbles every hour. It's a golden opportunity to maximize your earnings.
              {"\n"} {"\n"} <Text style={{fontFamily: 'AsapMedium', fontSize: 18, color: 'white'}}>Visit & Earn :</Text>
              {"\n"} {"\n"} Discover the rewarding path within our mobile app, where you'll find four buttons waiting to be clicked. Each link will guide you to a unique page where you can visit our blog. The best part for every completed link visit, you'll earn 5 bubbles per link, So start clicking those links, But do not forget to return after 24 hours to claim your well-deserved bubbles.
              {"\n"} {"\n"} <Text style={{fontFamily: 'AsapMedium', fontSize: 18, color: 'white'}}>Surveys & Partners :</Text>
              {"\n"} {"\n"} Welcome to Survey Partners, the dynamic feature within our mobile app that offers an easy way to earn rewards while sharing your opinions. Here's how it works, engage with our  surveys, designed to gather valuable insights. As you complete each survey, you'll earn points that can be redeemed for exciting rewards.
              {"\n"} {"\n"} <Text style={{fontFamily: 'AsapMedium', fontSize: 18, color: 'white'}}>Follow Us :</Text>
              {"\n"} {"\n"} Stay connected and earn rewards by following us on Tiktok, Instagram, and Facebook. By simply tapping that follow button. You'll earn 5 bubbles per platform, Connect with us today, and let's dive into a world of ocean-inspired rewards together!
            
            </Text>

            <Text style={styles.text}>
              <Text style={{fontFamily: 'AsapBold', fontSize: 24, color: 'white'}}>3 - Rewards</Text> 
            
              {"\n"} {"\n"}  Once you've accumulated a sufficient amount of bubbles by completing various tasks and activities within our app, you can redeem your hard-earned prizes. Our diverse range of rewards awaits you, offering an array of exciting possibilities. From exclusive discounts on ocean-related products to immersive virtual experiences and even chances to win unforgettable adventures, the choice is yours. Simply navigate to the "Redeem Prizes" section in our app, select your desired reward, and follow the easy steps to claim it. Get ready to turn your bubbles into tangible rewards and elevate your journey with us to new depths of excitement!

            </Text>

          </ScrollView>
      </View>
      </ImageBackground>
    </View>
  )
}

export default HowItWorks

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
        lineHeight: 25,
        marginVertical: 10
      }
})