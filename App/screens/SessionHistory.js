import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center"
    },
    text: {
        fontSize: 18,
        lineHeight: 24,
        justifyContent: "center",
        textAlign: "center",
        position: "absolute",
        width: 315,
        height: 77,
        left: 30,
        top: 56,
    },
    button: {
        backgroundColor: 'blue',
        borderColor: 'white',
        borderWidth: 1,
        borderRadius: 12,
        color: 'white',
        fontSize: 24,
        fontWeight: 'bold',
        overflow: 'hidden',
        padding: 12,
        textAlign:'center',
      },
});

class SessionHistory extends React.Component {
    render() {
        return (
            <View style={styles.container} >
                <Text style={styles.text}>Tap on a Day to see its stats, or select the Month to view all your stats for that Month.</Text>
                <TouchableOpacity 
                    onPress={() => this.props.navigation.navigate("SideBar")}>
                    <Text style={styles.button}>Side Menu</Text>
                </TouchableOpacity>

                <TouchableOpacity 
                    onPress={() => this.props.navigation.navigate("SessionCreation")}>
                    <Text style={styles.button}>Session</Text>
                </TouchableOpacity>


                <TouchableOpacity 
                    onPress={() => this.props.navigation.navigate("Activities")}>
                    <Text style={styles.button}>Activities</Text>
                </TouchableOpacity>

                <TouchableOpacity 
                    onPress={() => this.props.navigation.navigate("DailyHistory")}>
                    <Text style={styles.button}>Daily History</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

export default SessionHistory;
