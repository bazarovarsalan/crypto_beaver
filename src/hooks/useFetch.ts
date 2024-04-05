import { useEffect, useState } from "react";
import "../App.css";

const useFetch = <T>(url: string) => {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;
    const fetchData = async () => {
      try {
        const response = await fetch(url, { signal });
        setLoading(true);
        if (!response.ok) {
          throw new Error("Error");
        }
        const responseData = await response.json();

        setData(responseData as T);
        setLoading(false);
      } catch (error) {
        setError(true);
      }

      return () => controller.abort();
    };
    fetchData();
  }, [url]);

  return { data, loading, error };
};

export default useFetch;
