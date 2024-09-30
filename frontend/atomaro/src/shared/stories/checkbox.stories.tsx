import type { Meta, StoryObj } from "@storybook/react";

import { Checkbox } from "@/shared/ui/checkbox";
import { cn } from "../lib/utils";

const meta: Meta<typeof Checkbox> = {
  component: Checkbox,
  argTypes: {
    size: {
      control: "radio",
      options: ["md", "sm"],
    },
    checked: {
      control: "radio",
      options: [true, "indeterminate"],
    },
    children: {
      control: "text",
    },
  },
};

export default meta;
type Story = StoryObj<typeof Checkbox>;

export const WithLabel: Story = {
  render: (args) => {
    return (
      <div className="flex gap-1 items-center">
        <Checkbox id="checkbox_with_label" {...args} />
        <label
          className={cn(
            args.size == "md" ? "body-m" : "body-s",
            "font-medium select-none cursor-pointer",
          )}
          htmlFor="checkbox_with_label"
        >
          {args.children}
        </label>
      </div>
    );
  },
  args: {
    children: "Label",
    size: "md",
    checked: true,
  },
};

export const Size: Story = {
  render: (args) => {
    return (
      <div>
        <Checkbox {...args} />
      </div>
    );
  },
  args: {
    size: "md",
    checked: true,
  },
};
