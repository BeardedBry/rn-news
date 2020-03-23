import React, {useContext} from 'react';
import { View, Text } from 'react-native';
import styles from '../styles/Stylesheet';
import AlertContext from '../context/AlertsContext';

function AlertCard({props}) {

  const {title, body, date, id} = props;

  const {formatDateAndTime} = useContext(AlertContext);

    return (
      <View style={styles.alertCardStyle}>
        <Text>{title}</Text>
        <Text>{body}</Text>
        <View style={styles.hr}/>
        <Text>{date ? formatDateAndTime(date) : 'choose a date'}</Text>
      </View>
    );
  }

  export default AlertCard;