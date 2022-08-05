import NextAuth from 'next-auth';
import GithubProvider from 'next-auth/providers/github';
import dotenv from 'dotenv';
import path from 'path';
dotenv.config({ path: path.resolve('..', '..', '..', '.env') });

const options = {
  // Configure one or more authentication providers
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    // ...add more providers here
  ],
  database: process.env.DATABASE_URL,
};

export default NextAuth(options);
