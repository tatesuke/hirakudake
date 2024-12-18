import { useState } from "react";
import queryString from "query-string";

export function HomePage() {
  const [url, setUrl] = useState<string>("");
  const [title, setTitle] = useState<string>("");

  const generate = () => {
    if (url.trim() === "" || title.trim() === "") {
      return;
    }
    const qString = queryString.stringify({ url, title });
    location.href = location.href + "?" + qString; // FIXME もともとクエリストリングがある可能性も考慮
  };

  return (
    <div>
      <div>
        <div>
          URL
          <input
            type="url"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
          />
        </div>
        <div>
          title
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <button onClick={generate}>ひらくだけページ生成</button>
      </div>
    </div>
  );
}
