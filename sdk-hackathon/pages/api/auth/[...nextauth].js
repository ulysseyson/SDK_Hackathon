import NextAuth from 'next-auth';
import GithubProvider from 'next-auth/providers/github';
// import { PrismaAdapter } from '@next-auth/prisma-adapter';
import { PrismaAdapter } from '../../../prisma/adapter';
import { PrismaClient } from '@prisma/client';
import dotenv from 'dotenv';
import path from 'path';
dotenv.config({ path: path.resolve('..', '..', '..', '.env') });

const prisma = new PrismaClient();

const options = {
  // Configure one or more authentication providers
  adapter: new PrismaAdapter(prisma),
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    // ...add more providers here
  ],
  database: process.env.DATABASE_URL,
  debug: process.env.NODE_ENV === 'development',
  secret: process.env.AUTH_SECRET,
};

export default NextAuth(options);
