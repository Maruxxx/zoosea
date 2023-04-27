import { StatusBar } from 'expo-status-bar';
import React, { useCallback } from 'react';
import { Text, View } from 'react-native';
import { useFonts } from "expo-font"
import * as SplashScreen from "expo-splash-screen"
import { LinearGradient } from 'expo-linear-gradient';
import { Image } from 'react-native';
import { StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native';



export default function App() {

  const [active, setActive] = React.useState(false)

  const [loadedFonts] = useFonts({
    "beachday": require('./assets/fonts/beachday.ttf')
  })

  const onLayoutRootView = useCallback(async () => {
    if (loadedFonts) {
      await SplashScreen.hideAsync();
    }
  }, [loadedFonts]);

  if (!loadedFonts) {
    return null;
  }

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center'}}  onLayout={onLayoutRootView}>
      <LinearGradient
        colors={['#255bd5', '#357fec', '#409dfd']}
        start={{ x: 0.5, y: 1}}
        end={{x: 0, y: 0}}
        style={{ position: "absolute", top: 0, bottom: 0, left: 0, right: 0}}
      />
      <Image source={require('./assets/bubbles.png')} alt="" style={{position: "absolute", top: 0, left: 0, width: 200, height: 200}}/>
      <Image source={require('./assets/bubbles2.png')} alt="" style={{position: "absolute", bottom: 0, right: 0}}/>
      <TouchableOpacity 
      activeOpacity={1}
      onPressIn={() => {setActive(true)}} 
      onPressOut={() => {setActive(false)}}
      style={[styles.button, active ? styles.activeButton : styles.notActiveButton]}
      >
        <Text style={styles.text}>Next</Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  
  text: {
    fontFamily: "beachday", 
    fontSize: 30, 
    color:"#064ba8",
  },
  
  button : {
    position: "absolute", 
    left: 50, 
    bottom: 150,
    backgroundColor: "white",
    paddingHorizontal: 40,
    paddingVertical: 10,
    borderRadius: 8,
    borderBottomColor: "#064ba8",
  },

  activeButton: {
    borderBottomWidth: 0
  },

  notActiveButton: {
    borderBottomWidth: 5
  }
})
