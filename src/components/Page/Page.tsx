import { FC } from 'react';

interface PageProps {
  children: React.ReactNode;
  className?: string;
}

const Page: FC<PageProps> = ({ children }) => (
  <div className='page'>
    <div className='page__wrapper'>{children}</div>
  </div>
);

export { Page };
