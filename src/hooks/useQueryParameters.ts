import queryString from "query-string";
import { useEffect, useState } from "react";

export interface IUseQueryParametersReturn {
  /** クエリストリング`url`の値。`error === true`のときは`undefined` */
  url?: string;

  /** クエリストリング`title`の値。 `error === true`のときは`undefined` */
  title?: string;

  /** 意図しない形式・組み合わせのクエリストリングを検出したときに`true`になる。 */
  error: boolean;
}

/**
 * クエリパラメータの値を取得する。
 *
 * 想定するパラメータの組み合わせは以下のいずれかである。
 *
 * - クエリストリングなし
 * - `url`と`title`が一つづつ指定されている
 *
 * それ以外の組み合わせの場合は`url`と`title`は取得できず(`undefined`)、`error`が`true`となる。
 *
 * また、`url`が不正な場合も同様に`url`と`title`は取得できず、`error`が`true`となる。
 */
export function useQueryParameters(): IUseQueryParametersReturn {
  const [url, setUrl] = useState<string>();
  const [title, setTitle] = useState<string>();
  const [error, setError] = useState<boolean>(false);

  // 画面表示時にクエリストリングを取得、解析
  useEffect(() => {
    const parsed = queryString.parse(window.location.search);

    // 個数チェック
    const length = Object.keys(parsed).length;
    if (length !== 0 && length !== 2) {
      console.warn("クエリストリングの個数が不正です。0個または2個を期待します。");
      setError(true);
      return;
    }

    // 0個の場合は正常
    if (length == 0) {
      return;
    }

    // urlの形式チェック
    if (typeof parsed["url"] !== "string") {
      console.warn("`url` クエリストリングが見つからないか、形式が不正です。");
      setError(true);
      return;
    }
    if (!isValidUrl(parsed["url"])) {
      console.log("`url` クエリストリングが有効なURLではありません。");
      setError(true);
      return;
    }

    // `title`の形式チェック
    if (typeof parsed["title"] !== "string") {
      console.warn("`title` クエリストリングが見つからないか、形式が不正です。");
      setError(true);
      return;
    }

    // 全て問題なければ値設定
    setUrl(parsed["url"]);
    setTitle(parsed["title"]);
  }, []);

  return {
    error,
    url,
    title
  };
}

/**
 * 受け入れ可能なURLか判定する。
 * 
 * ウェブサイトしか想定していないので`http`と`https`のみを受け入れる。
 * 
 * @param target 判定対象文字
 * @returns `target`が受け入れ可能なURLなら`true`
 */
function isValidUrl(target: string) {
  return (
    URL.canParse(target) &&
    (target.startsWith("http://") || target.startsWith("https://"))
  );
}
