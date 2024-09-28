import React from 'react';
import { useSelector } from 'react-redux';
import SignInPage from '../../components/SignInPage/SignInPage';
import { RootState } from '../store';

const withAuth = <P extends object>(
  WrappedComponent: React.ComponentType<P>
) => {
  const AuthHOC: React.FC<P> = (props: P) => {
    const user = useSelector((state: RootState) => state.user.user);

    if (!user) {
      return <SignInPage />;
    }

    return <WrappedComponent {...props} />;
  };

  return AuthHOC;
};

export default withAuth;
