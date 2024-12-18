import { useRef, useState } from "react";
import queryString from "query-string";
import "./HomePage.scss";
import { APP_BASE_PATH } from "./constants";

export function HomePage() {
  const [url, setUrl] = useState<string>("");
  const [title, setTitle] = useState<string>("");

  const urlInputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (url.trim() === "" || title.trim() === "") {
      return;
    }
    const qStrings = queryString.stringify({ url, title });
    location.href = `http://${window.location.host}/${APP_BASE_PATH}?${qStrings}`;
  };

  return (
    <div className="HomePage">
      <header className="HomePage__header">
        <h1>ひらくだけ</h1>
      </header>
      <div className="HomePage__leading">
        <p>
          好きなURLを開くボタンを表示するだけのアプリです。登録は必要ありません。
        </p>
      </div>
      <form className="HomePage__form" onSubmit={handleSubmit}>
        <div className="HomePage__form-field">
          <label htmlFor="url">URL</label>
          <input
            name="url"
            type="url"
            value={url}
            placeholder="必須"
            onChange={(e) => setUrl(e.target.value)}
            required={true}
            ref={urlInputRef}
          />
        </div>
        <div className="HomePage__form-field">
          <label htmlFor="title">タイトル</label>
          <input
            name="title"
            type="text"
            value={title}
            placeholder="必須"
            onChange={(e) => setTitle(e.target.value)}
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
