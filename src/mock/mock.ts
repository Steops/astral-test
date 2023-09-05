import mainpageimage from 'assets/images/mainpageimg.png';

export const mock = {
  main: {
    text: {
      title: 'Effective english courses for kids and teenagers',
      info: 'With proffesional teachers, flexible learning schedules and courses for all levels you will speak confidently in no time.',
    },
    image: {
      src: mainpageimage,
      alt: 'Computer and note',
    },
  },
  contacts: {
    developer: 'Stepan Polyakov',
    github: 'https://github.com/Steops',
    year: '2023',
  },
  fieldsData: [
    { type: 'text', name: 'firstName', title: 'first name' },
    { type: 'text', name: 'lastName', title: 'last name' },
    { type: 'text', name: 'surname', title: 'surname' },
    { type: 'email', name: 'email', title: 'email' },
    { type: 'datepicker', name: 'birthDate', title: 'birth date' },
    { type: 'timepicker', name: 'gettingUp', title: 'getting up' },
    { type: 'text', name: 'tel', title: 'phone number' },
    { type: 'text', name: 'work', title: 'work' },
    { type: 'number', name: 'number', title: 'favorite number' },
    {
      as: 'select',
      name: 'pet',
      title: 'pet',
      options: ['cat', 'dog', 'pig', 'parrot'],
    },
    { type: 'text', name: 'petName', title: 'pet name' },
    {
      as: 'select',
      name: 'wow',
      title: 'wow',
      options: ['horde', 'alliance'],
    },
    { type: 'checkbox', name: 'german', title: 'I know German' },
    {
      type: 'checkbox',
      name: 'tongue',
      title: 'I can reach my tongue with my nose',
    },
    { type: 'checkbox', name: 'giraffe', title: 'never seen a giraffe' },
    {
      type: 'radio',
      name: 'married',
      title: 'Married',
      value: 'married',
    },
    {
      type: 'radio',
      name: 'married',
      title: 'in the relationship',
      value: 'relationship',
    },
    {
      type: 'radio',
      name: 'married',
      title: 'Single',
      value: 'single',
    },
    { type: 'checkbox', name: 'motherInLaw', title: 'I love my mother in law' },

    {
      type: 'checkbox',
      name: 'manicure',
      title: "I pay for my wife's manicure",
    },
    { type: 'checkbox', name: 'driver', title: 'Driver license' },
  ],
};
