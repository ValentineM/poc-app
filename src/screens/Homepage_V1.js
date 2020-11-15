import React from 'react';
import {Text, Button, StyleSheet, View} from 'react-native';

class HomePage extends React.Component {
    render(){
        return (
            <View style={styles.container}>
                <Text> Hello Valentine!</Text>
                <View style={styles.appButton}>
                    <Button 
                    color = "#68D9C6" 
                    title = "Take a quizz" 
                    onPress={()=>this.props.navigation.navigate('Quizz')}
                    />
                    <TouchableOpacity onPress={()=>this.props.navigation.navigate('QuestionInput')}>
                      <Text>Enter a question</Text>
                    </TouchableOpacity>
                    <Button 
                    color = "#68D9C6" 
                    title = "Your questions" 
                    onPress={()=>this.props.navigation.navigate('QuestionsDatabase')}
                    />
                </View>
            </View>
        )
    }
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center'
    },
    appButton: {
      flex: 1, 
      marginTop:50,
      justifyContent: 'space-evenly',
      alignItems: 'stretch', 
      width: 150
    },
    textInput:{
      height: 250,
      width: 500,
      borderColor: 'gray',
      borderWidth: 1,
      marginTop: 10
    }
  });

  export default HomePage;