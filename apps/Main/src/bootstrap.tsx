import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import { initLibraries } from "@vntgcorp/vntg-wdk-client/dist/app/src/layout/initLib";
import Federation from "./Federation";
import AppRouter from "./AppRouter";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "realgrid/dist/realgrid-style.css";

import App, {
  Loading,
  RouteContainer,
  LeftSideMenu,
  Topmenu,
  PrivateRoute,
  AppModal,
} from "@vntgcorp/vntg-wdk-client";
import { RecoilRoot } from "recoil";
const initUI = () => {
  ReactDOM.render(
    // <React.StrictMode>
    <RecoilRoot>
      <React.Suspense fallback={<Loading />}>
        <BrowserRouter>
          <Routes>
            <Route
              path="*"
              element={
                <PrivateRoute>
                  <AppModal />
                  <Topmenu />
                  <LeftSideMenu />
                  <AppRouter />
                </PrivateRoute>
              }
            />
          </Routes>
        </BrowserRouter>
      </React.Suspense>
    </RecoilRoot>,
    // </React.StrictMode>,
    document.getElementById("root")
  );
};

//라이브러리 스토리지 셋팅
initLibraries().then(() => {
  initUI();
});
