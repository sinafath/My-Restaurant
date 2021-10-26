import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { useBoolean } from "react-use";

export default function useFetch() {
  const router = useRouter();
  const [error, setError] = useState("");
  const [loading, setLoading] = useBoolean(false);

  useEffect(() => {
    router.prefetch("/dashboard");
  }, []);

  async function postRequest(data: {}, url: string) {
    setLoading(true);
    setError("");
    const response = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    if (response.ok) {
      router.push("./dashboard");
    } else {
      setError(await response.text());
    }
    setLoading(false);
  }

  return { loading, error, postRequest };
}
