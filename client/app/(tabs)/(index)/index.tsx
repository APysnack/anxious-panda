import React, { useState, useEffect } from 'react';
import { Button } from 'react-native';
import { useRouter } from 'expo-router';
import { useSelector } from 'react-redux';
import { signIn } from '../../store/userSlice';
import { RootState, useAppDispatch } from '../../store';
import { Container, Title, Input, ErrorText } from './index.styles';

export default function SignInScreen(): JSX.Element {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const [error, setError] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const user = useSelector((state: RootState) => state.user.user);

  useEffect(() => {
    if (user) {
      router.push('/home');
    }
  }, [user]);

  const handleSignIn = async (): Promise<void> => {
    setError('');
    try {
      await dispatch(signIn({ email, password })).unwrap();
    } catch (err: any) {
      setError(err.message || 'Failed to sign in');
    }
  };

  return (
    <Container>
      {error ? <ErrorText>{error}</ErrorText> : null}
      <Title>Sign In</Title>
      <Input
        placeholder='Email'
        value={email}
        onChangeText={setEmail}
        keyboardType='email-address'
        autoCapitalize='none'
      />
      <Input
        placeholder='Password'
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <Button title='Sign In' onPress={handleSignIn} />
    </Container>
  );
}
