import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image
} from 'react-native';


const Intro = () => {
    
    return(
        <View style = { styles.root }>
            <Image source = {require("../../assets/images/marvel-logo.png")} />
            <Text>Welcome to the Marvel App!</Text>
            <Text>Use this app as a tool to quickly find comics of your favorite hero!</Text>
        </View>
    )

}

const styles = StyleSheet.create({
    root: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#ed1d24"
    }
})

export default Intro;