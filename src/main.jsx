import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { BrowserRouter } from "react-router-dom";
import StoreContextProvider from "./context/StoreContext.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter basename="/food-delivery/">
    <StoreContextProvider>
      <App />
    </StoreContextProvider>
  </BrowserRouter>
);
