import { useState, useEffect, useCallback } from "react";
import { POST_API_URL } from "../../config";

export const useDeletePost = (id) => {
  const [error, setError] = useState(false);

  const fetchData = useCallback(async () => {
    setError(false);

    try {
      const endPoint = `${POST_API_URL}/${id}`;
      const options = { method: "DELETE" };
      await (await fetch(endPoint, options)).json();
    } catch (error) {
      setError(true);
    }
  }, [id]);

  useEffect(() => {
    if (id !== 0) {
      fetchData();
    }
  }, [fetchData, id]);

  return [error];
};
