import { StyleSheet } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

export default StyleSheet.create({
    mainStyle: {
      flex: 1, 
      alignItems: 'center'
    },
    titleStyle: {
      padding: 20, 
      fontSize: 15
    },
    inputStyle: {
      backgroundColor: "white",
      height: 40
    },
    bodyStyle: {
      backgroundColor: "white",
    },
    alertCardStyle: {
      padding: 15,
      margin: 5,
      backgroundColor: "white"
    },
    expiredAlertCardStyle: {
      padding: 15,
      margin: 5,
      backgroundColor: "white",
      borderColor: 'orange',
      borderWidth: 3
    },
    expiredText:{
      backgroundColor: "orange",
      color: "white"
    },
    hr: {
      borderBottomColor: 'black',
      borderBottomWidth: 1,
      marginTop: 5,
      marginBottom: 5
    }
});