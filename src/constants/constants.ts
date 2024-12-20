/**
 * URLのベースパス。
 * `https://hoge.com/xx/` の `xx/`の部分。
 * 
 * 自アプリ内のリンクURLを組み立てるときなどに使用する。
 * 例: location.href = `/${APP_BASE_PATH}`;
 */
export const APP_BASE_PATH = import.meta.env.VITE_BASE_PATH || "/";