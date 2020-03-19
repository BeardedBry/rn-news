import React, {useContext, useState} from 'react';
import { Button, View, Text, TextInput } from 'react-native';
import AlertContext from '../context/AlertsContext';
import DateFields from '../components/DateFields';
import style from '../styles/Stylesheet';


function CreateScreen({navigation}) {

    const {addAlert, formatTime} = useContext(AlertContext);
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');

    // for date picker
    const [date, setDate] = useState(new Date(1598051730000));
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);

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
        <DateFields props={{date, setDate, mode, setMode, show, setShow}}/>
        <>
          <Text>{date.toDateString()}</Text>
          <Text>{formatTime(date.toLocaleTimeString('en-US'))}</Text>
        </>
        <Button
            title="Create New Alert"
            onPress={() => addAlert(
              {
                title: title,
                body: body,
                date: date
              },
              navigation.navigate('Home')
            )}
          />
      </View>
    );
  }

  export default CreateScreen;