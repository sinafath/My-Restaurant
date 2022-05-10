import { useRouter } from "next/router";
import { useState, useEffect, Dispatch, SetStateAction } from "react";
import { useBoolean } from "react-use";
import useUser from "./useUer";

function useFetch(urlProp: string){
  const router = useRouter();
  const [error, setError] = useState("");
  const [loading, setLoading] = useBoolean(false);
  const [url] = useState(urlProp);
  const { setUser } = useUser();

  useEffect(() => {
    router.prefetch("/dashboard");
  }, []);

  async function postRequest(data: {}) {
    setLoading(true);
    setError("");
    const response = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    const dataRes = await response.json();
    if (response.ok) {
      router.push("./dashboard");
    } else {
      setError(dataRes.message);
    }
    setLoading(false);
  }

  return { postRequest, setError, loading, error };
}

export default useFetch;
