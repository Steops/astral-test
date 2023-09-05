import { useDispatch, useSelector, TypedUseSelectorHook } from 'react-redux';

import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import {
  applyMiddleware,
  combineReducers,
  legacy_createStore as createStore,
} from 'redux';
import { cardsReducer } from './reducers/cardsReducer';
import { profileReducer } from './reducers/profileReducer';
import { authReducer } from './reducers/authReducer';

const rootReducer = combineReducers({
  cards: cardsReducer,
  profile: profileReducer,
  auth: authReducer,
});

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk)),
);

export type RootState = ReturnType<typeof store.getState>;
export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
