import { Checkbox } from "@/shared/ui/checkbox/checkbox";
import { Chip } from "@/shared/ui/chip";
import { BadgeListWidget } from "@/widgets/badge-list";
import { ButtonListWidget } from "@/widgets/button-list";
import { Heart } from "@atomaro/icons";
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
        <Chip count={20}>
          <Heart />
          Chips
        </Chip>
      </div>
      <div className="h-5 m-4">
        <div className="flex gap-1">
          <Checkbox id="checkbox1" checked="indeterminate" />
          <label htmlFor="checkbox1" className="select-none cursor-pointer">
            Label
          </label>
        </div>
      </div>
    </div>
  );
};
