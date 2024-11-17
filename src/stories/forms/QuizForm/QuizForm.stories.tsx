import React from "react";
import type { Meta, StoryObj } from "@storybook/react";

import { Quiz } from "./QuizForm";

const meta = {
  title: "Forms/QuizForm",
  component: Quiz,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
} as Meta<typeof Quiz>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
