import React, { useState, useEffect } from 'react';
import {
    Text,
    StyleSheet,
    ActivityIndicator,
    KeyboardAvoidingView,
    ScrollView,
    Linking, Touchable
} from 'react-native';
import api from "../../services/api";
import { ListItem, Card } from 'react-native-elements'
import Header from "../../components/Header";
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Link } from '@react-navigation/native';



const ComicsList = ({ route, navigation }) => {

    const [name, setName] = useState("");
    const [comics, setComics] = useState([]);
    const [loading, setLoading] = useState(true);

    const { heroId } = route.params;

    useEffect(() => {
        api.get("/v1/public/characters/" + heroId + "/comics", {
            params: {
                limit: 100
            }
        })
            .then((res) => {
                console.log(res);
                setLoading(false);
                setComics(res.data.data.results);
                if (res.data.data.results.length === 0)
                    alert("We did not find any results for your search, please try again.")
            })
            .catch((err) => {
                console.log({ err });
                setLoading(false);
                alert("We are unable to reach our servers right now, try again later.")
            });
    }, [])


    return (
        <KeyboardAvoidingView style={styles.root} behavior="height">
            <Header title="Comics" back = { () => navigation.goBack() }/>
            {loading ?

                <ActivityIndicator size="large" color="#ed1d24" />

                :
                <>

                    <ScrollView style={styles.scrollableList}>

                        {comics.map((item, i) => {
                            return (
                                <TouchableOpacity 
                                        onPress={() => Linking.openURL(item.urls[0].url)}
                                    >
                                <ListItem key={i}>
                                    
                                    <Card containerStyle = { styles.card }>
                                        <Card.Title>{item.title}</Card.Title>
                                        <Card.Image source={{ uri: item.thumbnail.path + "/portrait_uncanny." +  item.thumbnail.extension}} style = { styles.cover } />
                                        <Card.Divider />
                                        <Text style={ styles.comicInfo }>Issue Number: {item.issueNumber}</Text>
                                        <Text style={ styles.comicInfo }>Price: {"U$ " + item.prices[0].price}</Text>
                                    </Card>
                                    
                                </ListItem>
                                </TouchableOpacity>
                            )
                        })}

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
    card: {
        height: "100%",
        width: "93%",
    },
    cover: {
        width: "100%",
        height: 500
    },
    comicInfo: {
        fontFamily: "Poppins-Medium",
        fontSize: 12
    }
})

export default ComicsList;