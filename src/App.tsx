import "./App.css";
import { useQueryParameters,  } from "./useQueryParameters";
import { HomePage } from "./HomePage";
import { OpenerPage } from "./OpenerPage";

// TODO これenv化できませんか
// vite.config.tsにもある
export const URL_BASE_PATH = "hirakudake/";

function isValid(val: string | undefined) {
  return (typeof val === "string" && val.trim() !== "");
}

function App() {
  const {url, title} = useQueryParameters();
  const hasValidParameters = isValid(url) && isValid(title)

  if (!hasValidParameters) {
    return <HomePage />
  } else {
    return <OpenerPage />
  }
}

export default App;
