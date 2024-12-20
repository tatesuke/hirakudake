import "./App.scss";
import { APP_BASE_PATH } from "./constants/constants";
import { HomePage } from "./pages/HomePage";
import { OpenerPage } from "./pages/OpenerPage";
import { parseQueryStrings } from "./utils/parseQueryStrings";

// TODO 全体的にデザインなんとかならんのかね

/**
 * アプリのエントリーポイント。
 * クエリストリングに基づいて適切な画面を表示する。
 */
function App() {
  const { url, title, rawQueries } = parseQueryStrings();

  // クエリストリングがなければ `HomePage` を表示
  const queryKeys = Object.keys(rawQueries);
  if (queryKeys.length === 0) {
    return <HomePage />;
  }

  // クエリストリングにurlとtitleのみがあれば `OpenerPage`を表示
  if (queryKeys.length === 2 && isValidUrl(url) && title) {
    return <OpenerPage />;
  }

  // それ以外はクエリストリングを消してホームにリダイレクト
  console.warn("クエリストリングが不正です。ホームにリダイレクトします。");
  location.href = `/${APP_BASE_PATH}`;
  return <></>;
}

export default App;

/**
 * 受け入れ可能なURLか判定する。
 *
 * ウェブサイトしか想定していないので`http`と`https`のみを受け入れる。
 *
 * @param target 判定対象文字
 * @returns `target`が受け入れ可能なURLなら`true`
 */
function isValidUrl(target: string | undefined) {
  return (
    target &&
    URL.canParse(target) &&
    (target.startsWith("http://") || target.startsWith("https://"))
  );
}
