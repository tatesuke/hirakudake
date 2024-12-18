import queryString from "query-string";

export interface IUseQueryParametersReturn {
  url?: string;
  title?: string;
}
export function useQueryParameters(): IUseQueryParametersReturn {
  const raw = window.location.search;
  const parsed = queryString.parse(raw);

  let url: string | undefined = undefined;
  if (typeof parsed["url"] === "string") {
    url = parsed["url"];
  } else if (typeof parsed["url"]?.[0] === "string") {
    url = parsed["url"]?.[0];
  }

  let title: string | undefined = undefined;
  if (typeof parsed["title"] === "string") {
    title = parsed["title"];
  } else if (typeof parsed["title"]?.[0] === "string") {
    title = parsed["title"]?.[0];
  }
  return {
    url,
    title
  };
}
