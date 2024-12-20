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
      console.warn("クエリストリングが無いか、2個か以外受け入れていない。")
      setError(true);
      return;
    }
    if (length == 0) {
      return;
    }

    if (typeof parsed["url"] !== "string") {
      console.warn("`url`クエリストリングがない。")
      setError(true);
      return;
    }
    if (
      !parsed["url"].startsWith("http://") &&
      !parsed["url"].startsWith("https://")
    ) {
      console.log("`url`クエリストリングがURLでない。")
      setError(true);
      return;
    }
    if (typeof parsed["title"] !== "string") {
      console.warn("`title`クエリストリングがない。")
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
