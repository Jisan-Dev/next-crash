export default async function Home() {
  const res = await fetch('http://localhost:3000/time', { cache: 'no-store' });
  const data = await res.json();

  return (
    <main>
      <h1>HELLO WORLD</h1>
      <div>
        <span className="font-bold mt-2 text-indigo-500">Current Time:</span> {data?.currentTime}
      </div>
    </main>
  );
}
