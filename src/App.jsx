import { Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import loadable from "@loadable/component";

// @sito/ui
import { SplashScreen } from "@sito/ui";

// layouts
import View from "./layouts/View/View";

// views
const Home = loadable(() => import("./views/Home/Home"));
const BrandIdentity = loadable(() =>
  import("./views/BrandIdentity/BrandIdentity")
);
const SitoGreetInfo = loadable(() => import("./views/SitoGreet/SitoGreetInfo"));

function App() {
  return (
    <Suspense fallback={<SplashScreen />}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<View />}>
            <Route index element={<Home />} />
            <Route path="/brand-identity" element={<BrandIdentity />} />
            <Route path="/sito-greet" element={<SitoGreetInfo />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Suspense>
  );
}

export default App;
