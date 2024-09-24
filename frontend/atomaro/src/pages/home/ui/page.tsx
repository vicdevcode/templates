import { ColorsWidget } from "@/widgets/colors";
import { TypographyWidget } from "@/widgets/typography";
import { FC } from "react";

export const HomePage: FC = () => {
  return (
    <main className="container mx-auto font-inter">
      <TypographyWidget />
      <ColorsWidget />
    </main>
  );
};
