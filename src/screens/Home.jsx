import { View, Text } from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient';
import { StyleSheet } from 'react-native';


const Home = () => {
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
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
})