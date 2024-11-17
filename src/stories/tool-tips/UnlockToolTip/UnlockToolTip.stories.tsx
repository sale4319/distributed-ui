import type { Meta, StoryObj } from "@storybook/react";

import { UnlockToolTip } from "./UnlockToolTip";

const meta: Meta<typeof UnlockToolTip> = {
  title: "ToolTips/UnlockToolTip",
  component: UnlockToolTip,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof UnlockToolTip>;

export const Default: Story = {};
