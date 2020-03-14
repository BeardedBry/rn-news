import React from 'react';
import { Button, View, Text } from 'react-native';

function HomeScreen({navigation}) {
    return (
      <View style={{ flex: 1, alignItems: 'center'}}>
        <Text style={{padding: 20, fontSize: 15}}>Alert App</Text>
        <View style={{alignSelf: 'flex-start'}}>
          <Button
            title="Create New Alert"
            onPress={() => navigation.navigate('Create')}
          />
        </View>
      </View>
    );
  }

  export default HomeScreen;