import { useEffect } from "react";

/** タイトルを変更する */
export function useDocumentTitle(title: string) {
  useEffect(()=>{
    document.title = title;
  },[title])
}