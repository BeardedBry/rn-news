import React, {useContext} from 'react';
import { Button, View, Text, FlatList } from 'react-native';
import styles from '../styles/Stylesheet';
import AlertContext from '../context/AlertsContext';
import AlertCard from '../components/AlertCard';

function HomeScreen({navigation}) {


    const {alerts, formatDateAndTime} = useContext(AlertContext);
    console.log(alerts);

    return (
      <View style={styles.mainStyle}>
        <Text style={styles.titleStyle}>Alert App</Text>
        <View style={{margin: 5}}>
          <Button
            title="Create New Alert"
            onPress={() => navigation.navigate('Create')}
          />
        </View>
        <>
            <FlatList
                data={alerts}
                keyExtractor={(alert)=>alert.id}
                renderItem={({item}) => {
                    return (
                      AlertCard(item, formatDateAndTime)
                    );
                }}
            />
        </>
      </View>
    );
}

function alertCard({title, body, date}, format) {

  return (
    <View style={styles.alertCardStyle}>
      <Text>{title}</Text>
      <Text>{body}</Text>
      <View style={styles.hr}/>
      <Text>{format(date)}</Text>
    </View>
  );
}

export default HomeScreen;