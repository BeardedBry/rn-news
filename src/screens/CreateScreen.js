import React, {useContext, useState} from 'react';
import { Button, View, Text, TextInput } from 'react-native';
import AlertContext from '../context/AlertsContext';
import DateFields from '../components/DateFields';
import style from '../styles/Stylesheet';


function CreateScreen({navigation}) {

    const {addAlert, formatDateAndTime} = useContext(AlertContext);
    const [title, setTitle] = useState('Default Title');
    const [body, setBody] = useState('Default Body Text');

    // for date picker
    const [date, setDate] = useState(new Date(Date.now()));
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);

    return (
      <View>
        <Text>Create Alert</Text>
        <Text>Title:</Text>
        <TextInput
            style={style.inputStyle}
            onChangeText={text => setTitle(text)}
            value={title}
        />
        <Text>Short Description:</Text>
        <TextInput
            multiline
            numberOfLines={1}
            style={style.bodyStyle}
            onChangeText={text => setBody(text)}
            value={body}
        />
        <DateFields props={{date, setDate, mode, setMode, show, setShow}}/>
        <>
          {/* <Text>{date.toDateString()}</Text>
          <Text>{formatTime(date.toLocaleTimeString('en-US'))}</Text> */}
          <Text>{ formatDateAndTime(date) }</Text>
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