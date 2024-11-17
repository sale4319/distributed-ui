import type { Meta, StoryObj } from "@storybook/react";

import { SubmitButton } from "./SubmitButton";

const meta = {
  title: "Buttons/SubmitButton",
  component: SubmitButton,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} as Meta<typeof SubmitButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Submit: Story = {
  args: {
    label: "Submit",
    submit: true,
  },
};

export const FunSubmit: Story = {
  args: {
    label: "Fun",
  },
};

export const Large: Story = {
  args: {
    label: "Large",
    submit: true,
    size: "large",
  },
};

export const Small: Story = {
  args: {
    label: "Small",
    submit: true,
    size: "small",
  },
};
