import type { Meta, StoryObj } from "@storybook/react";

import { Badge } from "@/shared/ui/badge";

const meta: Meta<typeof Badge> = {
  component: Badge,
};

export default meta;
type Story = StoryObj<typeof Badge>;
export const BadgeComponent: Story = {
  name: "Badge",
  args: {
    children: "Status text",
    variant: "primary",
    color: "info",
    size: "md",
  },
};

export const Variant: Story = {
  render: (args) => {
    return (
      <div className="flex gap-2">
        <Badge variant="primary">{args.children}</Badge>
        <Badge variant="secondary">{args.children}</Badge>
      </div>
    );
  },
  args: {
    children: "Status text",
    variant: "primary",
    color: "info",
    size: "md",
  },
};

export const Size: Story = {
  render: (args) => {
    return (
      <div className="flex gap-2 items-center">
        <Badge size="md">{args.children}</Badge>
        <Badge size="sm">{args.children}</Badge>
      </div>
    );
  },
  args: {
    children: "Status text",
    variant: "secondary",
    color: "info",
    size: "md",
  },
};

export const Color: Story = {
  render: ({ children, withDot, variant, size }) => {
    return (
      <div className="flex gap-2 items-center">
        <Badge withDot={withDot} variant={variant} size={size} color="info">
          {children}
        </Badge>
        <Badge withDot={withDot} variant={variant} size={size} color="warning">
          {children}
        </Badge>
        <Badge withDot={withDot} variant={variant} size={size} color="error">
          {children}
        </Badge>
        <Badge withDot={withDot} variant={variant} size={size} color="success">
          {children}
        </Badge>
        <Badge withDot={withDot} variant={variant} size={size} color="neutral">
          {children}
        </Badge>
        <Badge
          withDot={withDot}
          variant={variant}
          size={size}
          color="status-01"
        >
          {children}
        </Badge>
        <Badge
          withDot={withDot}
          variant={variant}
          size={size}
          color="status-02"
        >
          {children}
        </Badge>
        <Badge
          withDot={withDot}
          variant={variant}
          size={size}
          color="status-03"
        >
          {children}
        </Badge>
        <Badge
          withDot={withDot}
          variant={variant}
          size={size}
          color="status-04"
        >
          {children}
        </Badge>
        <Badge
          withDot={withDot}
          variant={variant}
          size={size}
          color="status-05"
        >
          {children}
        </Badge>
        <Badge
          withDot={withDot}
          variant={variant}
          size={size}
          color="status-06"
        >
          {children}
        </Badge>
      </div>
    );
  },
  args: {
    children: "Status text",
    variant: "secondary",
    color: "info",
    size: "md",
  },
};

export const WithDot: Story = {
  args: {
    children: "Status text",
    variant: "secondary",
    color: "info",
    size: "md",
    withDot: true,
  },
};
