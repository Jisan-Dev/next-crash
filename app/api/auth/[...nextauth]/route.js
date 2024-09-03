import connectDB from '@/lib/connectDB';
import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

export const authOptions = {
  session: {
    strategy: 'jwt', //default
    secret: process.env.NEXTAUTH_SECRET,
    maxAge: 24 * 60 * 60, //24hours (calculate din seconds)
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
          const db = await connectDB();
          const userCollection = db.collection('users');
          const currentUser = await userCollection.findOne({ email });
          // const currentUser = users.find((user) => user.email === email);
          console.log('currentUser=> ', currentUser);
          if (currentUser && currentUser.password === password) return currentUser;
        }
        return null;
      },
    }),
  ],
  callbacks: {
    async jwt({ token, account, user }) {
      // Persist the OAuth access_token and or the user id to the token right after signin
      if (account) {
        token.id = user.id;
      }
      return token;
    },
    async session({ session, token }) {
      session.user.id = token.id;
      return session;
    },
  },
};

const handler = NextAuth(authOptions);

const users = [
  {
    id: 1,
    name: 'John Doe',
    email: 'john.doe@example.com',
    password: 'password123',
    image: 'https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
  {
    id: 2,
    name: 'Jane Smith',
    email: 'jane.smith@example.com',
    password: 'secret123',
    image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
  { id: 3, name: 'Alice Johnson', email: 'alice.johnson@example.com', password: 'qwerty123' },
];

export { handler as GET, handler as POST };
