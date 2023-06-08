import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const btnBg = require('../../assets/media/bg/btn.jpg')


const ActiveLink = ({image, number}) => {
  return (
    <>
      <Image resizeMode='contain' source={image} style={{position: 'absolute', zIndex: 10, width: 70}} />
      <ImageBackground resizeMode='cover' imageStyle={{borderRadius: 10}} source={btnBg} style={{width: '100%', height: '100%'}}>
        <View style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: "rgba(255, 255, 255, 0.30)", 
            width: 25, height: 22, 
            borderTopRightRadius: 10, 
            borderBottomLeftRadius: 5,
            position: 'absolute', 
            top: 0, 
            right: 0}}
            >
            <Text style={{color: 'white', fontFamily: 'AsapBold', fontSize: 14}}>{number}</Text>
        </View>
      </ImageBackground>
    </>
  )
}

export default ActiveLink

const styles = StyleSheet.create({})