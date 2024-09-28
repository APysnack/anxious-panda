import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { signIn } from '../../store/userSlice';
import { RootState, useAppDispatch } from '../../store';
import SignInPage from '@/components/SignInPage/SignInPage';
import HomePage from '../../../components/HomePage/HomePage';

export default function SignInScreen(): JSX.Element {
  const dispatch = useAppDispatch();
  const user = useSelector((state: RootState) => state.user.user);

  const handleSignIn = async (
    email: string,
    password: string
  ): Promise<void> => {
    await dispatch(signIn({ email, password })).unwrap();
  };

  if (user) {
    return <HomePage />;
  }

  return <SignInPage handleSignIn={handleSignIn} />;
}
