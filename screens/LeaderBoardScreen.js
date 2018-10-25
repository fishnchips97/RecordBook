import React from 'react';
import { StyleSheet, Text, View, FlatList, Image } from 'react-native';

export default class LeaderboardScreen extends React.Component {
    static navigationOptions = {
        title: 'Leaderboard',
    };

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <Text style={{fontWeight: "bold", fontSize: 20}}>Mile</Text>
                    <Text>Men's U.S.</Text>
                </View>
                
                <FlatList
                    data={[
                        { key: '1', name: 'Harry K.', pace: 5.0 },
                        { key: '2', name: 'Paul P.',   pace: 5.5 },
                        { key: '3', name: 'Kevin D.',   pace: 5.7 },
                    ]}
                    renderItem={_renderRunEntry}
                />
            </View>
        );
    }
}

function _renderRunEntry({ item }) {
    itemWindow =
        <View style={styles.item}>
            <View style={{ flexDirection: "row" }}>
                <View style={{ flexDirection: "row" }}>
                    <Image source={{ uri: "https://facebook.github.io/react-native/img/favicon.png", width: 40, height: 40 }} />
                </View>
                <View>
                    <Text style={{ paddingLeft: 10 }}>{item.key}. {item.name}</Text>
                    <Text style={{ paddingLeft: 10, paddingTop: 10 }}>Pace: {item.pace} min/mile</Text>
                </View>
            </View>



        </View>

    return itemWindow;
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#eee',
    },
    item: {
        padding: 10,
        backgroundColor: '#fff',
        marginBottom: 10,
        flexDirection: 'column',
    },
    header: {
        padding: 10,
        alignItems: "center"
    }
})
