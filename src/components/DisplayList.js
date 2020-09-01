import React from 'react';
import { StyleSheet, Text, View, Image, FlatList, Dimensions } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { Header, Button, Input, Item, Icon } from 'native-base'

const { width, height } = Dimensions.get("screen")
const DisplayList = ({ prodDataArr }) => {
    const DataArray = prodDataArr;
    return (
        <>
            <Header style={{ backgroundColor: "#3CAC40", alignItems: "center" }}>
                <Text style={{ color: "white", fontWeight: "bold", fontSize: 20 }}>Dashboard</Text>
            </Header>

            <FlatList style={{ flex: 1 }} data={DataArray} keyExtractor={(item, index) => (item.id)} renderItem={({ item, index }) => (
                <View style={styles.cardCont}>
                    <View style={{ flex: 1 }}>
                        <View style={styles.cardView_1}>
                            <Text style={{ color: "#3CAC40", fontWeight: "bold" }}>
                                {item.name}
                            </Text>
                        </View>
                        <View style={styles.cardView_2}>
                            <Image style={{ width: 150, height: 150 }} source={{ uri: item.image }} />
                        </View>
                        <View style={styles.cardView_3}>
                            <Text adjustsFontSizeToFit={true} numberOfLines={3} style={{ color: "white", backgroundColor: "#3CAC40", fontStyle: "italic", padding: 10, borderRadius: 10, margin: 10 }}>
                                {item.description}
                            </Text>
                        </View>
                    </View>
                </View>
            )} />
        </>
    )
}


const styles = StyleSheet.create({
    cardCont: {
        height: height / 2,
        margin: 10,
        backgroundColor: "white",
        borderRadius: 10,
        shadowColor: "#3CAC40",
        shadowOpacity: 1,
        shadowRadius: 2,
        shadowOffset: {
            height: 1,
            width: 1
        },
        elevation: 10
    },
    cardView_1:{ 
        flex: 0.5, 
        justifyContent: "center", 
        alignItems: "center"
    },
    cardView_2:{ flex: 2, 
        justifyContent: "center", 
        alignItems: "center"
     },
    cardView_3:{ 
        flex: 1,
     }

})

export default DisplayList;