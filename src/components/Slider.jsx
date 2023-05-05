import { StyleSheet, View, Image } from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient';


const Slider = () => {
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={['#255bd5', '#357fec', '#409dfd']}
        start={{ x: 0.5, y: 1}}
        end={{x: 0, y: 0}}
        style={styles.gradientLayer}
      />
      <Image source={require('../../assets/bubbles.png')} alt="" style={styles.topWaves}/>
      <Image source={require('../../assets/bubbles2.png')} alt="" style={styles.ButtomWaves}/>
    </View>
  )
}

export default Slider

const styles = StyleSheet.create({

    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },

    gradientLayer: {
        position: "absolute",
        top: 0,
        bottom: 0,
        left: 0, 
        right: 0
    },

    topWaves: {
        position: "absolute",
        top: 0,
        left: 0,
        width: 200,
        height: 200
    },

    ButtomWaves: {
        position: "absolute",
        bottom: 0,
        right: 0
    }
})