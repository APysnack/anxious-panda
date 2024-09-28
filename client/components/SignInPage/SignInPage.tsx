import React, { useState } from 'react';
import { Button } from 'react-native';
import { Container, Title, Input, ErrorText } from './SignInPage.styles';
import { signIn } from '@/app/store/userSlice';
import { useAppDispatch } from '@/app/store';

const SignInPage: React.FC = () => {
  const dispatch = useAppDispatch();
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [error, setError] = useState<string>('');

  const handleSignIn = async (
    email: string,
    password: string
  ): Promise<void> => {
    await dispatch(signIn({ email, password })).unwrap();
  };

  const onSignIn = async () => {
    setError(''); // Reset error state
    try {
      await handleSignIn(email, password); // Call the provided sign-in function
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
      <Button title='Sign In' onPress={onSignIn} />
    </Container>
  );
};

export default SignInPage;
