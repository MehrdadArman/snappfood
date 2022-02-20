import React, { lazy } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { routes } from "./routesList";

import FullLayOut from "../layout/FullPageLayout";

// pages
const VendorsList = lazy(() => import("../views/pages/vendors/vendorsList"));
const HomePage = lazy(() => import("../views/pages/homePage/HomePage"));

const AppRouter = () => {
  return (
    <BrowserRouter>
      <FullLayOut>
        <Routes>
          <Route path={routes.HOME_PAGE} element={<HomePage />} exact />
          <Route path={routes.VENDOR_LIST} element={<VendorsList />} exact />
        </Routes>
      </FullLayOut>
    </BrowserRouter>
  );
};

export default AppRouter;
