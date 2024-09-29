import { BadgeListWidget } from "@/widgets/badge-list";
import { ButtonListWidget } from "@/widgets/button-list";
import { FC } from "react";

export const ComponentsPage: FC = () => {
  return (
    <div className="font-base">
      <h1 className="heading-1">Welcome to Atomaro!</h1>
      <p className="body-m">
        Atomaro helps you build, mature, and scale your design system with ease.
        From powerful documentation to efficient design system management, it's
        the ideal end-to-end platform that grows with your design system.
      </p>

      <BadgeListWidget />
      <ButtonListWidget />
    </div>
  );
};
