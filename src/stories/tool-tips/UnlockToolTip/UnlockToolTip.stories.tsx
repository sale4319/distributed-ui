import type { Meta, StoryObj } from "@storybook/react";

import { UnlockToolTip } from "./UnlockToolTip";

const meta = {
  title: "ToolTips/UnlockToolTip",
  component: UnlockToolTip,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} as Meta<typeof UnlockToolTip>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
