import React from 'react';
import { StyleSheet, Text, View, FlatList, Image } from 'react-native';

export default class ProfileScreen extends React.Component {
    static navigationOptions = {
        title: 'Profile',
    };

    render() {
        return (
            <View style={styles.container}>
                <View style={{flexDirection: "row", backgroundColor:"#fff"}}>
                    <View style={{padding:10}}>
                        <Image source={{ uri: "https://facebook.github.io/react-native/img/favicon.png", width: 80, height: 80 }} />
                    </View>
                    <View style={{padding: 10}}>
                        <Text style={{ fontWeight: "bold", fontSize: 20 }}>Oski Bear</Text>
                        <Text>Berkeley, CA</Text>
                    </View>
                </View>
                

                <View style={{marginTop: 0}}>
                    <View style={{flexDirection: "row", backgroundColor: "#ccc"}}>
                        <Text style={{ fontWeight: "bold", paddingLeft: 10, paddingTop: 5 }}>Accomplishments</Text>
                        <Text style={{ paddingTop: 5, paddingLeft: 5, paddingBottom: 5 }}>Berkeley</Text>
                    </View>
                    <View style={styles.module}>
                        <View style={{alignItems: "center", flex: 1}}>
                            <Text>Top 20%</Text>
                            <Text>5:45</Text>
                            <Text style={{fontWeight: "bold", fontSize: 17}}>Mile</Text>
                        </View>
                        <View style={{alignItems: "center", flex: 1 }}>                    
                            <Text>Top 17%</Text>
                            <Text>12:39</Text>
                            <Text style={{ fontWeight: "bold", fontSize: 17 }}>3k</Text>
                        </View>
                        <View style={{alignItems: "center", flex: 1 }}>
                            <Text>Top 15%</Text>
                            <Text>18:52</Text>
                            <Text style={{ fontWeight: "bold", fontSize: 17 }}>5k</Text>
                        </View>
                    </View>
                </View>

                <View style={{ marginTop: 0 }}>
                    <View style={{ flexDirection: "row", backgroundColor: "#ccc" }}>
                        <Text style={{ fontWeight: "bold", paddingLeft: 10, paddingTop: 5, paddingBottom: 5 }}>Insights</Text>
                    </View>
                    <View style={styles.module}>
                        <View style={{ alignItems: "center", flex: 1 }}>
                            <Text>5% faster</Text>
                            <Text>1 mi. farther</Text>
                            <Text style={{ fontWeight: "bold", fontSize: 17 }}>Today</Text>
                        </View>
                        <View style={{ alignItems: "center", flex: 1 }}>
                            <Text>10% faster</Text>
                            <Text>3 mi. farther</Text>
                            <Text style={{ fontWeight: "bold", fontSize: 17 }}>This Week</Text>
                        </View>
                        <View style={{ alignItems: "center", flex: 1 }}>
                            <Text>Today: ✓</Text>
                            <Text>Week: 5 mi.</Text>
                            <Text style={{ fontWeight: "bold", fontSize: 17 }}>Goal</Text>
                        </View>
                    </View>
                </View>

                <View style={{ marginTop: 0 }}>
                    <View style={{ flexDirection: "row", backgroundColor: "#ccc" }}>
                        <Text style={{ fontWeight: "bold", paddingLeft: 10, paddingTop: 5, paddingBottom: 5 }}>Gear</Text>
                    </View>
                    <View style={styles.module}>
                        <View style={{ alignItems: "center", flex: 1 }}>
                            <Image source={{ uri: "https://facebook.github.io/react-native/img/favicon.png", width: 50, height: 50 }} />
                            <Text style={{marginTop: 5}}>Cruz v2</Text>
                            <Text style={{ fontWeight: "bold", fontSize: 17 }}>New Balance</Text>
                        </View>
                        <View style={{ alignItems: "center", flex: 1 }}>
                            <Image source={{ uri: "https://facebook.github.io/react-native/img/favicon.png", width: 50, height: 50 }} />
                            <Text style={{ marginTop: 5 }}>Pegasus Turbo</Text>
                            <Text style={{ fontWeight: "bold", fontSize: 17 }}>Nike</Text>
                        </View>
                    </View>
                </View>

                <View style={{ marginTop: 0}}>
                    <View style={{ flexDirection: "row", backgroundColor: "#ccc" }}>
                        <Text style={{ fontWeight: "bold", paddingLeft: 10, paddingTop: 5, paddingBottom: 5 }}>Community</Text>
                    </View>
                    <View style={styles.module}>
                        <View style={{ alignItems: "center", flex: 1 }}>
                            <Text>93</Text>
                            <Text style={{ fontWeight: "bold", fontSize: 14 }}>Following</Text>
                        </View>
                        <View style={{ alignItems: "center", flex: 1 }}>
                            <Text>527</Text>
                            <Text style={{ fontWeight: "bold", fontSize: 14 }}>Followers</Text>
                        </View>
                    </View>
                </View>

            </View>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#eee',
    },
    module: {
        backgroundColor: "#fff",
        padding: 10,
        flexDirection: 'row',
    },
    header: {

    }
})
