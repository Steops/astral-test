export interface IProfile {
  firstName: string | null;
  lastName: string | null;
  surname: string | null;
  email: string | null;
  tel: string | null;
  pet: string | null;
  wow: string | null;
  petName: string | null;
  birthDate: string | null;
  work: string | null;
  gettingUp: string | null;
  married: string | null;
  manicure: boolean;
  motherInLaw: boolean;
  german: boolean;
  tongue: boolean;
  alone: boolean;
  searchWife: boolean;
  giraffe: boolean;
  driver: boolean;
  number: number | null;
}

export interface IStateProfile {
  profile: IProfile;
}

export enum ProfileActionTypes {
  SET_PROFILE,
}

export interface SetProfileAction {
  type: ProfileActionTypes.SET_PROFILE;
  payload: any;
}

export type ProfileAction = SetProfileAction;
