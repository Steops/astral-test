import { FC } from 'react';
import { mock } from '../../mock/mock';
import { GithubIcon } from '../Icons/Icons';

interface FooterProps {}

const Footer: FC<FooterProps> = () => (
  <footer className='footer'>
    <div className='footer__items'>
      <span className='footer__developer'>{mock.contacts.developer}</span>
      <span className='footer__year'>{mock.contacts.year}</span>
      <a
        target='_blank'
        rel='noreferrer'
        href={mock.contacts.github}
        className='footer__link'
      >
        <GithubIcon />
      </a>
    </div>
  </footer>
);

export { Footer };
