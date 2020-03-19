import React, {useContext} from 'react';
import { Button, View, Text, StyleSheet, FlatList } from 'react-native';
import styles from '../styles/Stylesheet';
import AlertContext from '../context/AlertsContext';

function HomeScreen({navigation}) {
    /*
        alert = {
            title: 'Dentist Appointment',
            Date: '03-20-2020',
            Time: '3:00',

        }
    */

    const {alerts} = useContext(AlertContext);

    console.log(alerts);

    return (
      <View style={styles.mainStyle}>
        <Text style={styles.titleStyle}>Alert App</Text>
        <View style={{alignSelf: 'flex-start'}}>
          <Button
            title="Create New Alert"
            onPress={() => navigation.navigate('Create')}
          />
        </View>
        <>
            <FlatList
                data={alerts}
                keyExtractor={(alert)=>alert.title.toString()}
                renderItem={({item}) => {
                    return (
                      eventCard(item)
                    );
                }}
            />
        </>
      </View>
    );
}

function eventCard({title, body, date}) {
  return (
    <View>
      <Text>{title}</Text>
      <Text>{body}</Text>
      <Text>{date}</Text>
    </View>
  );
}

export default HomeScreen;