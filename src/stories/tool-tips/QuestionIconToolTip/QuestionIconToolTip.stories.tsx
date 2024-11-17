import type { Meta, StoryObj } from "@storybook/react";

import { QuestionIconToolTip } from "./QuestionIconToolTip";

const meta: Meta<typeof QuestionIconToolTip> = {
  title: "ToolTips/QuestionIconToolTip",
  component: QuestionIconToolTip,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof QuestionIconToolTip>;

export const Default: Story = {};
