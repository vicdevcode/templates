import type { Meta, StoryObj } from "@storybook/react";

import { Chip } from "@/shared/ui/chip";

const meta: Meta<typeof Chip> = {
  component: Chip,
  argTypes: {
    variant: {
      control: "radio",
      options: ["primary", "secondary"],
    },
    count: {
      control: "number",
    },
  },
};

export default meta;
type Story = StoryObj<typeof Chip>;

export const Primary: Story = {
  args: {
    children: "Chips",
    variant: "primary",
  },
};

export const Secondary: Story = {
  args: {
    children: "Chips",
    variant: "secondary",
  },
};
