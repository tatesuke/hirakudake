import { useQueryParameters } from "./useQueryParameters";

export function OpenerPage() {
  const {url, title} = useQueryParameters();
  
  const open = ()=>{
    window.open(url);
  }

  return <div>
    <button onClick={open}>{title}をひらく</button>
    <p>{url}</p>
    <div>
      <a href="/hirakudake">戻る</a> // TODO これenv化できませんか
    </div>
  </div>
}
