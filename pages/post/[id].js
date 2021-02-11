import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Home({ post }) {
  const router = useRouter();
  if (router.isFallback) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </div>
  );
}

export async function getStaticProps({ params }) {
  const { id } = params;
  if (!id) {
    return {
      notFound: true,
    };
  }
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.id}`
  );
  const data = await response.json();

  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      post: data,
    },
  };
}

export async function getStaticPaths() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await response.json();

  const paths = posts.map((element) => {
    return {
      params: { id: `${element.id}` },
    };
  });
  // or const paths = [];
  return {
    paths,
    fallback: true, // true or false or 'blocking'
  };
}
