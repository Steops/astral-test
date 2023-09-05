import { FC } from 'react';

interface BodyProps {
  className?: string;
  children: React.ReactNode;
}

const Body: FC<BodyProps> = ({ className = '', children }) => (
  <section className={`body ${className}`}>{children}</section>
);

export { Body };
