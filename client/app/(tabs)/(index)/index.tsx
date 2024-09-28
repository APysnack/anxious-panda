import React from 'react';
import withAuth from '@/app/utils/withAuth';
import HomePage from '@/components/HomePage/HomePage';

function HomeScreen(): JSX.Element {
  return <HomePage />;
}

export default withAuth(HomeScreen);
