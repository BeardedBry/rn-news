import React from 'react';
import { View, Text } from 'react-native';
import styles from '../styles/Stylesheet';

function AlertCard({title, body, date}, format) {

    return (
      <View style={styles.alertCardStyle}>
        <Text>{title}</Text>
        <Text>{body}</Text>
        <View style={styles.hr}/>
        <Text>{date ? format(date) : 'choose a date'}</Text>
      </View>
    );
  }

  export default AlertCard;