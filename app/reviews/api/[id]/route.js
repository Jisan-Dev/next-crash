import { reviews } from '../route';

export async function PATCH(request, { params }) {
  const { body } = await request.json();
  const review = reviews.find((r) => r.id === parseInt(params.id));
  const reviewIdx = reviews.findIndex((r) => r.id === parseInt(params.id));
  reviews[reviewIdx] = {
    id: review.id,
    body: body || review.body,
  };

  return Response.json({ message: 'review updated successfully', reviews });
}

export async function DELETE(request, { params }) {
  const newReviews = reviews.filter((r) => r.id !== parseInt(params.id));

  return Response.json({ message: 'review deleted successfully', newReviews });
}
