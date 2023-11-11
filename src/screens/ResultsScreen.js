import React from 'react';
import {Text, View, StatusBar, StyleSheet, ScrollView} from 'react-native';
import ResultsList from '../components/Search/ResultsList';
import {useComparisonContext} from '../components/ComparisonContext';
// import {useComparisonContext} from '../components/ComparisonContext';

const ResultsScreen = ({navigation}) => {
    // const resultList = useResultListContext();

    return (
        <View style={styles.container}>
            <StatusBar backgroundColor={'#353535'} />
            <ResultsList />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#353535',
      paddingVertical: 10,
    }
});

export default ResultsScreen;