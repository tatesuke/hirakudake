import queryString from "query-string";
import { useEffect, useState } from "react";

export interface IUseQueryParametersReturn {
  error: boolean;
  url?: string;
  title?: string;
}

export function useQueryParameters(): IUseQueryParametersReturn {
  const [error, setError] = useState<boolean>(false);
  const [url, setUrl] = useState<string>();
  const [title, setTitle] = useState<string>();

  useEffect(() => {
    const parsed = queryString.parse(window.location.search);
    const length = Object.keys(parsed).length;
    if (length !== 0 && length !== 2) {
      // TODO warn出したいね
      setError(true);
      return;
    }
    if (length == 0) {
      return;
    }

    if (typeof parsed["url"] !== "string") {
      setError(true);
      return;
    }
    if (
      !parsed["url"].startsWith("http://") &&
      !parsed["url"].startsWith("https://")
    ) {
      setError(true);
      return;
    }
    if (typeof parsed["title"] !== "string") {
      setError(true);
      return;
    }

    setUrl(parsed["url"]);
    setTitle(parsed["title"]);
  }, []);

  return {
    error,
    url,
    title
  };
}
