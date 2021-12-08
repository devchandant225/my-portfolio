import React, { useEffect } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import "./App.css";
import { Navigation, ScrolldownNavigation } from "./components";
import ThemeProvider from "./contexts/themecontexts";
import { Homepage, PageNotFound } from "./screens";

import "./tailwind.css";

function App() {
  useEffect(() => {
    document.addEventListener("mousemove", (e) => {
      let bubles = document.createElement("bubles");
      let x = e.pageX;
      let y = e.pageY;
      bubles.style.left = x + "px";
      bubles.style.top = y + "px";
      let size = Math.random() * 8;
      bubles.style.width = 1 + size + "px";
      bubles.style.height = 1 + size + "px";

      document.body.appendChild(bubles);
      setTimeout(function () {
        bubles.remove();
      }, 1100);
    });
  }, []);
  return (
    <>
      <BrowserRouter>
        <ThemeProvider>
          <ScrolldownNavigation />
          <Navigation />
          <Route exact path="/">
            <Homepage />
          </Route>
          <Route path="/page_not_found">
            <PageNotFound />
          </Route>
        </ThemeProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
