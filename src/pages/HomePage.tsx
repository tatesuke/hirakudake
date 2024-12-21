import "./HomePage.scss";

/**
 * ホームページ。
 *
 * アプリタイトルとURLとタイトルを入力するフォームを表示。
 */
export function HomePage() {
  document.title = "ひらくだけ";

  return (
    <div className="HomePage">
      {/* ヘッダ */}
      <header className="HomePage__header">
        <h1>ひらくだけ</h1>
      </header>

      {/* リードテキスト */}
      <div className="HomePage__leading">
        <p>
          好きなURLを開くボタンを表示するだけのアプリです。登録は必要ありません。
        </p>
        <p>
          この画面はPCで操作し、次に表示されるボタンの画面はAndroidのChromeで利用することを想定しています。
        </p>
      </div>

      {/*
       * フォーム
       * フォーム内容でgetするだけ。バリデーションは今のところHTML5標準の機能のみでカバーしている。
       */}
      <form className="HomePage__form" method="get" action="./">
        <div className="HomePage__form-field">
          <label htmlFor="url">URL</label>
          <input
            id="url"
            name="url"
            type="url"
            placeholder="必須"
            required={true}
          />
        </div>

        <div className="HomePage__form-field">
          <label htmlFor="title">タイトル</label>
          <input
            id="title"
            name="title"
            type="text"
            placeholder="必須"
            required={true}
          />
        </div>

        <button className="HomePage__form-button --primary" type="submit">
          ひらくだけページ生成
        </button>
      </form>
    </div>
  );
}
