import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'

const Button = ({name, color, size, font, backgroundColor, borderColor}) => {
    
    const [active, setActive] = React.useState(false)
  
    return (
    <TouchableOpacity 
    
    activeOpacity={1}
    onPressIn={() => {setActive(true)}} 
    onPressOut={() => {setActive(false)}}
    
    style={{display: 'flex', justifyContent: 'flex-end', alignItems: 'flex-end'}}>
      
      <View 
      
      
      style={
        [
        {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: `${backgroundColor}`,
        width: 300,
        paddingVertical: 15,
        borderRadius: 8,
      },
      active ? styles.activeButton : styles.notActiveButton
    ]
    }

      >
      <Text style={{fontFamily: `${font}`, fontSize: size, color:`${color}`}}>{name}</Text>
      </View>
      <View style={[styles.afterButton, {backgroundColor: `${borderColor}`,} , active ? {display: 'none'} : {display: 'flex'}]}></View>
    
    </TouchableOpacity>
  )
}

export default Button

const styles = StyleSheet.create({
      activeButton: {
        top: 5
      },
    
      notActiveButton: {
        margin: 0
      }, 

      afterButton: {
        position: 'absolute',
        bottom: -5,
        width: 300,
        height: 10,
        borderRadius: 8,
        zIndex: -100
      }
})