export const navTitles = {
  // UNDEFINED: undefined,
  DEVELOP_SOFTWARE: 'Software',
  PRODUCE_MUSIC: 'Music',
  // BUILD_EXPERIENCES: 'Experiences',
  // INVEST_IN_PEOPLE: 'Community',
  CONTACT: 'Contact',
} as const;

// creates a type union from object literal
export type NavTitle = (typeof navTitles)[keyof typeof navTitles] | undefined;
