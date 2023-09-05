import React from 'react';
import { Navigate } from 'react-router';
import { PATHS } from '../utils/path';

export interface IPermissionGuardProps {
  hasAccess: boolean;
}

export const AccessGuard: React.FC<
  React.PropsWithChildren<IPermissionGuardProps>
> = ({ hasAccess, ...restProps }) => {
  if (hasAccess) {
    return <React.Fragment {...restProps} />;
  }

  return <Navigate to={PATHS.root} replace />;
};
