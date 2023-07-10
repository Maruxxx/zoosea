import { StyleSheet, Text, View, Animated } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import NetInfo from '@react-native-community/netinfo';



const InternetCheck = () => {
    const [isConnected, setIsConnected] = useState(false)
    
    useEffect(() => {
        const unsubscribe = NetInfo.addEventListener(state => {
            setIsConnected(true)
          });

          return () => {
            unsubscribe();
          }
    }, [])


 
    return (

      isConnected ? (
          null
      ) : (
        <Animated.View style={{backgroundColor: 'rgba(68, 68, 68, 0.6)', width: '100%', height: 40, position: 'absolute', top: 0, zIndex: 155, display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
          <Text style={{fontFamily: 'AsapMedium', color: 'white', fontSize: 18}}>No Internet Connection!</Text>
        </Animated.View>  
      )
  )
}

export default InternetCheck

const styles = StyleSheet.create({})