import { useEffect, useState } from "react";
import "../App.css";

const useFetch = <T>(url: string) => {
  const [data, setData] = useState<T | null>(null);
  const [loading, setloading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;
    const fetchData = async () => {
      try {
        const response = await fetch(url, { signal });
        setloading(true);
        if (!response.ok) {
          throw new Error("Error");
        }
        const responseData = await response.json();

        setData(responseData as T);
        setloading(false);
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
