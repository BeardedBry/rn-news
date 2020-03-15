import React, {useContext} from 'react';
import { Button, View, Text } from 'react-native';
import AlertContext from '../context/AlertsContext';

function CreateScreen({navigation}) {

    const {alerts, setAlerts} = useContext(AlertContext);

    const addAlert = (newAlert) => {
        setAlerts([...alerts, newAlert])
    }

    return (
      <View>
        <Text>Create Alert</Text>
        <Button
            title="Create New Alert"
            onPress={() => addAlert({title: 'test'})}
          />
      </View>
    );
  }

  export default CreateScreen;