import React from 'react';
import { StyleSheet, View, Text } from 'react-native';


class Card extends React.Component {
    render() {
        return (
            <View style={styles.card_container}>
                <View style={styles.card_front}>
                    <Text>My question</Text>
                </View>
                <View style={styles.card_back}>
                    <Text>My answer</Text>
                </View>
            </View>
        )
    }
}

export default Card; 

const styles = StyleSheet.create({
    card_container:{

    },
    card_front:{

    },
    card_back:{

    }
})