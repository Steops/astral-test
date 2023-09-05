import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import './assets/scss/index.scss';
import { Footer } from 'components/Footer/Footer';
import { Header } from './components/Header/Header';
import { Page } from './components/Page/Page';
import { setAuth } from './store/reducers/authReducer';
import { AppDispatch } from './store/store';
import { Router } from './utils/routes';
import { useNavConfig } from './hooks/useNavConfig';

const App = () => {
  const navConfig = useNavConfig();

  const dispatch: any = useDispatch<AppDispatch>();
  const isAuthLocalStorage = Boolean(Number(localStorage.getItem('isAuth')));

  useEffect(() => {
    dispatch(setAuth(isAuthLocalStorage));
  }, [dispatch, isAuthLocalStorage]);

  return (
    <Page>
      <Header data={navConfig} />
      <div className='router_layout'>
        <Router />
      </div>
      <Footer />
    </Page>
  );
};

export default App;
