import sanityClient from '@sanity/client';
//fuck you

export const client = sanityClient({
  projectId: '0wmlbhxw',
  dataset: 'tiktok',
  apiVersion: '2022-03-10',
  useCdn: false,
  token: process.env.NEXT_PUBLIC_SANITY_TOKEN,
});
