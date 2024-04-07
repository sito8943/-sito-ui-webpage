import { Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import loadable from "@loadable/component";

// @sito/ui
import { SplashScreen } from "@sito/ui";

// layouts
import View from "./layours/View/View";

// views
const Home = loadable(() => import("./views/Home/Home"));
const BrandIdentity = loadable(() =>
  import("./views/BrandIdentity/BrandIdentity")
);

function App() {
  return (
    <Suspense fallback={<SplashScreen />}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<View />}>
            <Route index element={<Home />} />
          </Route>
          <Route path="brand-identity">
            <Route index element={<BrandIdentity />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Suspense>
  );
}

export default App;
