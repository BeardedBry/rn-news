import React, {useContext} from 'react';
import { View, Text, Button } from 'react-native';
import styles from '../styles/Stylesheet';
import AlertContext from '../context/AlertsContext';
import { TouchableOpacity } from 'react-native-gesture-handler';

function AlertCard({card, nav}) {

  const {title, body, date, id} = card;
  const {navigateTo} = nav;
  const {formatDateAndTime, removeAlert} = useContext(AlertContext);

  const expired = Date.now() > date;

    return (
      <View style={expired ? styles.expiredAlertCardStyle : styles.alertCardStyle }>
        <TouchableOpacity onPress={()=>navigateTo(id)}>
          <Text>{title}</Text>
          <Text>{body}</Text>
          <View style={styles.hr}/>
          <Text>{date ? formatDateAndTime(date) : 'choose a date'}</Text>
        </TouchableOpacity>
        <View style={styles.expiredButton} >
          {expired ? (<Button title="Remove" color="orange" onPress={()=>removeAlert(id)}/>) : (<></>)}
        </View>
      </View>
    );
  }

  export default AlertCard;