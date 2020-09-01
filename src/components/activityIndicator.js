import React from 'react';
import { StyleSheet, Image, TouchableOpacity, View, ActivityIndicator } from 'react-native';
import HeaderCompo from './header'



const ActivityIndicatorComp = () => {
    return (
        <View style={{ flex: 1 }}>
            <HeaderCompo headerName = {"DashBoard"} />
            <View style={{ flex: 1, justifyContent: "center" }}>
                <ActivityIndicator size="large" color="#3CAC40" />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
})


export default ActivityIndicatorComp;