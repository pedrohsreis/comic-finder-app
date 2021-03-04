import React, { useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image
} from 'react-native';
import { Input } from 'react-native-elements';



const Search = () => {

    const [name, setName] = useState("");

    return (
        <View style={styles.root}>
            <View style={styles.imageContainer}>
                <Image source={require("../../assets/images/alternative-marvel-logo.jpg")} style={styles.image} />
            </View>
            <View style={styles.formContainer}>
                <Text style={styles.title}>Type your favorite hero's name in the field below, then hit Search.</Text>
                <Input
                    placeholder="Character Name"
                    style={styles.searchInput}
                    value={name}
                    onChangeText={value => setName(value)}
                />
            </View>
        </View>
    )

}

const styles = StyleSheet.create({
    root: {
        flex: 1,
        alignItems: "center",
        backgroundColor: "#fff"
    },
    imageContainer: {
        width: "100%",
        height: "25%",
        backgroundColor: "#fff",
        alignItems: "center",
        marginTop: "20%"
    },
    image: {
        width: "70%",
        height: "62%"
    },
    title: {
        fontFamily: "Poppins-Medium",
        textAlign: "center",
        fontSize: 16,
        color: "#a1a1a1"
    },
    formContainer: {
        alignItems: "center",
        justifyContent: "center",
        padding: "5%",
        width: "100%"
    },
    searchInput: {
        width: "80%",
        marginTop: "10%",
    }
})

export default Search;