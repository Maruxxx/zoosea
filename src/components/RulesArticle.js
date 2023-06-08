import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import React from 'react'

import * as Linking from 'expo-linking';


const RulesArticle = ({title, desc, image, url}) => {
  return (
    <TouchableOpacity activeOpacity={.8} onPress={() => {Linking.openURL(url)}} style={styles.wrapper}>
            <View style={{height: '60%', justifyContent: 'center', alignItems: 'flex-end'}}>
                <Image source={{
                    uri: image
                }} resizeMode='cover'  style={{width: 300, height: 180}} />
            </View>
            <View style={{height: '50%', gap: 5, justifyContent: 'flex-start', alignItems: 'center', paddingHorizontal: 25, paddingVertical: 15}}>
                <Text style={{fontFamily: 'AsapBold', fontSize: 16, color: '#1D3191', textAlign: 'center'}}>{title}</Text>
                <Text style={{fontFamily: 'AsapLight', fontSize: 10, color: '#1D3191', textAlign: 'center'}}>{desc}...</Text>
            </View>
        </TouchableOpacity>
  )
}

export default RulesArticle

const styles = StyleSheet.create({
    wrapper: {
        display: 'flex',
        width: 280,
        height: 220,
        overflow: 'hidden',
        gap: 20,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        backgroundColor: 'white',
        marginHorizontal: 10,
    }
})

// TODO ===> FIX THE FLATLIST MARGIN!!!!!!!!!!!!!