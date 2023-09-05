import { FC, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { CardList } from 'components/CardList/CardList';
import { AppDispatch, useTypedSelector } from 'store/store';
import { IStateCards } from 'types/cards';
import { fetchCards } from 'store/actions/fetchCards';
import { Body } from 'components/Body/Body';

interface CardPageProps {}

const CardPage: FC<CardPageProps> = () => {
  const dispatch: any = useDispatch<AppDispatch>();
  const cardData: IStateCards = useTypedSelector((state) => state.cards);

  useEffect(() => {
    dispatch(fetchCards());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Body className='card-page'>
      <CardList cards={cardData.cards} />
    </Body>
  );
};

export default CardPage;
