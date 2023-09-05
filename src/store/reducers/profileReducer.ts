import {
  IProfile,
  IStateProfile,
  ProfileActionTypes,
  SetProfileAction,
} from '../../types/profile';

const initialProfileState: IStateProfile = {
  profile: {
    firstName: null,
    lastName: null,
    surname: null,
    email: null,
    tel: null,
    pet: null,
    wow: null,
    petName: null,
    birthDate: null,
    work: null,
    gettingUp: null,
    married: null,
    manicure: false,
    motherInLaw: false,
    german: false,
    number: null,
    tongue: false,
    alone: false,
    searchWife: false,
    giraffe: false,
    driver: false,
  },
};
export const profileReducer = (
  state = initialProfileState,
  action: SetProfileAction,
) => {
  switch (action.type) {
    case ProfileActionTypes.SET_PROFILE:
      return {
        profile: action.payload,
      };
    default:
      return state;
  }
};

export const setProfile = (profile: IProfile) => ({
  type: ProfileActionTypes.SET_PROFILE,
  payload: profile,
});
