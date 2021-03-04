import React, { useRef } from 'react';
import {
    View,
    StyleSheet
} from 'react-native';
import Intro from "./Intro";
import Search from "./Search";
import ViewPager from '@react-native-community/viewpager';
import Footer from "../../components/Footer";


const Onboarding = () => {


    const pageRef = useRef(null);

    const handlePageChange = pageNumber => {
        pageRef.current.setPage(pageNumber);
    };


    return (
        <View style={styles.root}>
            <ViewPager style={styles.viewPager} initialPage={0} ref={pageRef}>
                <View key="1">
                    <Intro />
                    <Footer next = {true} buttonPress = {() => handlePageChange(1)}/>
                </View>
                <View key="2">
                    <Search />
                    <Footer next = {false} buttonPress = {() => handlePageChange(0)}/>
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