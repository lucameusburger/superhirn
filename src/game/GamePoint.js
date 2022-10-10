import React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';

const colors = ['bg-gray-900', 'bg-red-400', 'bg-yellow-400', 'bg-blue-400', 'bg-green-400', 'bg-amber-400', 'bg-orange-400', 'bg-purple-400', 'bg-pink-400', 'bg-brown-400'];

const GamePoint = (props) => {
  return (
    <Pressable onPress={props.onPress} className="bg-gray-800 flex-1 rounded-full items-center justify-center align-center min-w-20 min-h-20 aspect-square p-1 m-2">
      <View className={colors[props.color] + ' aspect-square rounded-full w-6'}></View>
    </Pressable>
  );
};

export default GamePoint;
