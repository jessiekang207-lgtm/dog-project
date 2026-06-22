import { useEffect, useMemo, useState } from "react";
import { SiteLayout } from "./components/SiteLayout";
import { guideSections } from "./data/content";
import { HomePage } from "./pages/HomePage";
import { GuidePage } from "./pages/GuidePage";
import { QuizPage } from "./pages/QuizPage";
import { normalizePath } from "./router";

function App() {
  const [route, setRoute] = useState(() => normalizePath(window.location.pathname));

  useEffect(() => {
    const updateRoute = () => setRoute(normalizePath(window.location.pathname));
    window.addEventListener("popstate", updateRoute);
    return () => window.removeEventListener("popstate", updateRoute);
  }, []);

  const guide = useMemo(
    () => guideSections.find((section) => `/${section.slug}` === route),
    [route],
  );

  return (
    <SiteLayout route={route}>
      {route === "/" && <HomePage />}
      {guide && <GuidePage section={guide} />}
      {route === "/quiz" && <QuizPage />}
    </SiteLayout>
  );
}

export default App;
