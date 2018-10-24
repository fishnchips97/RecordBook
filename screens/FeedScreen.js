import React from 'react';
import { ScrollView, StyleSheet, Text, View, FlatList, Image } from 'react-native';

export default class FeedScreen extends React.Component {
    static navigationOptions = {
        title: 'Feed',
    };

    render() {
        return (
            <View style={styles.container}>
                <FlatList
                    data={[
                        { key: '1', name: 'Steve',  distance: 3.5, pace: 8.0},
                        { key: '2', name: 'Jon', distance: 2.2, pace: 7.0},
                        { key: '3', name: 'Ben', distance: 1.1, pace: 6.0},
                    ]}
                    renderItem = {_renderRunEntry}
                />
            </View>    
        );
    }
}

function _renderRunEntry({item}) {
    itemWindow = 
        <View style={styles.item}>
            <View style = {{flexDirection: "row"}}>
                <View>
                <Image source={{ uri: "https://facebook.github.io/react-native/img/favicon.png", width: 20, height: 20 }} />
                </View>
                <View>
                    <Text style={{paddingLeft: 10}}>{item.name}</Text>
                </View>
            </View>

            <View style={{flexDirection: "row"}}>
                <Text style={{paddingLeft: 30}}>Distance: {item.distance} miles</Text>
                <Text style={{paddingLeft: 30}}>Pace: {item.pace} min/mile</Text>
            </View>
            
            
        </View>

    return itemWindow;
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 10,
        backgroundColor: '#eee',
    },
    item: {
        padding: 10,
        backgroundColor: '#fff',
        marginBottom: 10,
        flexDirection: 'column',
    }
});
