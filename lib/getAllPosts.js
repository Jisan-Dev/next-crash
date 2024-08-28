export default async function getAllPosts() {
  const result = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=10', {
    // cache: 'force-cache', // default nature of nextjs. one alternative is using {cache: "no=store"} which will never cache data, but we can still cache data and revalidate after some time(example below). this will still make the page as static content from server but it'll keep checking is there any new data. if we use{cache: "no=store"} it'll make the page dynamic meaning it'll render on demand every time making api calls.

    next: { revalidate: 10 }, //now the page will be rendered as prerender from server. still be checking after 10seconds always. (ISR: Incremental Static Render)
  });

  if (!result.ok) {
    throw new Error(`Failed to fetch posts ${result.status}`);
  }

  return result.json();
}
