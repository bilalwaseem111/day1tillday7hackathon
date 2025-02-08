"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sanityClient = void 0;
const client_1 = require("@sanity/client");
exports.sanityClient = (0, client_1.createClient)({
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID, // Ensure this is correct
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET, // Ensure this is correct
    apiVersion: '2023-01-01', // Adjust to your schema's API version
    useCdn: true, // Set to `false` if you need fresh data
});
