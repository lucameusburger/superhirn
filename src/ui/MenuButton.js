import React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';

const MenuButton = (props) => {
  return (
    <Pressable className="px-4 py-2 border-white mb-4" onPress={props.onPress}>
      <Text className="text-white font-bold text-xl">{props.title}</Text>
    </Pressable>
  );
};

export default MenuButton;
