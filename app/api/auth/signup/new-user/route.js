import connectDB from '@/lib/connectDB';

export const POST = async (request) => {
  try {
    const db = await connectDB();
    const userCollection = db.collection('users');
    const newUser = await request.json();
    const res = await userCollection.insertOne(newUser);
    return Response.json({ message: 'New user created', response: res });
  } catch (error) {
    console.log(error);
    return Response.json({ message: 'Something went wrong', response: null });
  }
};
