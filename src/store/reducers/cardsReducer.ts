import {
  CardsAction,
  CardsActionTypes,
  ICard,
  IStateCards,
} from '../../types/cards';

const defaultState: IStateCards = {
  cards: [],
  loading: false,
  error: null,
};
export const cardsReducer = (state = defaultState, action: CardsAction) => {
  switch (action.type) {
    case CardsActionTypes.FETCH_CARDS:
      return {
        loading: true,
        error: null,
        cards: [...state.cards],
      };
    case CardsActionTypes.FETCH_CARDS_SUCCESS:
      return {
        loading: false,
        error: null,
        cards: action.payload,
      };
    case CardsActionTypes.FETCH_CARDS_ERROR:
      return {
        loading: false,
        error: action.payload,
        cards: [...state.cards],
      };
    default:
      return state;
  }
};

export const getCards = (cards: ICard[]) => ({
  type: CardsActionTypes.FETCH_CARDS,
  payload: cards,
});
