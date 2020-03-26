import React, {useContext, useEffect} from 'react';
import { Button, View, Text, FlatList } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import styles from '../styles/Stylesheet';
import AlertContext from '../context/AlertsContext';
import AlertCard from '../components/AlertCard';

function HomeScreen({navigation}) {

    const { alerts, removals, removeAlert } = useContext(AlertContext);

    //console.log('alerts',alerts);
    function navigateTo(id){
      //console.log(id);
      navigation.navigate('Edit', {id})
    }

    //TODO: fix Bug with removing an alert from inside edit screen

    // useEffect(()=>{
    //   console.log(removals);
    //   if(removals.length > 0){
    //     setTimeout(()=>{
    //       removeAlert(removals[0]);
    //     }, 100)
    //   }
    // },[removals])

    return (
      <View style={styles.mainStyle}>
        <View style={styles.buttonCreate}>
          <Button
            title="Create New Alert"
            onPress={() => navigation.navigate('Create')}
          />
        </View>
        <>
            <FlatList
                style={styles.cardList}
                data={alerts.sort((a,b) => Date.parse(a.date) > Date.parse(b.date))}
                keyExtractor={(alert)=>alert.id}
                renderItem={({item}) => {
                    return (
                      //TODO: pass in navigationTo into AlertCard, and handle Touchable Opacity in there.
                      <AlertCard card={item} nav={{navigateTo}} />
                    );
                }}
            />
        </>
      </View>
    );
}

export default HomeScreen;