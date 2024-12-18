import { useState } from "react";
import queryString from "query-string";
import "./HomePage.scss";
import { URL_BASE_PATH } from "./App";

export function HomePage() {
  const [url, setUrl] = useState<string>("");
  const [title, setTitle] = useState<string>("");

  const generate = () => {
    if (url.trim() === "" || title.trim() === "") {
      return;
    }
    const qStrings = queryString.stringify({ url, title });
    location.href= `http://${window.location.host}/${URL_BASE_PATH}?${qStrings}`
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
      <div className="HomePage__form">
        <div className="HomePage__form-field">
          <label htmlFor="url">URL</label>
          <input
            name="url"
            type="url"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
          />
        </div>
        <div className="HomePage__form-field">
          <label htmlFor="title">タイトル</label>
          <input
            name="title"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <button className="HomePage__form-button --primary" onClick={generate}>
          ひらくだけページ生成
        </button>
      </div>
    </div>
  );
}
