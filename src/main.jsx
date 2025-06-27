import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import StudentContextProvider from "./Context/StudentContext.jsx";

createRoot(document.getElementById("root")).render(
  <StudentContextProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StudentContextProvider>
);
