import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image
} from 'react-native';


const Intro = () => {

    return (
        <View style={styles.root}>
            <View style={styles.imageContainer}>
                <Image source={require("../../assets/images/marvel-logo.png")} style={styles.image} />
            </View>
            <View style={styles.textContainer}>
                <Text style = { styles.title }>Welcome to the Marvel App!</Text>
                <Text style = { styles.description }>Use this app as a tool to quickly find comics of your favorite hero!</Text>
                <Text style = { styles.description }>Hit next to start using!</Text>
            </View>
        </View>
    )

}

const styles = StyleSheet.create({
    root: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#ed1d24"
    },
    imageContainer: {
        width: "80%",
        height: "15%",
        margin: "15%",
        marginLeft: "19%"
    },
    image: {
        width: "100%",
        height: "100%"
    },
    textContainer: {
        width: "100%",
        height: "50%",
        backgroundColor: "#fff",
        padding: "5%",
        borderRadius: 20,
        fontFamily: "Poppins-Medium",
        top: 120
    },
    title: {
        fontFamily: "Poppins-Medium",
        textAlign: "center",
        fontSize: 18,
        color: "#ed1d24"
    },
    description: {
        fontFamily: "Poppins-Regular",
        fontSize: 15,
        marginTop: "5%",
        textAlign: "center"
    }
})

export default Intro;