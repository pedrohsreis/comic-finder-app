import React, { useState, useEffect } from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image,
    ActivityIndicator,
    KeyboardAvoidingView,
    ScrollView
} from 'react-native';
import { Input, Button } from 'react-native-elements';
import api from "../../services/api";
import { ListItem, Avatar } from 'react-native-elements';




const Search = (props) => {

    const [name, setName] = useState("");
    const [characters, setCharacters] = useState([]);
    const [loading, setLoading] = useState(false);

    const { navigation } = props;

    const getCharacter = () => {
        api.get("/v1/public/characters", {
            params: {
                limit: 100,
                nameStartsWith: name
            }
        })
            .then((res) => {
                console.log(res);
                setLoading(false);
                setCharacters(res.data.data.results);
                if(res.data.data.results.length === 0)
                    alert("We did not find any results for your search, please try again.")
            })
            .catch((err) => {
                console.log({ err });
                setLoading(false);
                alert("We are unable to contact our servers right now, try again later.")
            });
    }


    return (
        <KeyboardAvoidingView style={styles.root} behavior="height">
            {characters.length === 0 ?
                <>
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
                        {loading ?
                            <ActivityIndicator size="small" color="#ed1d24" />
                            :
                            <Button
                                title="Search"
                                type="clear"
                                titleStyle={styles.buttonTitle}
                                containerStyle={styles.buttonContainer}
                                onPress={() => {
                                    setLoading(true);
                                    getCharacter();
                                }}
                            />}

                    </View>
                </>
                :
                <>
                    <Text style = { styles.heroSelectionTitle }>Select your hero</Text>
                    <Button
                        title="Back to Search"
                        type="clear"
                        titleStyle={styles.buttonTitle}
                        containerStyle={styles.backButtonContainer}
                        onPress={() => {
                            setLoading(false);
                            setCharacters([])
                        }}
                    />
                    <ScrollView style = { styles.scrollableList }>

                    {characters.map((item, i) => {
                        console.log(item.thumbnail.path + "portrait_small." + item.thumbnail.extension)

                        return(
                        
                        <ListItem key={i} bottomDivider containerStyle= { styles.listContainer } onPress={() => navigation.navigate("ComicsList", {heroId: item.id})}>
                            <Avatar source={{ uri: item.thumbnail.path + "/portrait_small." + item.thumbnail.extension }} />
                            <ListItem.Content>
                                <ListItem.Title style = { styles.heroName }>{item.name}</ListItem.Title>
                            </ListItem.Content>
                        </ListItem>

                    )})}

                    </ScrollView>
                </>
            }

        </KeyboardAvoidingView>
    )





}

const styles = StyleSheet.create({
    root: {
        flex: 1,
        alignItems: "center",
        backgroundColor: "#fff",
        paddingTop: "2%"
    },
    imageContainer: {
        width: "100%",
        height: "25%",
        backgroundColor: "#fff",
        alignItems: "center",
        marginTop: "20%",
    },
    image: {
        width: "70%",
        height: "62%",
        position: "absolute"
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
    },
    buttonTitle: {
        color: "#ed1d24"
    },
    buttonContainer: {
        borderColor: "#ed1d24",
        borderWidth: 1
    },
    backButtonContainer: {
        borderColor: "#ed1d24",
        borderWidth: 1,
        width: "80%"
    },
    listContainer: {
        width: "100%",
    },
    scrollableList: {
        flex: 1, 
        width: "100%" 
    },
    heroSelectionTitle: {
        color: "#ed1d24",
        fontSize: 18,
        fontFamily: "Poppins-Bold"
    },
    heroName: {
        fontSize: 16,
        fontFamily: "Poppins-Light"
    }
})

export default Search;