import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

export const authOptions = {
  session: {
    strategy: 'jwt', //default
    secret: process.env.NEXTAUTH_SECRET,
  },
  providers: [
    CredentialsProvider({
      credentials: {
        email: { label: 'Email', type: 'text', required: true, placeholder: 'Your Email' },
        password: { label: 'Password', type: 'password', required: true, placeholder: 'Enter Password' },
      },
      async authorize(credentials) {
        const { email, password } = credentials;
        if (!credentials) return null;

        if (email) {
          const currentUser = users.find((user) => user.email === email);
          // console.log('currentUser=> ', currentUser);
          if (currentUser && currentUser.password === password) return currentUser;
        }
        return null;
      },
    }),
  ],
};
const handler = NextAuth(authOptions);

const users = [
  { id: 1, name: 'John Doe', email: 'john.doe@example.com', password: 'password123' },
  { id: 2, name: 'Jane Smith', email: 'jane.smith@example.com', password: 'secret123' },
  { id: 3, name: 'Alice Johnson', email: 'alice.johnson@example.com', password: 'qwerty123' },
];

export { handler as GET, handler as POST };
