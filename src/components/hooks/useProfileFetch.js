import { useState, useEffect, useCallback } from "react";

export const useProfileFetch = (id) => {
  const [state, setState] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const fetchData = useCallback(async () => {
    setError(false);
    setLoading(true);

    try {
      const userEndPoint = `https://jsonplaceholder.typicode.com/users/${id}`;
      const userResult = await (await fetch(userEndPoint)).json();

      setState({
        ...userResult,
      });
    } catch (error) {
      setError(true);
    }

    setLoading(false);
  }, [id]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return [state, { loading, error }];
};
