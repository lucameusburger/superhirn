import React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';

const colors = ['bg-gray-900', 'bg-red-400', 'bg-yellow-400', 'bg-blue-400', 'bg-green-400', 'bg-amber-400', 'bg-orange-400', 'bg-purple-400', 'bg-pink-400', 'bg-brown-400'];
const colorsActive = ['bg-gray-900', 'bg-red-200', 'bg-yellow-200', 'bg-blue-200', 'bg-green-200', 'bg-amber-200', 'bg-orange-200', 'bg-purple-200', 'bg-pink-200', 'bg-brown-200'];

const GameColorPicker = (props) => {
  return (
    <Pressable onPress={props.onPress} className={(props.currentColor == props.color ? colorsActive[props.currentColor] : 'bg-gray-900') + ' flex-1 rounded-full items-center justify-center align-center min-w-20 min-h-20 aspect-square p-1 m-2'}>
      <View className={colors[props.color] + ' aspect-square rounded-full w-6'}></View>
    </Pressable>
  );
};

export default GameColorPicker;
