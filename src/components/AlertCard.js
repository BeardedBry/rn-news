import React from 'react';
import { View, Text, Button } from 'react-native';
import styles from '../styles/Stylesheet';
import { TouchableOpacity } from 'react-native-gesture-handler';

function AlertCard({title, body, date, id}, format) {

    function navigateTo(){
        console.log('id:' + id);
        console.log(navigation);
        //navigation.navigate('Edit', {id})
    }

    return (
      <TouchableOpacity style={styles.alertCardStyle} onPress={navigateTo}>
        <Text>{title}</Text>
        <Text>{body}</Text>
        <View style={styles.hr}/>
        <Text>{date ? format(date) : 'choose a date'}</Text>
      </TouchableOpacity>
    );
  }

  export default AlertCard;