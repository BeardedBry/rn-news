import React, {useContext} from 'react';
import { View, Text, Button } from 'react-native';
import styles from '../styles/Stylesheet';
import AlertContext from '../context/AlertsContext';

function AlertCard({props}) {

  const {title, body, date, id} = props;
  const {formatDateAndTime} = useContext(AlertContext);

  const expired = Date.now() > date;

    return (
      <View style={expired ? styles.expiredAlertCardStyle : styles.alertCardStyle }>
        <Text>{title}</Text>
        <Text>{body}</Text>
        <View style={styles.hr}/>
        <Text>{date ? formatDateAndTime(date) : 'choose a date'}</Text>
        {expired ? (<Button title="button" />) : (<></>)}
      </View>
    );
  }

  export default AlertCard;