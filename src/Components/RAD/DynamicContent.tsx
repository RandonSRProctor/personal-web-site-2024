import { Prism } from './Prism/Prism';

/**
 * This is a manifest of all content and their titles.
 * The titles (key) will
 */

export const dynamicContent = {
  Prism: Prism,
  Nothing: null,
} as const;

export const dynamicContentTitles = [...Object.keys(dynamicContent)] as const;

export type DynamicContentTitle = keyof typeof dynamicContent;

// Alternative way to create type union
// export type DynamicContentTitle = (typeof dynamicContentTitles)[number];

// If I wanted a Union of Values
// export type DynamicContentValues =
//   (typeof dynamicContent)[keyof typeof dynamicContent];

type Props = {
  title: DynamicContentTitle;
};

export const DynamicContent = ({ title }: Props) => {
  const SelectedContent = dynamicContent[title];

  if (SelectedContent === null) {
    return null;
  }

  return <SelectedContent />;
};
