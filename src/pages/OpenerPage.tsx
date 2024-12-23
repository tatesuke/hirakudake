import "./OpenerPage.scss";
import { APP_BASE_PATH } from "../constants/constants";
import { QrCode } from "../components/QrCode";
import { parseQueryStrings } from "../utils/parseQueryStrings";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { useDocumentTitle } from "../hooks/useDocumentTitle";

const LOCAL_STORAGE_KEY = "CloseAfterOpen";

/**
 * 指定されたURLを開くボタンを大きく表示するページ。
 * クエリストリングに依存する @see useQueryParameters
 *
 * クエリストリングの検証は他の場所で行われていることを前提とする。
 */
export function OpenerPage() {
  const { url, title } = parseQueryStrings();
  useDocumentTitle(`${title}`);

  const [closeAfterOpen, setCloseAfterOpen] = useLocalStorage<boolean>(
    LOCAL_STORAGE_KEY,
    false
  );

  // ボタンが押されたらURLを開いて自分は閉じる
  const onOpenButtonClick = () => {
    window.open(url, "_blank", "noopener,noreferrer");

    if (closeAfterOpen) {
      // スマホでブラウザにページがたまらないように画面を閉じる。
      // PCでは閉じないが、PC向けでないのでそれで構わない
      window.close();
    }
  };

  return (
    <div className="OpenerPage">
      {/* ヘッダ */}
      <header className="OpenerPage__header">
        <h1 className="OpenerPage__header-heading">ひらくだけ</h1>
      </header>

      <section className="OpenerPage__lead-text">
        <p>{title}をひらくだけ</p>
      </section>

      {/* ボタンエリア */}
      <div className="OpenerPage__main-button-area">
        {/* ユーザが探すまでもなく押せるくらい大きいボタン */}
        <button className="OpenerPage__main-button" onClick={onOpenButtonClick}>
          タップして開く
        </button>
        <div>
          <input
            type="checkbox"
            id="close-after-open"
            className="OpenerPage__close-after-open-checkbox"
            checked={closeAfterOpen}
            onChange={(e) => setCloseAfterOpen(e.target.checked)}
          />
          <label htmlFor="close-after-open">
            開いたらこのタブを閉じる
          </label>
        </div>
      </div>

      {/* QRコード。スマホでもすぐにアクセスできるように */}
      <aside className="OpenerPage__add-home">
        <p>
          このページをAndroidのChromeで表示し「ホームに追加」してください。下のQRコードですぐ開けます。
        </p>
        <QrCode data={location.href} />
      </aside>

      {/* 戻るボタン */}
      <div>
        <a href={`/${APP_BASE_PATH}`}>戻る</a>
      </div>
    </div>
  );
}
