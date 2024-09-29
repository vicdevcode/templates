import type { Meta, StoryObj } from "@storybook/react";

import { Button } from "@/shared/ui/button";

const meta: Meta<typeof Button> = {
  component: Button,
  argTypes: {
    variant: {
      control: {
        type: "radio",
      },
      options: ["primary", "secondary", "outline", "ghost"],
    },
    size: {
      control: {
        type: "radio",
      },
      options: ["xl", "lg", "md", "sm"],
    },
    color: {
      control: {
        type: "select",
      },
      options: [
        "status-06",
        "status-05",
        "status-04",
        "status-03",
        "status-02",
        "status-01",
        "info",
        "success",
        "error",
        "neutral",
        "accent",
      ],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    children: "Button label",
    variant: "primary",
    color: "accent",
    size: "xl",
  },
};

export const Secondary: Story = {
  args: {
    children: "Button label",
    variant: "secondary",
    color: "accent",
    size: "xl",
  },
};

export const Outline: Story = {
  args: {
    children: "Button label",
    variant: "outline",
    color: "accent",
    size: "xl",
  },
};

export const Ghost: Story = {
  args: {
    children: "Button label",
    variant: "ghost",
    color: "accent",
    size: "xl",
  },
};
