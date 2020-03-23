import React, {useContext} from 'react';
import { Button, View, Text, FlatList } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import styles from '../styles/Stylesheet';
import AlertContext from '../context/AlertsContext';
import AlertCard from '../components/AlertCard';

function HomeScreen({navigation}) {

    const {alerts} = useContext(AlertContext);
    //console.log(alerts);

    function navigationTo(id){
      //console.log(id);
      navigation.navigate('Edit', {id})
    }

    return (
      <View style={styles.mainStyle}>
        <View style={{margin: 5}}>
          <Button
            title="Create New Alert"
            onPress={() => navigation.navigate('Create')}
          />
        </View>
        <>
            <FlatList
                data={alerts.sort((a,b) => a.date > b.date)}
                keyExtractor={(alert)=>alert.id}
                renderItem={({item}) => {
                    return (
                      //TODO: pass in navigationTo into AlertCard, and handle Touchable Opacity in there.
                      <TouchableOpacity onPress={()=>navigationTo(item.id)}>
                        <AlertCard props={item}/>
                      </TouchableOpacity>
                    );
                }}
            />
        </>
      </View>
    );
}

export default HomeScreen;