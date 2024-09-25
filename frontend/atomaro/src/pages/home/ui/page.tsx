import { ColorsWidget } from "@/widgets/colors";
import { ShadowWidget } from "@/widgets/shadow";
import { TypographyWidget } from "@/widgets/typography";
import { FC } from "react";

export const HomePage: FC = () => {
  return (
    <main className="container mx-auto font-base">
      <div className="w-5 h-5 bg-bg-surface1 shadow-3xl"></div>
      <TypographyWidget />
      <ColorsWidget />
      <ShadowWidget />
    </main>
  );
};
