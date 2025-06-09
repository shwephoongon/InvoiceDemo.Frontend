import React from "react";
import { Route, Routes } from "react-router-dom";
import Purchase from "../pages/Purchase";
import Layout from "../layout/Layout";
import PurchaseDetail from "../pages/PurchaseDetail";
import UpdatePurchaseDetail from "../pages/UpdatePurchaseDetail";

const Router = () => {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Purchase />} />
        <Route path='/detail' element={<PurchaseDetail />} />
        <Route path='/update/:invoiceId' element={<UpdatePurchaseDetail />} />
      </Route>
    </Routes>
  );
};

export default Router;
