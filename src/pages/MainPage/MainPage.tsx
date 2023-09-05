import { FC } from 'react';
import { Body } from 'components/Body/Body';
import { Image } from 'components/Image/Image';
import { mock } from 'mock/mock';

interface MainPageProps {}

const MainPage: FC<MainPageProps> = () => (
  <Body className='main-page'>
    <Image
      src={mock.main.image.src}
      alt={mock.main.image.alt}
      className='main-page__image'
    />
    <div className='main-page__description'>
      <h1 className='main-page__title'>{mock.main.text.title}</h1>
      <span className='main-page__info'>{mock.main.text.info}</span>
    </div>
  </Body>
);

export default MainPage;
