import "./App.scss";
import { APP_BASE_PATH } from "./constants/constants";
import { useQueryParameters } from "./hooks/useQueryParameters";
import { HomePage } from "./pages/HomePage";
import { OpenerPage } from "./pages/OpenerPage";

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
