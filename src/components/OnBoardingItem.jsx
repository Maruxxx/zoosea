import { StyleSheet, Text, View, useWindowDimensions, Image } from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar'


const OnBoardingItem = ({item}) => {

    const { width } = useWindowDimensions();

  return (
    <View style={[styles.container, {width}]}>
      <Image source={item.image} resizeMode='contain' style={{width: 300, height: 200}} />
        <View style={styles.text}>
            <Text style={{
                fontFamily: 'AsapBlack',
                color: 'white',
                textAlign: 'center',
                fontSize: 44
            }}>{item.title}</Text>
            <Text style={{
                fontFamily: 'AsapSemiBold',
                color: 'white',
                textAlign: 'center',
                fontSize: 18
            }}>{item.description}</Text>
        </View>
      <StatusBar style='auto'/>
    </View>
  )
}

export default OnBoardingItem

const styles = StyleSheet.create({
    container :{
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },

    text: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 40,
        gap: 5,
        marginTop: 30,
        marginBottom: 40
    },
})