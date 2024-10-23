export const navTitles = {
  DEVELOP_SOFTWARE: 'Develop Software',
  PRODUCE_MUSIC: 'Produce Music',
  BUILD_EXPERIENCES: 'Build Experiences',
  INVEST_IN_PEOPLE: 'Invest in People',
  CONTACT: 'Contact',
  UNDEFINED: undefined,
} as const;

// creates a type union from object literal
export type NavTitle = (typeof navTitles)[keyof typeof navTitles];
