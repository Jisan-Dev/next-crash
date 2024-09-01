export const dynamic = 'force-dynamic'; // to stop caching
export async function GET() {
  return Response.json({ currentTime: new Date().toLocaleTimeString() });
}
