import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import FigmaApp from "./FigmaApp.tsx";
import "./index.css";

function Router() {
  const [route, setRoute] = React.useState(window.location.pathname);

  React.useEffect(() => {
    const onPop = () => setRoute(window.location.pathname);
    window.addEventListener("popstate", onPop);
    return () => window.removeEventListener("popstate", onPop);
  }, []);

  if (route === "/figma") return <FigmaApp />;
  return <App />;
}

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Router />
  </React.StrictMode>
);
