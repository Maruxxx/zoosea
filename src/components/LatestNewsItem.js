import { StyleSheet, View, Dimensions, ImageBackground, Text } from 'react-native'
import React from 'react'

const screenWidth= Dimensions.get('window').width;


const LatestNewsItem = () => {
    
    
    return (
        <View style={[styles.container, {width: screenWidth}]}>
            <ImageBackground imageStyle={{borderRadius: 10}} resizeMode="cover" style={{display: 'flex', justifyContent: 'center', alignItems: 'center' ,width: 1210 / 4, height: 700 / 4}} source= {{uri: 'https://zoosea.net/wp-content/uploads/2023/06/03-1210x700.jpg'}}>
                <Text style={{color: 'white', position: 'absolute', bottom: 15}}>this is the title that will be in the item</Text>
            </ImageBackground>
        </View>

    );
}

export default LatestNewsItem

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 20
    }
})