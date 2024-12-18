import "./App.css";
import { useQueryParameters } from "./useQueryParameters";
import { HomePage } from "./HomePage";
import { OpenerPage } from "./OpenerPage";
import { APP_BASE_PATH } from "./constants";

// TODO serviceworkerでキャッシュさせてオフラインでも使えるようにしたい

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
