import React, {useContext, useState} from 'react';
import { Button, View, Text, TextInput } from 'react-native';
import AlertContext from '../context/AlertsContext';
import DateTimePicker from '@react-native-community/datetimepicker';
import style from '../styles/Stylesheet';

function CreateScreen({navigation}) {

    const {alerts, setAlerts} = useContext(AlertContext);
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');

    const addAlert = (newAlert) => {
        setAlerts([...alerts, newAlert])
    }

    return (
      <View>
        <Text>Create Alert</Text>
        <Text>Alert Title:</Text>
        <TextInput
            style={style.inputStyle}
            onChangeText={text => setTitle(text)}
            value={title}
        />
        <Text>Alert Body:</Text>
        <TextInput
            multiline
            numberOfLines={4}
            style={style.bodyStyle}
            onChangeText={text => setBody(text)}
            value={body}
        />
        <Button
            title="Create New Alert"
            onPress={() => addAlert({title: 'test'})}
          />
      </View>
    );
  }

  export default CreateScreen;