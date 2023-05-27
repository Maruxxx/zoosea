import { FlatList, StyleSheet, Animated, View, ImageBackground, TouchableOpacity, Text } from 'react-native'
import React, {useState, useRef} from 'react'
import slides from '../data/slides'
import OnBoardingItem from './OnBoardingItem'
import { StatusBar } from 'expo-status-bar'
import Paginator from './Paginator'
import SliderButton from './SliderButton'


const background = require('../../assets/media/bg/slider-bg.png')

const Onboarding = ({navigation}) => {

    const [currentIndex, setCurrentIndex] = useState(0);
    const scrollX = useRef(new Animated.Value(0)).current;
    const slidesRef = useRef(null)

    const viewableItemsChanges = useRef(({viewableItems}) => {
        setCurrentIndex(viewableItems[0].index)
    }).current

    const viewConfig = useRef({ viewAreaCoveragePercentThreshold: 50}).current

    const scrollTo = () => {
        if (currentIndex < slides.length - 1) {
            slidesRef.current.scrollToIndex({ index: currentIndex + 1});
        } else {
            navigation.replace('Login')
        }
    }

  return (
    <View style={styles.container}>
        <ImageBackground source={background} resizeMode="cover" style={{flex: 1, display: 'flex', justifyContent:'center', alignItems: 'center'}}>
            
            <View style={{flex: 3}}>
                <View style={{flex: 2}}>                    
                    <FlatList 
                        data={slides} 
                        renderItem={({ item }) => <OnBoardingItem item={item} />} 
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        bounces={false}
                        pagingEnabled
                        keyExtractor={(item) => item.id}
                        onScroll={Animated.event([{ nativeEvent: { contentOffset: { x: scrollX } } }], {
                            useNativeDriver: false,
                        })}
                        scrollEventThrottle={32}
                        onViewableItemsChanged={viewableItemsChanges}
                        viewabilityConfig={viewConfig}
                        ref={slidesRef}
                    />
                </View>
                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                    <Paginator data={slides} scrollX={scrollX}/>
                    <SliderButton scrollTo={scrollTo} title={currentIndex == 0 ? 'NEXT' : 'LOGIN'}/>
                    </View>
            </View>
        <StatusBar style='auto'/>
        </ImageBackground>
    </View>
  )
}

export default Onboarding

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})