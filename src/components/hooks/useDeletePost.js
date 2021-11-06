import { useState, useEffect, useCallback } from "react";

export const useDeletePost = (id) => {
  console.log(id);
  const [state, setState] = useState({});
  // const [loading, setLoading] = useState(true);
  // const [error, setError] = useState(false);

  const fetchData = useCallback(async () => {
    // setError(false);
    // setLoading(true);

    try {
      const endPoint = `https://jsonplaceholder.typicode.com/posts/${id}`;
      const options = { method: "DELETE" };
      const result = await (await fetch(endPoint, options)).json();

      setState({
        ...result,
      });
    } catch (error) {
      // setError(true);
    }
  }, [id]);

  useEffect(() => {
    if (id !== 0) {
      fetchData();
    }
  }, [fetchData]);

  return [];
};
