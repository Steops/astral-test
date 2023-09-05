import { IProfile } from '../../types/profile';

export interface FormProfileValues {
  firstName: string;
  lastName: string;
  surname: string;
  email: string;
  birthDate: string;
  gettingUp: string;
  tel: string;
  work: string;
  pet: string;
  wow: string;
  petName: string;
  german: boolean;
  tongue: boolean;
  married: string;
  manicure: boolean;
  motherInLaw: boolean;
  alone: boolean;
  searchWife: boolean;
  giraffe: boolean;
  driver: boolean;
  number: number;
}

export const getInitialProfileValues = (
  savedData: IProfile,
): FormProfileValues => ({
  firstName: savedData.firstName ?? 'Stepan',
  lastName: savedData.lastName ?? 'Polyakov',
  surname: savedData.surname ?? 'Nikolaevich',
  email: savedData.email ?? 'steops360@gmail.com',
  birthDate: savedData.birthDate ?? '1999-06-15',
  gettingUp: savedData.gettingUp ?? '2022-04-17T04:30',
  tel: savedData.tel ?? '79032809899',
  work: savedData.work ?? 'frontend-developer',
  pet: savedData.pet ?? 'cat',
  wow: savedData.wow ?? 'horde',
  petName: savedData.petName ?? 'Vaflya',
  german: savedData.german ?? false,
  tongue: savedData.tongue ?? false,
  married: savedData.married ?? 'married',
  manicure: savedData.manicure ?? false,
  motherInLaw: savedData.motherInLaw ?? true,
  alone: savedData.alone ?? false,
  searchWife: savedData.searchWife ?? false,
  giraffe: savedData.giraffe ?? false,
  driver: savedData.driver ?? true,
  number: savedData.number ?? 36,
});
