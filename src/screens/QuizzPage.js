import React from 'react';
import {View, Text, Button, StyleSheet, TextInput} from 'react-native';

class Quizz extends React.Component{
    constructor(props){
        super(props);
    }
    render() {
        return(
            <View style={styles.quizz}>
                <Text style= {{ fontSize: 30, marginBottom: 10 }}>La première question :</Text>
                <Button 
                title="See answer"
                color="#68D9C6"
                onPress={()=>this.props.navigation.navigate('Home')}/>
            </View>
        )
    }
};

const styles = StyleSheet.create({
    quizz: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    }
});

export default Quizz;