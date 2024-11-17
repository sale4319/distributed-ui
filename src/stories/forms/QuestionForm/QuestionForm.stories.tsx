import React from "react";
import type { Meta, StoryObj } from "@storybook/react";

import { QuestionForm } from "./QuestionForm";

const meta = {
  title: "Forms/QuestionForm",
  component: QuestionForm,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} as Meta<typeof QuestionForm>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
