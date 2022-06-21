import React from "react";
import { loadComponent } from "./utils/loadComponent";
import {
  BrowserRouter,
  Routes,
  Route,
  useSearchParams,
  useLocation,
} from "react-router-dom";
import styled from "styled-components";
import App, {
  Loading,
  RouteContainer,
  LeftSideMenu,
  Topmenu,
  PrivateRoute,
} from "@vntgcorp/vntg-wdk-client";
import BZCM010E10 from "./pages/BZCM010E10";
// import "../../../node_modules/realgrid/dist/realgrid-style.css";
type Props = {};

enum routingType {
  DEFAULT,
  SAFETY,
  HEALTH,
  BIZCOMMON,
}
function AppRouter({}: Props) {
  console.log("app Router");
  const [routeType, setRouteType] = React.useState<routingType>();
  // const [system, setSystem] = React.useState({});
  const urlParam = useLocation();
  const ProgramLayout = styled.section`
    padding-left: 60px;
    padding-top: 38px;
    height: calc(100% - 10px);
  `;
  React.useEffect(() => {
    const locationURL = window.location.href.split(`/`);
    console.log(locationURL);
    if (locationURL.includes("bizcommon")) {
      setRouteType(routingType.BIZCOMMON);
    } else if (locationURL.includes("health")) {
      setRouteType(routingType.HEALTH);
    } else if (locationURL.includes("safety")) {
      setRouteType(routingType.SAFETY);
    } else {
      setRouteType(routingType.DEFAULT);
      console.log("out of routign rule");
    }
  }, [urlParam.pathname]);

  switch (routeType) {
    case routingType.BIZCOMMON:
      const Component = React.lazy(
        loadComponent(
          "sub1",
          "default",
          "./AppRouter",
          "http://localhost:3002/remoteEntry.tsx"
        )
      );
      return (
        <ProgramLayout>
          <Component />
        </ProgramLayout>
      );
    case routingType.HEALTH:
      const Component2 = React.lazy(
        loadComponent(
          "app3",
          "default",
          "./AppRouter",
          "http://localhost:3003/remoteEntry.js"
        )
      );
      return (
        <ProgramLayout>
          <Component2 />
        </ProgramLayout>
      );
    case routingType.SAFETY:
      return (
        <ProgramLayout>
          <BZCM010E10 />
        </ProgramLayout>
      );
    default: {
      return <RouteContainer />;
    }
  }
}

export default AppRouter;
