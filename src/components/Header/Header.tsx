import { FC } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useNavigate, useNavigation } from 'react-router-dom';
import { setAuth } from '../../store/reducers/authReducer';
import { useTypedSelector } from '../../store/store';
import { PATHS } from '../../utils/path';
import { CompanyIcon } from '../Icons/Icons';

interface IHeaderData {
  to: string;
  title: string;
  visible: boolean;
}

interface HeaderProps {
  data: IHeaderData[];
}

const Header: FC<HeaderProps> = ({ data }) => {
  const dispatch = useDispatch();
  const isAuth = useTypedSelector((state) => state.auth.auth);
  const navigate = useNavigate();

  const handleLogout = () => {
    if (isAuth) {
      dispatch(setAuth(false));
      localStorage.setItem('isAuth', String(Number(false)));
    } else {
      navigate(PATHS.login);
    }
  };

  return (
    <header className='header'>
      <div className='header__logo'>
        <CompanyIcon />
      </div>
      <nav className='header__links'>
        {data
          .filter(({ visible }) => visible)
          .map((link, index) => (
            <Link className='header__link' to={link.to} key={index}>
              {link.title}
            </Link>
          ))}
        <button className='header__link --sign-in' onClick={handleLogout}>
          {!isAuth ? 'Sign In' : 'Sign Out'}
        </button>
      </nav>
    </header>
  );
};

export { Header };
