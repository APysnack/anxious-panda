import React, { useEffect, useState } from 'react';
import { View, Text, FlatList } from 'react-native';
import axios from 'axios';

interface GameRoom {
  id: number; // Adjust based on your GameRoom model
  name: string; // Adjust based on your GameRoom model
}

export default function HomeScreen() {
  const [gameRooms, setGameRooms] = useState<GameRoom[]>([]);

  useEffect(() => {
    const fetchGameRooms = async () => {
      try {
        const response = await axios.get('http://localhost:3000/game_rooms', {
          headers: {
            Accept: 'application/json',
          },
        });
        console.log(response);
        setGameRooms(response.data);
        console.log(response.data);
      } catch (error) {
        console.error('Error fetching game rooms:', error);
      }
    };

    fetchGameRooms();
  }, []);

  return (
    <View>
      <Text>Hello, World!</Text>
      <FlatList
        data={gameRooms}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <Text>{item.name}</Text>} // Adjust the property as needed
      />
    </View>
  );
}
