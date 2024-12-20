import "./OpenerPage.scss";
import { APP_BASE_PATH } from "../constants/constants";
import { QrCode } from "../components/QrCode";
import { parseQueryStrings } from "../utils/parseQueryStrings";

/**
 * 指定されたURLを開くボタンを大きく表示するページ。
 * クエリストリングに依存する @see useQueryParameters
 *
 * クエリストリングの検証は他の場所で行われていることを前提とする。
 */
export function OpenerPage() {
  const { url, title } = parseQueryStrings();
  document.title = `${title}を開く`;

  // ボタンが押されたらURLを開いて自分は閉じる
  const onOpenButtonClick = () => {
    window.open(url, "_blank", "noopener,noreferrer");
    
    // スマホでブラウザにページがたまらないように画面を閉じる。
    // PCでは閉じないが、PC向けでないのでそれで構わない
    window.close();
  };

  return (
    <div className="OpenerPage">
      {/* ヘッダ */}
      <header>
        <h1>ひらくだけ</h1>
      </header>

      {/* ボタンエリア */}
      <div className="OpenerPage__main-button-area">
        {/* ユーザが探すまでもなく押せるくらい大きいボタン */}
        <button className="OpenerPage__main-button" onClick={onOpenButtonClick}>
          {title}
          <br />
          を開く
        </button>
        <a href={url} target="_blank">
          {url}
        </a>
      </div>

      {/* QRコード。スマホでもすぐにアクセスできるように */}
      <div>
        <p>このページは以下のQRコードからも開けます</p>
        <QrCode data={location.href} />
      </div>

    {/* 戻るボタン */}
      <div>
        <a href={`/${APP_BASE_PATH}`}>戻る</a>
      </div>
    </div>
  );
}
