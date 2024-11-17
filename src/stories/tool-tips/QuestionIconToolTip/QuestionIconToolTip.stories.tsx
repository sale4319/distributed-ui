import type { Meta, StoryObj } from "@storybook/react";

import { QuestionIconToolTip } from "./QuestionIconToolTip";

const meta = {
  title: "ToolTips/QuestionIconToolTip",
  component: QuestionIconToolTip,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} as Meta<typeof QuestionIconToolTip>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
