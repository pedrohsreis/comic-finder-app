import React from 'react';
import {
    View,
    StyleSheet,
    useWindowDimensions,
    Text
} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';


const Footer = (props) => {

    const width = useWindowDimensions().width;
    const height = width * 0.19;
    const padding = width * 0.09;

    const styles = StyleSheet.create({
        root: {
            flexDirection: 'row',
            justifyContent: props.next ? 'flex-end' : "flex-start",
            height,
            backgroundColor: "#f2f2f2",
            opacity: 1,
            alignItems: 'center',
            paddingHorizontal: padding,
            width: "100%"

        },
    })

    return (
        <TouchableOpacity
            onPress={() => props.buttonPress()}
        >
            <View
                style={styles.root}

            >
                <Text
                    style={{
                        color: "#ed1d24",
                        fontFamily: "Poppins-Bold",

                    }}
                >
                    {props.next ? "Next" : "Back"}
                </Text>
            </View>
        </TouchableOpacity>
    )

}



export default Footer;