import { StyleSheet, Text, View, Animated, useWindowDimensions } from 'react-native'
import React from 'react'

const Paginator = ({ data, scrollX }) => {

    const { width } = useWindowDimensions();

  return (
    <View style={{flexDirection: 'row', height: 20}}>
      {data.map((_, i) => {
        const inputRange = [(i - 1 ) * width, i * width, (i + 1) * width]
        const dotWidth = scrollX.interpolate({
            inputRange,
            outputRange: [10, 20, 10],
            extrapolate: 'clamp'
        })

        const color = scrollX.interpolate({
            inputRange,
            outputRange: ['#0B44A1', 'white', '#1C3D74'],
            extrapolate: 'clamp'
        })
        return <Animated.View style={[styles.dot, { width: dotWidth, backgroundColor: color}]} key={i.toString()}/>
      })}
    </View>
  )
}

export default Paginator

const styles = StyleSheet.create({
    dot: {
        height: 10,
        borderRadius: 5,
        marginHorizontal: 5,
    }
})