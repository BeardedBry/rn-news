import { StyleSheet } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

export default StyleSheet.create({
    mainStyle: {
      flex: 1, 
      alignItems: 'center',
    },
    innerFrame: {
      margin: 10,
      marginTop: 20
    },
    inputStyle: {
      backgroundColor: "white",
      height: 40
    },
    inputBodyStyle: {
      backgroundColor: "white",
    },
    alertCardStyle: {
      padding: 15,
      margin: 5,
      backgroundColor: "white",
      borderColor: '#231F20',
      borderWidth: 3
    },
    buttonCreate: {
      margin: 10,
      marginTop: 20
    }, 
    expiredAlertCardStyle: {
      padding: 15,
      margin: 5,
      backgroundColor: "white",
      borderColor: '#FED766',
      borderWidth: 3
    },
    expiredButton:{
      alignItems: "flex-end",
      marginTop: 10
    },
    hr: {
      borderBottomColor: 'black',
      borderBottomWidth: 1,
      marginTop: 5,
      marginBottom: 5
    },
    cardList: {
      margin: 5,
      alignSelf: 'stretch'
    },
    textDate:{
      color: "black",
      fontSize: 20
    },
    textDateExpired:{
      backgroundColor: "#FED766",
      color: "black",
      fontSize: 20
    },
});