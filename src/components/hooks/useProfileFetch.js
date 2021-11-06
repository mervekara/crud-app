import { useState, useEffect, useCallback } from "react";

export const useProfileFetch = (id) => {
  console.log(id);
  const [state, setState] = useState({});
  // const [loading, setLoading] = useState(true);
  // const [error, setError] = useState(false);

  const fetchData = useCallback(async () => {
    // setError(false);
    // setLoading(true);

    try {
      const userEndPoint = `https://jsonplaceholder.typicode.com/users/${id}`;
      const userResult = await (await fetch(userEndPoint)).json();

      console.log(userResult);

      setState({
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
