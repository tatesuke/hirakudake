import "./App.css";
import { useQueryParameters } from "./useQueryParameters";
import { HomePage } from "./HomePage";
import { OpenerPage } from "./OpenerPage";
import { APP_BASE_PATH } from "./constants";

// TODO windowタイトルも動的に変更したい
// TODO serviceworkerでキャッシュさせてオフラインでも使えるようにしたい
// TODO コードの可読性向上
// TODO 全体的にデザインなんとかならんのかね

function App() {
  const { url, title, error } = useQueryParameters();

  if (error) {
    location.href = `/${APP_BASE_PATH}`;
    return <></>;
  } else if (url && title) {
    return <OpenerPage />;
  } else {
    return <HomePage />;
  }
}

export default App;
