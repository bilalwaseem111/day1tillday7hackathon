import { createClient } from '@sanity/client';

export const sanityClient = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID, // Ensure this is correct
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET, // Ensure this is correct
  apiVersion: '2023-01-01', // Adjust to your schema's API version
  useCdn: true, // Set to `false` if you need fresh data
});
