import React from 'react';
import {
    View,
    StyleSheet,
    useWindowDimensions,
    Text,
    TouchableOpacity
} from 'react-native';
import { Icon } from 'react-native-elements';


const Header = (props) => {

    const width = useWindowDimensions().width;
    const height = width * 0.15;
    const padding = width * 0.05;

    const styles = StyleSheet.create({
        root: {
            flexDirection: 'row',
            height,
            backgroundColor: "#f2f2f2",
            opacity: 1,
            alignItems: 'center',
            paddingHorizontal: padding,
            width: width,
            marginTop: "-2%"

        },
        title: {
            color: "#ed1d24",
            fontFamily: "Poppins-Bold",
            textAlign: "center",
            width: "86%"
        }
    })

    return (
        <View>
            <View
                style={styles.root}

            >
                
                    <Icon
                        name='arrow-back-outline'
                        type='ionicon'
                        color='#ed1d24'
                        onPress = { () => {
                            props.back()
                        }}
                    />
                
                <Text
                    style={styles.title}
                >
                    {props.title}
                </Text>
            </View>
        </View>
    )

}



export default Header;