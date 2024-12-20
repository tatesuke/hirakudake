import queryString from "query-string";

export interface ParseQueryStringsReturn {
  /** クエリストリング`url`の値。 単一のstringが渡されたときに限り設定される。 */
  url?: string;

  /** クエリストリング`title`の値。 単一のstringが渡されたときに限り設定される。 */
  title?: string;

  /** パースしたクエリストリング。 */
  rawQueries: queryString.ParsedQuery<string>;
}

/**
 * クエリパラメータの値を取得する。
 * `url`と`title`のみ特別に簡単に取得可能にしている。
 */
export function parseQueryStrings(): ParseQueryStringsReturn {
  // パース
  const rawQueries = queryString.parse(window.location.search);

  // urlとtitleがあれば取得
  const url = (typeof rawQueries["url"] === "string") ? rawQueries["url"] : undefined;
  const title = (typeof rawQueries["title"] === "string") ? rawQueries["title"] : undefined;

  return {
    url,
    title,
    rawQueries
  };
}