import { FC, useState } from 'react';
import { Formik, Form } from 'formik';
import { useNavigate } from 'react-router';
import { useDispatch } from 'react-redux';
import * as Yup from 'yup';
import { PATHS } from 'utils/path';
import { setAuth } from 'store/reducers/authReducer';

import { FieldInput } from 'components/FieldInput/FieldInput';
import { Body } from 'components/Body/Body';

interface LoginPageProps {}

interface ILoginValues {
  login: string;
  password: string;
}

const LoginShema = Yup.object().shape({
  login: Yup.string().required('Required'),
  password: Yup.string().min(4, 'Too Short!').required('Required'),
});

const initialValues: ILoginValues = { login: '', password: '' };

const LoginPage: FC<LoginPageProps> = () => {
  const [error, setError] = useState('');

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = (values: ILoginValues) =>
    new Promise<void>((resolve, reject) => {
      setTimeout(() => {
        if (values.login === 'admin' && values.password === 'admin') {
          dispatch(setAuth(true));
          localStorage.setItem('isAuth', String(Number(true)));
          navigate(PATHS.root);
          resolve();
        } else {
          setError('Wrong login or password');
          reject();
        }
      }, 2000);
    });

  return (
    <Body className='login-page'>
      <h1 className='login-page__title'>Login</h1>
      <Formik
        initialValues={initialValues}
        validationSchema={LoginShema}
        onSubmit={handleSubmit}
      >
        {(props) => (
          <Form className='login-page__form'>
            <FieldInput
              type='text'
              name='login'
              className='login-page__field'
              errorClassName='login-page__error-email'
              onFocus={() => setError('')}
              placeholder='login'
            />
            <FieldInput
              type='password'
              name='password'
              className='login-page__field'
              errorClassName='login-page__error-password'
              onFocus={() => setError('')}
              placeholder='password'
            />
            {error && (
              <span className='login-page__error-password'>{error}</span>
            )}
            <button
              type='submit'
              disabled={props.isSubmitting}
              className='login-page__button'
            >
              {props.isSubmitting ? 'Loading...' : 'Submit'}
            </button>
          </Form>
        )}
      </Formik>
    </Body>
  );
};

export default LoginPage;
