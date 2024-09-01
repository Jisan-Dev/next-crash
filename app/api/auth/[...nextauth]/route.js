import NextAuth from 'next-auth';

const handler = NextAuth({
  session: {
    strategy: 'jwt', //default
  },
  providers: [],
});

export { handler as GET, handler as POST };
