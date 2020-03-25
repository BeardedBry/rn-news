import React, {useContext, useState} from 'react';
import { Button, View, Text, TextInput } from 'react-native';
import AlertContext from '../context/AlertsContext';
import DateFields from '../components/DateFields';
import style from '../styles/Stylesheet';


function EditScreen({navigation, route}) {

  const {id} = route.params;
  const {getAlert, addAlert, removeAlert, formatDateAndTime} = useContext(AlertContext);
  const [alert] = getAlert(id);

  const [title, setTitle] = useState(alert.title);
  const [body, setBody] = useState(alert.body);

  // for date picker
  const [date, setDate] = useState(alert.date);
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);

  return (
    <View style={style.innerFrame}>
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
          style={style.inputBodyStyle}
          onChangeText={text => setBody(text)}
          value={body}
      />
      <>
        <Text>{ formatDateAndTime(date) }</Text>
      </>
      <DateFields props={{date, setDate, mode, setMode, show, setShow}}/>
      <Button
          title="Update"
          onPress={() => addAlert(
            {
              id: id,
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

  export default EditScreen;