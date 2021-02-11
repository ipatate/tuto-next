import Head from "next/head";
import Link from "next/link";

export default function Home({ posts }) {
  return (
    <div>
      {posts.map((p) => (
        <div key={p.id}>
          <h2>
            <Link href={`post/${p.id}`}>{p.title}</Link>
          </h2>
          <p>{p.body}</p>
          <Link href={`post/${p.id}`} style={{ textDecoration: "underlink" }}>
            Read more
          </Link>
        </div>
      ))}
    </div>
  );
}

export async function getStaticProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await response.json();

  return {
    props: {
      posts,
    },
  };
}
