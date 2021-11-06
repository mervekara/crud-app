import { useState, useEffect, useCallback } from "react";

export const useUpdatePost = (id) => {
  const [state, setState] = useState({});
  // const [loading, setLoading] = useState(true);
  // const [error, setError] = useState(false);

  const fetchData = useCallback(async () => {
    // setError(false);
    // setLoading(true);

    try {
      const endPoint = `https://jsonplaceholder.typicode.com/posts/${id}`;
      const options = { method: "PUT" };
      const result = await (await fetch(endPoint, options)).json();

      setState({
        ...result,
      });
    } catch (error) {
      // setError(true);
    }
  }, [id]);

  useEffect(() => {
    console.log(id);
    if (id !== 0) {
      console.log("asdf");
      fetchData();
    }
  }, [fetchData]);

  return [state];
};
