import { Image, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import IonIcon from "@expo/vector-icons/Ionicons"


const background = require('../../../assets/media/bg/background.jpg')
const whiteBubble = require('../../../assets/media/icons/white-bubble.png')



const RewardDetail = ({ navigation, route}) => {

  const [activePack, setActivePack] = useState()
  const [isRedeemable, setIsRedeemable] = useState(false)

  const { image, title, bubblesCollected } = route.params

  return (
    <View style={styles.container}>
      <ImageBackground source={background} resizeMode="cover" style={styles.bgImage}>

      <View style={styles.headerWrapper}>

        <View style={{width: '80%', display: 'flex', justifyContent: 'flex-start', alignItems: 'center'}}>
            <Text style={styles.routeName}>{title}</Text>

            <TouchableOpacity onPress={() => {navigation.goBack()}} style={{position: 'absolute', left: 0}}>
              <IonIcon name="chevron-back-outline" color='white' size={26}/>
            </TouchableOpacity>

            <View style={{
              width: '100%',
              height: 5,
              backgroundColor: 'white',
              marginVertical: 20,
              borderRadius: 30,
            }}></View>
        </View>
            
        <View style={styles.packs}>

          <View style={styles.bubblesCountWrapper} />
              <View style={styles.bubblesCount}>
                <Text style={{fontFamily: 'AsapBold', fontSize: 22, color: 'white'}}>Your bubbles: </Text>
                <View style={{flexDirection: 'row', gap: 5, display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                  <Image source={whiteBubble} style={{height: 20, width: 20}}/>
                  <Text style={{fontFamily: 'AsapBold', fontSize: 20, color: 'white'}}>
                  {bubblesCollected > 999 ? `${bubblesCollected / 1000}k` : bubblesCollected}
                  </Text>
                </View>
              </View>
            <Text style={{fontFamily: 'AsapLight', fontSize: 16, color: 'white', opacity: .6, textAlign: 'center'}}>Redeem your rewards by choosing the option that corresponds.</Text>
          </View>


        <View style={styles.packsWrapper}>


            <View style={[styles.fiveDollarWrapper, activePack == '1' ? {borderWidth: 3} : {borderWidth: 0}]}>
              <TouchableOpacity activeOpacity={1} onPress={() => {setActivePack('1'); if(bubblesCollected >= 2000) {setIsRedeemable(true)} else {setIsRedeemable(false)}}}>
                <Image source={image} resizeMode='cover' style={styles.pack}/>
                <View style={styles.priceWrapper}>
                  <Text style={{fontFamily: 'AsapRegular', fontSize: 14, color: 'white'}}>5$</Text>
                  <View style={styles.price}>
                    <Image source={whiteBubble} style={{height: 14, width: 14}}/>
                    <Text style={{fontFamily: 'AsapBold', fontSize: 12, color: 'white'}}>4000</Text>
                  </View>
                </View>
              </TouchableOpacity>
            </View>
          
            <View style={[styles.fiveDollarWrapper, activePack == '2' ? {borderWidth: 3} : {borderWidth: 0}]}>
              <TouchableOpacity activeOpacity={1} onPress={() => {setActivePack('2'); if(bubblesCollected >= 10000) {setIsRedeemable(true)} else {setIsRedeemable(false)}}}>
                <Image source={image} resizeMode='cover' style={styles.pack}/>
                <View style={styles.priceWrapper}>
                  <Text style={{fontFamily: 'AsapRegular', fontSize: 14, color: 'white'}}>25$</Text>
                  <View style={styles.price}>
                    <Image source={whiteBubble} style={{height: 14, width: 14}}/>
                    <Text style={{fontFamily: 'AsapBold', fontSize: 12, color: 'white'}}>10000</Text>
                  </View>
                </View>
              </TouchableOpacity>
            </View>
          
            <View style={[styles.fiveDollarWrapper, activePack == '3' ? {borderWidth: 3} : {borderWidth: 0}]}>
              <TouchableOpacity activeOpacity={1} onPress={() => {setActivePack('3'); if(bubblesCollected >= 18500) {setIsRedeemable(true)} else {setIsRedeemable(false)}}}>
                <Image source={image} resizeMode='cover' style={styles.pack}/>
                <View style={styles.priceWrapper}>
                  <Text style={{fontFamily: 'AsapRegular', fontSize: 14, color: 'white'}}>50$</Text>
                  <View style={styles.price}>
                    <Image source={whiteBubble} style={{height: 14, width: 14}}/>
                    <Text style={{fontFamily: 'AsapBold', fontSize: 12, color: 'white'}}>18500</Text>
                  </View>
                </View>
              </TouchableOpacity>
            </View>
          
            <View style={[styles.fiveDollarWrapper, activePack == '4' ? {borderWidth: 3} : {borderWidth: 0}]}>
              <TouchableOpacity activeOpacity={1} onPress={() => {setActivePack('4'); if(bubblesCollected >= 30000) {setIsRedeemable(true)} else {setIsRedeemable(false)}}}>
                <Image source={image} resizeMode='cover' style={styles.pack}/>
                <View style={styles.priceWrapper}>
                  <Text style={{fontFamily: 'AsapRegular', fontSize: 14, color: 'white'}}>100$</Text>
                  <View style={styles.price}>
                    <Image source={whiteBubble} style={{height: 14, width: 14}}/>
                    <Text style={{fontFamily: 'AsapBold', fontSize: 12, color: 'white'}}>30000</Text>
                  </View>
                </View>
              </TouchableOpacity>
            </View>
          
          
          </View>

          {

            isRedeemable ? 
            
            (
            <View>
              <TouchableOpacity onPress={() => {navigation.navigate('SuccessReward', {title})}} style={styles.activeButton}>
                <Text style={{fontFamily: 'AsapBold', fontSize: 24, color: 'white'}}>Redeem</Text>
              </TouchableOpacity>
            </View>
            ) : (
              <View>
                <TouchableOpacity style={styles.notActiveButton}>
                  <Text style={{fontFamily: 'AsapBold', fontSize: 24, color: 'white'}}>Redeem</Text>
                </TouchableOpacity>
              </View>
            )

          }


        </View>

      </ImageBackground>
    </View>
  )
}

export default RewardDetail

const styles = StyleSheet.create({
  container:{
    flex: 1,
  },

  bgImage:{
    flex: 1,
    display: 'flex',
    alignItems: 'center',
    width: "100%",
  },
  
  headerWrapper: {
      flex: 1,
      justifyContent: 'flex-start',
      alignItems: 'center',
      width: '100%',
      marginVertical: 50,
    },

  routeName: {
    color: 'white',
    fontFamily: 'AsapBold',
    fontSize: 24,
  },

  bubblesCountWrapper: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  
  bubblesCount: {
    display: 'flex',
    justifyContent: 'center',
    gap: 15,
    alignItems: 'center',
    flexDirection: 'row'
  },

  packs: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    gap: 10,
    width: '100%',
  },

  pack: {
    borderRadius: 5,
    height: 60,
    width: 140
  },

  packsWrapper: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 25,
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 15,
    width: '100%'
  },

  fiveDollarWrapper: {
    borderColor: 'white',
    borderRadius: 5,
    backgroundColor: 'rgba(255, 255, 255, 0.15)',
  },

  priceWrapper: {
    display: 'flex',
    justifyContent: 'space-between',
    marginHorizontal: 10,
    marginVertical: 10,
    alignItems: 'center',
    flexDirection: 'row',
  },

  price: {
    flexDirection: 'row',
    gap: 5
  },

  activeButton: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#0B44A1',
    width: 250,
    paddingVertical: 20,
    marginVertical: 20,
    borderRadius: 8,

    borderBottomColor: 'white',
    borderBottomWidth: 6
  },

  notActiveButton: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#838383',
    width: 250,
    paddingVertical: 20,
    marginVertical: 20,
    borderRadius: 8,

    borderBottomColor: 'white',
    borderBottomWidth: 6
  },


})