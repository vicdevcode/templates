import { BadgeListWidget } from "@/widgets/badge-list";
import { ShadowWidget } from "@/widgets/shadow";
import { TypographyWidget } from "@/widgets/typography";
import { FC } from "react";

export const HomePage: FC = () => {
  return (
    <main className="container mx-auto font-base bg-bg-page">
      <TypographyWidget />
      <ShadowWidget />
      <BadgeListWidget />
    </main>
  );
};
