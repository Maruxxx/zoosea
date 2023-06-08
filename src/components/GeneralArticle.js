import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

import * as Linking from 'expo-linking';


const GeneralArticle = ({title, desc, image, url}) => {
  
    return (
        <TouchableOpacity activeOpacity={.8} onPress={() => {Linking.openURL(url)}} style={styles.wrapper}>
            <View style={{width: '35%', justifyContent: 'center', alignItems: 'flex-end'}}>
                <Image source={{
                    uri: image
                }} resizeMode='contain'  style={{width: 95, height: 95}} />
            </View>
            <View style={{width: '50%', gap: 5, justifyContent: 'center', alignItems: 'flex-start', paddingRight: 5}}>
                <Text style={{fontFamily: 'AsapBold', fontSize: 14, color: '#1D3191'}}>{title}</Text>
                <Text style={{fontFamily: 'AsapLight', fontSize: 10, color: '#1D3191'}}>{desc}...</Text>
            </View>
        </TouchableOpacity>
  )
}

export default GeneralArticle

const styles = StyleSheet.create({
    wrapper: {
        display: 'flex',
        flexDirection: 'row',
        width: '80%',
        height: 110,
        overflow: 'hidden',
        gap: 20,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        backgroundColor: 'white',
        marginVertical: 10,
    }
})