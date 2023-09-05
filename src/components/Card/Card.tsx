import { FC, useState } from 'react';
import { ICard } from '../../types/cards';

export interface CardProps {
  card: ICard;
}

const Card: FC<CardProps> = ({ card }) => {
  const [flipped, setFlipped] = useState(false);

  return (
    <div className={`card ${flipped ? '_flipped' : ''}`}>
      <div className='card__front'>
        <span className='card__motivation'>{card.motivation}ㅤ</span>
        <h1 className='card__word'>{card.word}</h1>
        <span className='card__part'>{card.part}</span>
        <span className='card__meaning'>{card.meaning}</span>
        <button className='card__btn' onClick={() => setFlipped(true)}>
          TRANSLATION
        </button>
      </div>
      <div className='card__back'>
        <h1 className='card__translation'>{card.translation}</h1>
        <button className='card__btn' onClick={() => setFlipped(false)}>
          GO BACK
        </button>
      </div>
    </div>
  );
};

export { Card };
