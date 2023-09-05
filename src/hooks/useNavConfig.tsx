import { useMemo } from 'react';

import { useTypedSelector } from 'store/store';
import { PATHS } from 'utils/path';

export const useNavConfig = () => {
  const auth = useTypedSelector((state) => state.auth.auth);

  const config = useMemo(
    () => [
      { to: PATHS.root, title: 'Main', visible: true },
      { to: PATHS.cards, title: 'Cards', visible: true },
      { to: PATHS.profile, title: 'Profile', visible: !!auth },
    ],
    [auth],
  );

  return config;
};
