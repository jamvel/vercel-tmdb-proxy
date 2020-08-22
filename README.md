# vercel-tmdb-proxy

A simple proxy for the TMDB API using Vercel Serverless Functions

## Setup

Requires a `TMDB_API_KEY` environment variable which can be setup via Vercel (https://vercel.com/docs/build-step#environment-variables) or by creating a `.env` file.
<br><br>
Instructions to get a personal TMDB API key can be found here: https://developers.themoviedb.org/3/getting-started/introduction

## Local

To run Vercel serverless locally: 
- First install all packages using `npm i`
- Link your Vercel project to this project by running `vercel`
- Pull any Vercel env variables to your local machine using `vercel env pull`
- Then run `vercel dev` to run a local instance or `vercel dev --listen PORT` to run on a different port