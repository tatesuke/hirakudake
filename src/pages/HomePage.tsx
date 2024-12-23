import { useDocumentTitle } from "../hooks/useDocumentTitle";
import "./HomePage.scss";

/**
 * ホームページ。
 *
 * アプリタイトルとURLとタイトルを入力するフォームを表示。
 */
export function HomePage() {
  useDocumentTitle("ひらくだけ");

  return (
    <div className="HomePage">
      <header className="HomePage__header">
        <h1 className="HomePage__header-heading">ひらくだけ</h1>
      </header>

      <main>
        <section className="HomePage__app-info">
          <p>好きなURLを開くボタンを表示するだけ</p>
        </section>

        {/*
         * フォーム
         * フォーム内容でgetするだけ。バリデーションは今のところHTML5標準の機能のみでカバーしている。
         */}
        <section>
          <form method="get" action="./">
            <div className="form-group">
              <label htmlFor="url">URL(必須)</label>
              <input
                id="url"
                name="url"
                type="url"
                placeholder="例: https://youtube.com"
                required={true}
              />
            </div>

            <div className="form-group">
              <label htmlFor="title">タイトル(必須)</label>
              <input
                id="title"
                name="title"
                type="text"
                placeholder="例: YouTube"
                required={true}
              />
            </div>

            <button type="submit">ひらくだけページ生成</button>
          </form>
        </section>

        <section className="HomePage__target-devices">
          <p>
            この画面はPCで操作し、次に表示される画面をAndroidのChromeで利用してください。
          </p>
        </section>
      </main>
    </div>
  );
}
