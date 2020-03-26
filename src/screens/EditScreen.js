import React, {useContext, useState, useLayoutEffect} from 'react';
import { Button, View, Text, TextInput } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import AlertContext from '../context/AlertsContext';
import DateFields from '../components/DateFields';
import style from '../styles/Stylesheet';


function EditScreen({navigation, route}) {

  const {id} = route.params;
  const {getAlert, addAlert, removeAlert, setRemovals, formatDateAndTime} = useContext(AlertContext);
  const [alert] = getAlert(id);

  const [title, setTitle] = useState(alert.title);
  const [body, setBody] = useState(alert.body);

  // for date picker
  const [date, setDate] = useState(alert.date || null);
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);


  // useFocusEffect for when leaving the screen by hitting 'REMOVE'
  // function RemoveButton() {
  //   useFocusEffect(
  //     React.useCallback(() => {
  //       // do something when screen is focused here.

  //       return () => {
  //           // do something on blur
  //           console.log('now removing??')
  //           removeAlert(id)
  //       }; 
  //     },[removeAlert])
  //   )
  // }

  // Header remove button
  useLayoutEffect(()=> {
    navigation.setOptions({
      headerRight: () => (
        <Button 
          title="remove"
          color="red"
          onPress={() => {
            setRemovals([id]);
            navigation.goBack();
          }}
      />
      ),
    });
  }, [navigation, setRemovals])


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