import React, { useState } from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';

const colors = ['bg-gray-900', 'bg-red-400', 'bg-yellow-400', 'bg-blue-400', 'bg-green-400'];

import BasicScreenTemplate from '../templates/BasicScreenTemplate';

import MenuButton from '../ui/MenuButton';
import GamePoint from '../game/GamePoint';
import GameColorPicker from '../game/GameColorPicker';
import GameRowIndicator from '../game/GameRowIndicator';

const GameScreen = ({ navigation }) => {
  const [currentColor, setcurrentColor] = useState();
  const [currentRow, setcurrentRow] = useState(1);
  const [indicators, setIndicators] = useState([
    [1, 1, 1, 1],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
  ]);
  const [gameState, setGameState] = useState([
    [1, 2, 3, 4],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
  ]);

  const setColor = (color) => {
    setcurrentColor(color);
  };

  const changeGameState = (x, y) => {
    if (!currentColor || currentColor === 0) return;
    if (x != currentRow) return;

    // change game state
    const newGameState = [...gameState];
    newGameState[x][y] = currentColor;
    setGameState(newGameState);
    setcurrentColor(0);

    // win if current row is first row of gameState
    if (newGameState[x][0] === newGameState[0][0] && newGameState[x][1] === newGameState[0][1] && newGameState[x][2] === newGameState[0][2] && newGameState[x][3] === newGameState[0][3]) {
      alert('You won!');
      navigation.navigate('home');
      return;
    }

    // loose if last row
    if (x === 10) {
      alert('You loose!');
      navigation.navigate('home');
      return;
    }

    // jump to new row if full
    if (newGameState[x].filter((item) => item === 0).length === 0) {
      // set indicators
      const newIndicators = [...indicators];
      for (let i = 0; i < newGameState[0].length; i++) {
        if (newGameState[x][i] === newGameState[0][i]) {
          newIndicators[x][i] = 1;
        } else {
          if (newGameState[0].includes(newGameState[x][i])) {
            newIndicators[x][i] = 2;
          }
        }
      }

      setcurrentRow(currentRow + 1);
    }
  };

  return (
    <BasicScreenTemplate className="flex-1 items-center justify-center bg-sky-900 text-white h-full w-full">
      <View className="flex rounded-md flex-wrap bg-gray-400 w-64 h-100 p-1">
        <View className="flex-row items-center flex-nowrap rounded-md bg-gray-500 w-100 mb-1">
          <View className="bg-gray-300 flex-1 items-center justify-center align-center aspect-square p-2 m-2 rounded-md">
            <Text className="text-white font-bold">L</Text>
          </View>
          <GamePoint color={gameState[0][0]} />
          <GamePoint color={gameState[0][1]} />
          <GamePoint color={gameState[0][2]} />
          <GamePoint color={gameState[0][3]} />
        </View>
        <View className="flex-row items-center flex-nowrap rounded-md bg-gray-500 w-100 mb-1">
          <View className="bg-gray-300 flex-1 items-center justify-center align-center aspect-square p-2 m-2 rounded-md">
            <Text className="text-white text-xs font-bold" style={{ fontSize: 8 }}>
              {indicators[1]}
            </Text>
          </View>
          <GameRowIndicator rowState={gameState[1]} />
          <GamePoint onPress={() => changeGameState(1, 0)} color={gameState[1][0]} />
          <GamePoint onPress={() => changeGameState(1, 1)} color={gameState[1][1]} />
          <GamePoint onPress={() => changeGameState(1, 2)} color={gameState[1][2]} />
          <GamePoint onPress={() => changeGameState(1, 3)} color={gameState[1][3]} />
        </View>
        <View className="flex-row items-center flex-nowrap rounded-md bg-gray-500 w-100 mb-1">
          <View className="bg-gray-300 flex-1 items-center justify-center align-center aspect-square p-2 m-2 rounded-md">
            <Text className="text-white text-xs font-bold" style={{ fontSize: 8 }}>
              {indicators[2]}
            </Text>
          </View>
          <GamePoint onPress={() => changeGameState(2, 0)} color={gameState[2][0]} />
          <GamePoint onPress={() => changeGameState(2, 1)} color={gameState[2][1]} />
          <GamePoint onPress={() => changeGameState(2, 2)} color={gameState[2][2]} />
          <GamePoint onPress={() => changeGameState(2, 3)} color={gameState[2][3]} />
        </View>
        <View className="flex-row items-center flex-nowrap rounded-md bg-gray-500 w-100 mb-1">
          <View className="bg-gray-300 flex-1 items-center justify-center align-center aspect-square p-2 m-2 rounded-md">
            <Text className="text-white text-xs font-bold" style={{ fontSize: 8 }}>
              {indicators[3]}
            </Text>
          </View>
          <GamePoint onPress={() => changeGameState(3, 0)} color={gameState[3][0]} />
          <GamePoint onPress={() => changeGameState(3, 1)} color={gameState[3][1]} />
          <GamePoint onPress={() => changeGameState(3, 2)} color={gameState[3][2]} />
          <GamePoint onPress={() => changeGameState(3, 3)} color={gameState[3][3]} />
        </View>
        <View className="flex-row items-center flex-nowrap rounded-md bg-gray-500 w-100 mb-1">
          <View className="bg-gray-300 flex-1 items-center justify-center align-center aspect-square p-2 m-2 rounded-md">
            <Text className="text-white text-xs font-bold" style={{ fontSize: 8 }}>
              {indicators[4]}
            </Text>
          </View>
          <GamePoint onPress={() => changeGameState(4, 0)} color={gameState[4][0]} />
          <GamePoint onPress={() => changeGameState(4, 1)} color={gameState[4][1]} />
          <GamePoint onPress={() => changeGameState(4, 2)} color={gameState[4][2]} />
          <GamePoint onPress={() => changeGameState(4, 3)} color={gameState[4][3]} />
        </View>
        <View className="flex-row items-center flex-nowrap rounded-md bg-gray-500 w-100 mb-1">
          <View className="bg-gray-300 flex-1 items-center justify-center align-center aspect-square p-2 m-2 rounded-md">
            <Text className="text-white text-xs font-bold" style={{ fontSize: 8 }}>
              {indicators[5]}
            </Text>
          </View>
          <GamePoint onPress={() => changeGameState(5, 0)} color={gameState[5][0]} />
          <GamePoint onPress={() => changeGameState(5, 1)} color={gameState[5][1]} />
          <GamePoint onPress={() => changeGameState(5, 2)} color={gameState[5][2]} />
          <GamePoint onPress={() => changeGameState(5, 3)} color={gameState[5][3]} />
        </View>
        <View className="flex-row items-center flex-nowrap rounded-md bg-gray-500 w-100 mb-1">
          <View className="bg-gray-300 flex-1 items-center justify-center align-center aspect-square p-2 m-2 rounded-md">
            <Text className="text-white text-xs font-bold" style={{ fontSize: 8 }}>
              {indicators[6]}
            </Text>
          </View>
          <GamePoint onPress={() => changeGameState(6, 0)} color={gameState[6][0]} />
          <GamePoint onPress={() => changeGameState(6, 1)} color={gameState[6][1]} />
          <GamePoint onPress={() => changeGameState(6, 2)} color={gameState[6][2]} />
          <GamePoint onPress={() => changeGameState(6, 3)} color={gameState[6][3]} />
        </View>
        <View className="flex-row items-center flex-nowrap rounded-md bg-gray-500 w-100 mb-1">
          <View className="bg-gray-300 flex-1 items-center justify-center align-center aspect-square p-2 m-2 rounded-md">
            <Text className="text-white text-xs font-bold" style={{ fontSize: 8 }}>
              {indicators[7]}
            </Text>
          </View>
          <GamePoint onPress={() => changeGameState(7, 0)} color={gameState[7][0]} />
          <GamePoint onPress={() => changeGameState(7, 1)} color={gameState[7][1]} />
          <GamePoint onPress={() => changeGameState(7, 2)} color={gameState[7][2]} />
          <GamePoint onPress={() => changeGameState(7, 3)} color={gameState[7][3]} />
        </View>
        <View className="flex-row items-center flex-nowrap rounded-md bg-gray-500 w-100 mb-1">
          <View className="bg-gray-300 flex-1 items-center justify-center align-center aspect-square p-2 m-2 rounded-md">
            <Text className="text-white text-xs font-bold" style={{ fontSize: 8 }}>
              {indicators[8]}
            </Text>
          </View>
          <GamePoint onPress={() => changeGameState(8, 0)} color={gameState[8][0]} />
          <GamePoint onPress={() => changeGameState(8, 1)} color={gameState[8][1]} />
          <GamePoint onPress={() => changeGameState(8, 2)} color={gameState[8][2]} />
          <GamePoint onPress={() => changeGameState(8, 3)} color={gameState[8][3]} />
        </View>
        <View className="flex-row items-center flex-nowrap rounded-md bg-gray-500 w-100 mb-1">
          <View className="bg-gray-300 flex-1 items-center justify-center align-center aspect-square p-2 m-2 rounded-md">
            <Text className="text-white text-xs font-bold" style={{ fontSize: 8 }}>
              {indicators[9]}
            </Text>
          </View>
          <GamePoint onPress={() => changeGameState(9, 0)} color={gameState[9][0]} />
          <GamePoint onPress={() => changeGameState(9, 1)} color={gameState[9][1]} />
          <GamePoint onPress={() => changeGameState(9, 2)} color={gameState[9][2]} />
          <GamePoint onPress={() => changeGameState(9, 3)} color={gameState[9][3]} />
        </View>
        <View className="flex-row items-center flex-nowrap rounded-md bg-gray-500 w-100 mb-1">
          <View className="bg-gray-300 flex-1 items-center justify-center align-center aspect-square p-2 m-2 rounded-md"></View>
          <View className="bg-gray-300 flex-1 items-center justify-center align-center aspect-square p-2 m-2 rounded-md">
            <Text className="text-white font-bold">A</Text>
          </View>
          <View className="bg-gray-300 flex-1 items-center justify-center align-center aspect-square p-2 m-2 rounded-md">
            <Text className="text-white font-bold">B</Text>
          </View>
          <View className="bg-gray-300 flex-1 items-center justify-center align-center aspect-square p-2 m-2 rounded-md">
            <Text className="text-white font-bold">C</Text>
          </View>
          <View className="bg-gray-300 flex-1 items-center justify-center align-center aspect-square p-2 m-2 rounded-md">
            <Text className="text-white font-bold">D</Text>
          </View>
        </View>
        <View className="flex-row items-center flex-nowrap rounded-md bg-gray-500 w-100">
          <GameColorPicker onPress={() => setColor(1)} color={1} currentColor={currentColor} />
          <GameColorPicker onPress={() => setColor(2)} color={2} currentColor={currentColor} />
          <GameColorPicker onPress={() => setColor(3)} color={3} currentColor={currentColor} />
          <GameColorPicker onPress={() => setColor(4)} color={4} currentColor={currentColor} />
          <GameColorPicker onPress={() => setColor(5)} color={5} currentColor={currentColor} />
          <GameColorPicker onPress={() => setColor(6)} color={6} currentColor={currentColor} />
          <GameColorPicker onPress={() => setColor(7)} color={7} currentColor={currentColor} />
          <GameColorPicker onPress={() => setColor(8)} color={8} currentColor={currentColor} />
        </View>
      </View>
    </BasicScreenTemplate>
  );
};

export default GameScreen;
