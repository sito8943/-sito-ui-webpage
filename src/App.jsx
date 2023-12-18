import { Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import loadable from "@loadable/component";

// @sito/ui
import { SplashScreen } from "@sito/ui";

// layouts
import View from "./layours/View/View";

// views
const Home = loadable(() => import("./views/Home/Home"));

function App() {
  return (
    <Suspense fallback={<SplashScreen />}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<View />}>
            <Route index element={<Home />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Suspense>
  );
}

export default App;
