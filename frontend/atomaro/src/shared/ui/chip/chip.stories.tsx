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

export const Variant: Story = {
  args: {
    children: "Chips",
    variant: "primary",
  },
};

export const WithCount: Story = {
  args: {
    children: "Chips",
    variant: "primary",
    count: 0,
  },
};
