import { useEffect } from "react";

/**
 * ブラウザのウィンドウタイトルを設定する。
 * @param title タイトル
 */
export function useDocumentTitle(title: string): void {
  useEffect(() => {
    document.title = title;
  }, [title]);
}
