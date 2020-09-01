import React from 'react';
import { StyleSheet } from 'react-native';

import {  Header,Text } from 'native-base';




const HeaderBar = ({headerName}) => {
    return (
        <Header androidStatusBarColor="black" style={{ backgroundColor: "#3CAC40", alignItems: "center" }}>
        <Text style={{ color: "white", fontWeight: "bold", fontSize: 20 }}>{headerName}</Text>
        </Header>
    )
}

const styles = StyleSheet.create({
    basic: {
        backgroundColor: "#ffffff"
      },
    iconColour:{
        color:"black"
    },
})


export default HeaderBar;