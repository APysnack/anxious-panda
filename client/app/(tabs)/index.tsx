import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import axios from 'axios';
import { useRouter } from 'expo-router';
import { useDispatch } from 'react-redux';
import { setUser } from '../store/userSlice';

interface SignInResponse {
  token: string;
  user: {
    id: number;
    email: string;
  };
}

const SERVER_URL = 'http://localhost:3000';

export default function SignInScreen(): JSX.Element {
  const dispatch = useDispatch();
  const router = useRouter();
  const [error, setError] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handleSignIn = async (): Promise<void> => {
    try {
      const response = await axios.post<SignInResponse>(
        `${SERVER_URL}/sign_in`,
        {
          email,
          password,
        },
        {
          headers: {
            Accept: 'application/json',
          },
        }
      );

      if (response?.data?.token) {
        dispatch(setUser(response.data));
        router.push('/home');
      }
    } catch (error: any) {
      setError(error.message || 'An error occurred');
    }
  };

  return (
    <View style={styles.container}>
      {error ? <Text style={styles.error}>{error}</Text> : null}
      <Text style={styles.title}>Sign In</Text>
      <TextInput
        style={styles.input}
        placeholder='Email'
        value={email}
        onChangeText={setEmail}
        keyboardType='email-address'
        autoCapitalize='none'
      />
      <TextInput
        style={styles.input}
        placeholder='Password'
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <Button title='Sign In' onPress={handleSignIn} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop: 100,
    gap: 10,
    padding: 16,
    paddingHorizontal: 32,
  },
  title: {
    fontSize: 24,
    marginBottom: 16,
    textAlign: 'center',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 8,
    paddingHorizontal: 8,
    width: '100%',
    maxWidth: 300,
  },
  error: {
    color: 'red',
  },
});
