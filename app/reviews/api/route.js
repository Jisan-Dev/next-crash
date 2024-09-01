export async function GET() {
  return Response.json(reviews);
}

export async function POST(request) {
  const { body } = await request.json();
  reviews.push({ id: reviews.length + 1, body });
  return Response.json({ message: 'New review added', reviews });
}

export const reviews = [
  {
    id: 1,
    body: 'Review 1',
  },
  {
    id: 2,
    body: 'Review 2',
  },
  {
    id: 3,
    body: 'Review 3',
  },
];
