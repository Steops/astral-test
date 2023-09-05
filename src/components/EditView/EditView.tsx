import { DatePicker, TimePicker } from '@mui/x-date-pickers';
import dayjs from 'dayjs';
import { Field, Form, Formik } from 'formik';
import { FC, useMemo } from 'react';
import { useDispatch } from 'react-redux';
import * as Yup from 'yup';
import { useNavigate } from 'react-router';
import { setProfile } from '../../store/reducers/profileReducer';
import { IProfile } from '../../types/profile';
import { getInitialProfileValues } from './types';
import { useTypedSelector } from '../../store/store';
import { FieldInput } from '../FieldInput/FieldInput';
import { PATHS } from '../../utils/path';

export interface IField {
  type?: string;
  name: string;
  title: string;
  as?: string;
  value?: string;
  options?: string[];
}

interface EditViewProps {
  data: IField[];
}

const ProfileShema = Yup.object().shape({
  firstName: Yup.string().required('⚠ Required'),
  lastName: Yup.string().required('⚠ Required'),
  surname: Yup.string().required('⚠ Required'),
  email: Yup.string()
    .required('⚠ Required')
    .matches(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      '⚠ Invalid email address',
    ),
  birthDate: Yup.string(),
  gettingUp: Yup.string(),
  tel: Yup.string()
    .required('Required')
    .matches(
      /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,
      '⚠ Invalid phone number',
    ),
  work: Yup.string(),
  pet: Yup.string(),
  wow: Yup.string(),
  petName: Yup.string(),
  german: Yup.boolean(),
  tongue: Yup.boolean(),
  married: Yup.string(),
  manicure: Yup.boolean(),
  motherInLaw: Yup.boolean(),
  alone: Yup.boolean(),
  searchWife: Yup.boolean(),
  giraffe: Yup.boolean(),
  driver: Yup.boolean(),
});

const EditView: FC<EditViewProps> = ({ data }) => {
  const profile = useTypedSelector((state) => state.profile.profile);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const initialValues = useMemo(
    () => getInitialProfileValues(profile),
    [profile],
  );

  const handleDispatch = (props: IProfile) =>
    new Promise<void>((resolve) => {
      setTimeout(() => {
        dispatch(setProfile(props));
        navigate(PATHS.root);
        resolve();
      }, 2000);
    });

  return (
    <div className='edit-view'>
      <Formik
        initialValues={initialValues}
        onSubmit={(values) => {
          handleDispatch(values);
        }}
        validationSchema={ProfileShema}
      >
        {(props) => {
          if (props.values.married !== 'married') {
            props.values.manicure = false;
            props.values.motherInLaw = false;
          } else {
            props.values.alone = false;
            props.values.searchWife = false;
          }
          return (
            <Form className='edit-view__form'>
              <div className='edit-view__inputs'>
                {data.map((field, index) => (
                  <label className='edit-view__label' key={index}>
                    {field.type !== 'datepicker' &&
                      field.type !== 'timepicker' &&
                      field.type !== 'radio' && (
                        <FieldInput
                          type={field.type}
                          name={field.name}
                          as={field.as}
                          className='edit-view__field'
                          errorClassName='edit-view__error'
                          placeholder={field.title}
                          options={field.options}
                          title={field.title}
                          titleClassName='edit-view__title'
                          disabled={
                            !!(
                              (field.name === 'motherInLaw' ||
                                field.name === 'manicure') &&
                              props.values.married !== 'married'
                            )
                          }
                        />
                      )}

                    {field.type === 'radio' && (
                      <>
                        <Field
                          type={field.type}
                          name={field.name}
                          as={field.as}
                          value={field.value}
                          className='edit-view__field'
                        />
                        <span className='edit-view__title'>{field.title}</span>
                      </>
                    )}
                    {field.type === 'timepicker' && (
                      <>
                        <TimePicker
                          className='edit-view__field'
                          defaultValue={dayjs(props.initialValues.gettingUp)}
                          sx={{ width: '221px' }}
                          onChange={(value) =>
                            props.setFieldValue('gettingUp', value?.toDate())
                          }
                        />
                        <span className='edit-view__title'>{field.title}</span>
                      </>
                    )}
                    {field.type === 'datepicker' && (
                      <>
                        <DatePicker
                          className='edit-view__field'
                          defaultValue={dayjs(props.initialValues.birthDate)}
                          sx={{ maxWidth: '222px' }}
                          onChange={(value) =>
                            props.setFieldValue('birthDate', value?.toDate())
                          }
                        />
                        <span className='edit-view__title'>{field.title}</span>
                      </>
                    )}
                  </label>
                ))}
              </div>
              <button type='submit' className='edit-view__button'>
                {props.isSubmitting ? 'Loading...' : 'Submit'}
              </button>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};

export { EditView };
