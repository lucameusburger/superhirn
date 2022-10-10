import React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';

import BasicScreenTemplate from '../templates/BasicScreenTemplate';

import MenuButton from '../ui/MenuButton';

const HomeScreen = ({ navigation }) => {
  return (
    <BasicScreenTemplate className="flex-1">
      <View className="flex-1 items-end justify-end bg-sky-900 text-white p-10">
        <Text className="text-white text-6xl font-bold">Superhirn</Text>
        <Text className="self-end">
          <Text className="text-3xl text-yellow-400">form</Text>
          <Text className="text-3xl text-white"> + </Text>
          <Text className="text-3xl text-red-400">farbe</Text>
        </Text>
        <Text className="self-end text-white text-right w-1/2">Ein Denk- und Taktikspiel für 2 Superhirne</Text>
      </View>
      <View className="flex-grow items-start justify-end bg-sky-900 text-white p-10">
        <MenuButton title="Neues Spiel" onPress={() => navigation.navigate('game')} />
        <MenuButton title="Spielstände" onPress={() => navigation.navigate('game')} />
        <MenuButton title="Freund einladen" onPress={() => navigation.navigate('game')} />
      </View>
      <View className="flex-shrink items-center bg-sky-900 text-white p-10"></View>
    </BasicScreenTemplate>
  );
};

export default HomeScreen;
