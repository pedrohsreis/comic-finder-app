import React, { useState, useEffect } from 'react';
import {
    Text,
    StyleSheet,
    ActivityIndicator,
    KeyboardAvoidingView,
    ScrollView,
    Linking,
    Pressable,
    Modal,
    View
} from 'react-native';
import api from "../../services/api";
import { ListItem, Card, Input, Button, Avatar } from 'react-native-elements';
import Header from "../../components/Header";
import { TouchableOpacity } from 'react-native-gesture-handler';



const ComicsList = ({ route, navigation }) => {

    const [heroId, setHeroId] = useState(route.params.heroId);
    const [comics, setComics] = useState([]);
    const [loading, setLoading] = useState(true);
    const [modalLoading, setModalLoading] = useState(false);
    const [name, setName] = useState("");
    const [characters, setCharacters] = useState([]);

    const [modalVisible, setModalVisible] = useState(false);


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
    }, [heroId]);

    const getCharacters = () => {
        api.get("/v1/public/characters", {
            params: {
                limit: 100,
                nameStartsWith: name
            }
        })
            .then((res) => {
                console.log(res);
                setModalLoading(false);
                setCharacters(res.data.data.results);
                if(res.data.data.results.length === 0)
                    alert("We did not find any results for your search, please try again.")
            })
            .catch((err) => {
                console.log({ err });
                setModalLoading(false);
                alert("We are unable to contact our servers right now, try again later.")
            });
    }

    const modal = () => {
        return (
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    setModalVisible(!modalVisible);
                }}
            >
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <Text style={styles.title}>Select your hero</Text>
                        <ScrollView style={styles.scrollableList}>

                            {characters.map((item, i) => {
                                console.log(item.thumbnail.path + "portrait_small." + item.thumbnail.extension)

                                return (

                                    <ListItem 
                                        key={i} 
                                        bottomDivider 
                                        containerStyle={styles.listContainer} 
                                        onPress={() => {
                                            setHeroId(item.id),
                                            setLoading(true);
                                            setModalVisible(!modalVisible);
                                            setModalLoading(true);
                                        }}
                                    >
                                        <Avatar source={{ uri: item.thumbnail.path + "/portrait_small." + item.thumbnail.extension }} />
                                        <ListItem.Content>
                                            <ListItem.Title style={styles.heroName}>{item.name}</ListItem.Title>
                                        </ListItem.Content>
                                    </ListItem>

                                )
                            })}

                        </ScrollView>
                        <Button
                            title="Close"
                            type="clear"
                            titleStyle={styles.buttonTitle}
                            containerStyle={styles.buttonContainer}
                            onPress={() => {
                                setModalVisible(!modalVisible);
                            }}
                        />
                    </View>
                </View>
            </Modal>
        )
    }


    return (
        <KeyboardAvoidingView style={styles.root} behavior="height">
            <Header title="Comics" back={() => navigation.goBack()} />
            {modal()}
            {loading ?

                <ActivityIndicator size="large" color="#ed1d24" />

                :
                <>
                <View style = { styles.inputContainer }>
                    <Input
                        placeholder="Find another hero"
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
                                setModalLoading(true);
                                getCharacters();
                                setModalVisible(!modalVisible);
                            }}
                        />
                    }
                </View>

                    <ScrollView style={styles.scrollableList}>

                        {comics.map((item, i) => {
                            return (
                                <TouchableOpacity
                                    onPress={() => Linking.openURL(item.urls[0].url)}
                                >
                                    <ListItem key={i}>

                                        <Card containerStyle={styles.card}>
                                            <Card.Title>{item.title}</Card.Title>
                                            <Card.Image source={{ uri: item.thumbnail.path + "/portrait_uncanny." + item.thumbnail.extension }} style={styles.cover} />
                                            <Card.Divider />
                                            <Text style={styles.comicInfo}>Issue Number: {item.issueNumber}</Text>
                                            <Text style={styles.comicInfo}>Price: {"U$ " + item.prices[0].price}</Text>
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
    },
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
    },
    modalText: {
        marginBottom: 15,
        textAlign: "center"
    },
    modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
        width: "90%",
        height: "80%"
    },
    title: {
        fontFamily: "Poppins-Medium",
        textAlign: "center",
        fontSize: 16,
        color: "#ed1d24"
    },
    inputContainer: {
        flexDirection: "row",
        width: "70%",
        alignItems: "flex-start",
        justifyContent: "space-between",
        marginRight: "20%",
    },
    buttonContainer: {
        borderColor: "#ed1d24",
        borderWidth: 1,
        marginTop: "3%",
    },
    buttonTitle: {
        color: "#ed1d24"
    },
    scrollableList: {
        flex: 1, 
        width: "100%" 
    },
})

export default ComicsList;