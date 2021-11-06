import { useState, useEffect, useCallback } from "react";

export const usePostFetch = (id) => {
  console.log(id);
  const [state, setState] = useState({});
  // const [loading, setLoading] = useState(true);
  // const [error, setError] = useState(false);

  const fetchData = useCallback(async () => {
    // setError(false);
    // setLoading(true);

    try {
      const postEndPoint = `https://jsonplaceholder.typicode.com/posts/${id}`;
      const result = await (await fetch(postEndPoint)).json();

      const userEndPoint = `https://jsonplaceholder.typicode.com/users/${result.userId}`;
      const userResult = await (await fetch(userEndPoint)).json();

      setState({
        ...result,
        ...userResult,
      });
    } catch (error) {
      // setError(true);
    }
  }, [id]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return [state];
};
