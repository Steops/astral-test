import axios from 'axios';
import { AppDispatch } from '../store';
import { CardsActionTypes } from '../../types/cards';

export const fetchCards = () => async (dispatch: AppDispatch) => {
  try {
    dispatch({ type: CardsActionTypes.FETCH_CARDS });
    const response = await axios.get(`${process.env.REACT_APP_URL}`);

    dispatch({
      type: CardsActionTypes.FETCH_CARDS_SUCCESS,
      payload: response.data,
    });
  } catch (error) {
    dispatch({
      type: CardsActionTypes.FETCH_CARDS_ERROR,
      payload: 'Произошла ошибка',
    });
  }
};
