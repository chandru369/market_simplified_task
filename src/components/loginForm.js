import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { Header, Button, Input, Item, Icon } from 'native-base'
const Login = ({ email, EmailIdChange,pwd,PwdChange, onSubmit, errMsg }) => {
    return (
        <View style={{ flex: 1 }}>
            <View style={styles.firstHalf}>
                <Image style={styles.userImg} source={require('../../assets/resources/user.png')}></Image>
                <Text style={styles.userLogTxt}>User Login</Text>
            </View>
            <View style={{ flex: 2 }}>
                <View style={styles.secHalf}>
                    <Item rounded>
                        <Icon name="mail" />
                        <Input placeholder="Email" value={email} onChangeText={(txt) => { EmailIdChange(txt) }} autoCapitalize="none" autoCorrect={false} />
                    </Item>
                    <Item rounded>
                        <Icon name="lock" />
                        <Input placeholder="Password" value={pwd} onChangeText={(txt) => { PwdChange(txt) }} secureTextEntry={true} autoCapitalize="none" autoCorrect={false} />
                    </Item>
                    <Text style={styles.err}>{errMsg}</Text>
                    <Button success style={styles.btn} onPress={() => onSubmit()}>
                        <Text style={styles.btnTxt}>Sign In</Text>
                    </Button>
                </View>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    firstHalf: {
        flex: 1,
        backgroundColor: "#3CAC40",
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        alignItems: "center",
        justifyContent: "center",
    },
    userImg: {
        resizeMode: "contain",
        width: 100,
        height: 100,
    },
    userLogTxt: {
        color: "white",
        fontSize: 25,
        fontWeight: "bold"
    },
    secHalf: {
        flex: 1,
        justifyContent: "space-evenly",
        margin: 30
    },
    btn: {
        alignSelf: "center",
        width: 100,
        justifyContent: "center",
        textAlign: "center",
        borderRadius: 15
    },
    btnTxt: {
        color: "white",
        fontWeight: "bold"
    },
    err: {
        color: "red",
        marginLeft: 10
    }
})

export default Login;