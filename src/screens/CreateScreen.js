import React from 'react';
import { Button, View, Text } from 'react-native';

function CreateScreen({navigation}) {
    return (
      <View>
        <Text>Create Alert</Text>
        <Button
            title="Create New Alert"
            onPress={() => navigation.navigate('Create')}
          />
      </View>
    );
  }

  export default CreateScreen;