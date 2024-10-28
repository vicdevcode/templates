import { FooterWidget } from "@/widgets/footer";
import { HeaderWidget } from "@/widgets/header";
import { FC } from "react";
import { Outlet } from "react-router-dom";

export const MainLayout: FC = () => {
  return (
    <>
      <HeaderWidget />
      <main>
        <Outlet />
      </main>
      <FooterWidget />
    </>
  );
};
