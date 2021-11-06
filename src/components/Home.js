import React from "react";
import Container from "./elements/Container";
import Spinner from "./elements/Spinner";

// Hooks
import { usePostsFetch } from "./hooks/usePostsFetch";

export default function Home() {
  const [
    {
      state: { posts },
      error,
    },
  ] = usePostsFetch();

  if (error) return <div>Something went wrong... </div>;
  if (!posts[0]) return <Spinner />;

  return <Container posts={posts} />;
}
