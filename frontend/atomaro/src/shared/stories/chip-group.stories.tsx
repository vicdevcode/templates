import type { Meta, StoryObj } from "@storybook/react";

import { ChipGroup, ChipGroupItem } from "@/shared/ui/chip";

const meta: Meta<typeof ChipGroup> = {
  component: ChipGroup,
  argTypes: {
    variant: {
      control: "radio",
      options: ["primary", "secondary"],
    },
    type: {
      control: "radio",
      options: ["multiple", "single"],
    },
  },
};

export default meta;
type Story = StoryObj<typeof ChipGroup>;

export const ChipGroupStory: Story = {
  name: "Chip Group",
  render: (args) => (
    <ChipGroup {...args}>
      <ChipGroupItem value="1" count={30}>
        Все
      </ChipGroupItem>
      <ChipGroupItem value="2" count={4}>
        Дизайнеры
      </ChipGroupItem>
      <ChipGroupItem value="3" count={8}>
        Аналитики
      </ChipGroupItem>
      <ChipGroupItem value="4" count={12}>
        Разработчики
      </ChipGroupItem>
      <ChipGroupItem value="5" count={3}>
        Менеджеры
      </ChipGroupItem>
      <ChipGroupItem value="6" count={0}>
        CEO
      </ChipGroupItem>
      <ChipGroupItem value="7" count={1}>
        HR
      </ChipGroupItem>
      <ChipGroupItem value="8" count={2}>
        DevOps
      </ChipGroupItem>
    </ChipGroup>
  ),
  args: {
    variant: "primary",
    type: "multiple",
  },
};
