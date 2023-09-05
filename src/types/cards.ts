export interface ICard {
  motivation?: string;
  word: string;
  part: string;
  meaning: string;
  translation: string;
  id: string;
}

export interface IStateCards {
  cards: ICard[];
  loading: false;
  error: null;
}

export enum CardsActionTypes {
  FETCH_CARDS = 'FETCH_CARDS',
  FETCH_CARDS_SUCCESS = 'FETCH_CARDS_SUCCESS',
  FETCH_CARDS_ERROR = 'FETCH_CARDS_ERROR',
}
export interface FetchCardsAction {
  type: CardsActionTypes.FETCH_CARDS;
}

export interface FetchCardsSuccessAction {
  type: CardsActionTypes.FETCH_CARDS_SUCCESS;
  payload: ICard[];
}

export interface FetchCardsErrorAction {
  type: CardsActionTypes.FETCH_CARDS_ERROR;
  payload: string;
}

export type CardsAction =
  | FetchCardsAction
  | FetchCardsErrorAction
  | FetchCardsSuccessAction;
