import React, { useState,useEffect} from 'react';
import { AsyncStorage,Alert,BackHandler } from 'react-native';
import LoginForm from '../components/loginForm'
import isEmail from 'validator/lib/isEmail';


const Login = ({ navigation }) => {
  const [emailId, setEmailId] = useState('');
  const [pwd, setPwd] = useState('');
  const [errMsg, setErrMsg] = useState('');

  const EmailIdChange = (EmailTxt) => {
    setEmailId(EmailTxt)
  }
  const PwdChange = (EmailTxt) => {
    setPwd(EmailTxt)
  }

  const showAlert = () =>{
    Alert.alert(
      "Press Exit to close app",
      "",
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        { text: "Exit", onPress: () => BackHandler.exitApp()}
      ],
      { cancelable: false }
    );
  }

  useEffect(() => {
    const backAction = () => {
     showAlert();
     return true;
    };
  
    const backHandler = BackHandler.addEventListener(
      "LoginBackPress",
      backAction
    );
  
    return () => backHandler.remove();
  }, []);
  
  const onSubmit = () => {
    setErrMsg('');

    if (isEmail(emailId)) {
      var LogInObj = LoginIdsArr.find((element) => {
        return element.email == emailId
      })
      if (LogInObj) {
        if (LogInObj.password == pwd) {
          console.log('user Logined')
          AsyncStorage.setItem('token', LogInObj.jwt_token)
          navigation.navigate('HomeScreen')
        }
        else {
          setErrMsg('Please Enter Correct Password')
        }
      }
      else {
        setErrMsg('Email id not registered')
      }
    }
    else {
      setErrMsg('Please Enter Valid Email')
    }
  }
  const LoginIdsArr = [{
    email: "chan@gmail.com",
    password: "passWord@1",
    jwt_token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImNoYW5kcnUxMDA3MjdAZ21haWwuY29tIn0.1o0e3Ja7bdcD2ETzrsHpxzp61T14cavjaYSNIINCBUM'
  },
  {
    email: "dhoni@gmail.com",
    password: "cskInd@431",
    jwt_token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImRob25pQGdtYWlsLmNvbSJ9.DHjl1hXzj4jqXLN7kw60Px3eI1_6m7VtHCrRCMu-AjQ'
  }]
  return (
    <LoginForm
      emailId={emailId}
      pwd={pwd}
      EmailIdChange={EmailIdChange}
      PwdChange={PwdChange}
      errMsg={errMsg}
      onSubmit={onSubmit}
    />
  )
}

export default Login;