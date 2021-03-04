import React from 'react';
import {
    View,
    StyleSheet
} from 'react-native';
import Intro from "./Intro";
import ViewPager from '@react-native-community/viewpager';


const Onboarding = () => {
    
    return(
        <View style = { styles.root }>
            <ViewPager style = { styles.viewPager }>
                <View key = "1">
                    <Intro/>
                </View>
            </ViewPager>
        </View>
    )

}

const styles = StyleSheet.create({
    root: {
        flex: 1
    },
    viewPager: {
        flex: 1
    }
})

export default Onboarding;