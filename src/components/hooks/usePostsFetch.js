import { useState, useEffect } from "react";

export const usePostsFetch = () => {
  const [state, setState] = useState({ posts: [] });
  const [error, setError] = useState(false);

  const fetchPosts = async (endpoint) => {
    setError(false);

    // const isLoadMore = endpoint.search('page');

    try {
      const result = await (await fetch(endpoint)).json();
      setState((prev) => ({
        ...prev,
        posts: [...result],
      }));
    } catch (error) {
      setError(true);
    }
  };

  useEffect(() => {
    fetchPosts("https://jsonplaceholder.typicode.com/posts/");
    return () => {
      setState({}); // This worked for me
    };
  }, []);

  return [{ state, error }, fetchPosts];
};
