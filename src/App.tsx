import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <BrowserRouter basename="/hirakudake">
      <Routes>
        <Route path="/" element={<div>hirakudake</div>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
