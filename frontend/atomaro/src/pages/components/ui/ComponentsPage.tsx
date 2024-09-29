import { ChipGroup, ChipGroupItem } from "@/shared/ui/chip";
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
      <div className="p-4">
        <ChipGroup
          onValueChange={(e) => {
            console.log(e);
          }}
          type="multiple"
        >
          <ChipGroupItem value="all" count={30}>
            Все
          </ChipGroupItem>
          <ChipGroupItem value="a" count={10}>
            Разработчики
          </ChipGroupItem>
          <ChipGroupItem value="b" count={4}>
            Дизайнеры
          </ChipGroupItem>
          <ChipGroupItem value="all" count={30}>
            Все
          </ChipGroupItem>
          <ChipGroupItem value="1" count={10}>
            Разработчики
          </ChipGroupItem>
          <ChipGroupItem value="2" count={4}>
            Дизайнеры
          </ChipGroupItem>

          <ChipGroupItem value="3ll" count={30}>
            Все
          </ChipGroupItem>
          <ChipGroupItem value="4" count={10}>
            Разработчики
          </ChipGroupItem>
          <ChipGroupItem value="6" count={4}>
            Дизайнеры
          </ChipGroupItem>
          <ChipGroupItem value="7ll" count={30}>
            Все
          </ChipGroupItem>
          <ChipGroupItem value="aa" count={10}>
            Разработчики
          </ChipGroupItem>
          <ChipGroupItem value="9" count={4}>
            Дизайнеры
          </ChipGroupItem>
        </ChipGroup>
      </div>
    </div>
  );
};
