import { Navigate, useRoutes } from 'react-router';
import React, { Suspense } from 'react';

import { Loader } from 'components/Loader/Loader';
import { AccessGuard } from 'guards/accessGuard';
import { useTypedSelector } from 'store/store';
import { PATHS } from './path';

// ---- Pages ---- //
const MainPage = React.lazy(() => import('pages/MainPage/MainPage'));
const LoginPage = React.lazy(() => import('pages/LoginPage/LoginPage'));
const ProfilePage = React.lazy(() => import('pages/ProfilePage/ProfilePage'));
const CardPage = React.lazy(() => import('pages/CardPage/CardPage'));

export const Router = () => {
  const isAuth = useTypedSelector((state) => state.auth.auth);

  const router = useRoutes([
    {
      path: PATHS.root,
      element: (
        <Suspense fallback={<Loader />}>
          <MainPage />
        </Suspense>
      ),
    },
    {
      path: PATHS.cards,
      element: (
        <Suspense fallback={<Loader />}>
          <CardPage />
        </Suspense>
      ),
    },
    {
      path: PATHS.profile,
      element: (
        <Suspense fallback={<Loader />}>
          <AccessGuard hasAccess={isAuth}>
            <ProfilePage />
          </AccessGuard>
        </Suspense>
      ),
    },
    {
      path: PATHS.login,
      element: (
        <Suspense fallback={<Loader />}>
          <AccessGuard hasAccess={!isAuth}>
            <LoginPage />
          </AccessGuard>
        </Suspense>
      ),
    },
    { path: '*', element: <Navigate to='/' replace /> },
  ]);

  return router;
};
