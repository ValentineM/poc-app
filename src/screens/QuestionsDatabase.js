import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { connect } from 'react-redux';
import { bindActionsCreators } from 'react-redux';

class QuestionsDatabase extends React.Component {
    constructor(props) {
        super(props)
    }
    render(){
        return(
            <View style = {styles.container}>
                <FlatList
                    data={[]}
                    renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
                />
            </View>
        )
    }
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 22
    },
    item: {
        padding: 10, 
        fontSize: 18,
        height: 44
    }
})


const mapDispatchToProps = (dispatch) => ({
    actions: bindActionsCreators(QuestionsDatabase, dispatch)
});

const mapStateToProps = (state) => {
    return {
        questions: state
    }
};


const VisibleQuestionsDB = connect(
    mapStateToProps,
    mapDispatchToProps
)(QuestionsDatabase);

export default VisibleQuestionsDB;


// page présentant la liste des questions enregistrées