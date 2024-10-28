import { FC } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { MainLayout } from "./layouts";
import { ComponentsPage } from "@/pages/components";

export const Router: FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<ComponentsPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
