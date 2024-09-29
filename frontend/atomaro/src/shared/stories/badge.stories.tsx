import type { Meta, StoryObj } from "@storybook/react";

import { Badge } from "@/shared/ui/badge";

const meta: Meta<typeof Badge> = {
  component: Badge,
};

export default meta;
type Story = StoryObj<typeof Badge>;

export const Primary: Story = {
  args: {
    children: "Status text",
    variant: "primary",
    color: "info",
    size: "md",
    withDot: true,
  },
};

export const Secondary: Story = {
  args: {
    children: "Status text",
    variant: "secondary",
    color: "info",
    size: "md",
    withDot: true,
  },
};
