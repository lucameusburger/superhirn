import React from 'react';
import { View, Text } from 'react-native';
import { StatusBar } from 'expo-status-bar';

const BasicScreenTemplate = (props) => {
  return (
    <View style={props.style}>
      <StatusBar style="light" />
      {props.children}
    </View>
  );
};

export default BasicScreenTemplate;
