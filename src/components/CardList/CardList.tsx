import { FC, useState } from 'react';
import { useTypedSelector } from '../../store/store';
import { ICard } from '../../types/cards';
import { Card } from '../Card/Card';
import { Loader } from 'components/Loader/Loader';

interface CardListProps {
  cards: ICard[];
}

const CardList: FC<CardListProps> = ({ cards }) => {
  const [cardCount, setCardCount] = useState(6);
  const cardsLength = cards.length;
  const cardData = cards.slice(0, cardCount);
  const isAuth = useTypedSelector((state) => state.auth.auth);

  return (
    <>
      {!!cardData.length ? (
        <div className={`cardList ${!isAuth && '--hidden-cardList'}`}>
          {cardData.map((card) => (
            <Card card={card} key={card.id} />
          ))}
        </div>
      ) : (
        <Loader />
      )}
      {cardCount <= cardsLength && (
        <button
          className='cardList__btn'
          onClick={() => setCardCount((prev) => prev + 6)}
        >
          SHOW MORE
        </button>
      )}
    </>
  );
};

export { CardList };
