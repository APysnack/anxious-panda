// SignInPage.tsx
import React, { useState } from 'react';
import { Button } from 'react-native';
import { Container, Title, Input, ErrorText } from './SignInPage.styles';

interface SignInPageProps {
  handleSignIn: (email: string, password: string) => Promise<void>;
}

const SignInPage: React.FC<SignInPageProps> = ({ handleSignIn }) => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [error, setError] = useState<string>('');

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
