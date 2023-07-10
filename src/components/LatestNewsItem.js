import { StyleSheet, View, Dimensions, ImageBackground, Text, TouchableOpacity } from 'react-native'
import React from 'react'

import * as Linking from 'expo-linking';


const screenWidth= Dimensions.get('window').width;


const LatestNewsItem = ({title, image, url}) => {
    
    
    return (
        <TouchableOpacity activeOpacity={.8} onPress={() => {Linking.openURL(url)}} style={[styles.container, {width: screenWidth}]}>
            <ImageBackground imageStyle={{borderRadius: 10}} resizeMode="cover" style={{display: 'flex', justifyContent: 'center', alignItems: 'center' ,width: 1210 / 4, height: 700 / 4}} source={{
                uri: image
            }}>
                <Text style={{color: 'white', position: 'absolute', bottom: 30, paddingHorizontal: 20, fontFamily: 'AsapMedium', fontSize: 16, textAlign: 'center'}}>{title}</Text>
            <View style={{borderBottomColor: 'white', borderBottomWidth: 10, width: '99%', position: 'absolute', bottom: -5, height: 500, borderRadius: 10, zIndex: -1000}}></View>
            </ImageBackground>
        </TouchableOpacity>

    );
}

export default LatestNewsItem

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 20,
    }
})