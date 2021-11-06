import { useState, useEffect, useCallback } from "react";
import { POST_API_URL, USER_API_URL } from "../../config";

export const usePostFetch = (id) => {
  const [state, setState] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const fetchData = useCallback(async () => {
    setError(false);
    setLoading(true);

    try {
      const postEndPoint = `${POST_API_URL}/${id}`;
      const result = await (await fetch(postEndPoint)).json();

      const userEndPoint = `${USER_API_URL}/${result.userId}`;
      const userResult = await (await fetch(userEndPoint)).json();

      setState({
        ...result,
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
