import { useState, useEffect } from "react";
import { POST_API_URL } from "../../config";

export const usePostsFetch = () => {
  const [state, setState] = useState({ posts: [] });
  const [error, setError] = useState(false);

  const fetchPosts = async (endpoint) => {
    setError(false);

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
    fetchPosts(`${POST_API_URL}/`);
    return () => {
      setState({});
    };
  }, []);

  return [{ state, error }];
};
