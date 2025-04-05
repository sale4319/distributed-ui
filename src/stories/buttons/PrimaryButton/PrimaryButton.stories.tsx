import type { Meta, StoryObj } from "@storybook/react";
import { PrimaryButton } from "./PrimaryButton";

const meta: Meta<typeof PrimaryButton> = {
  title: "Buttons/PrimaryButton",
  component: PrimaryButton,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof PrimaryButton>;

export const Fill: Story = {
  args: {
    primary: true,
    label: "Fill",
    mode: "fill",
  },
};

export const Pulse: Story = {
  args: {
    label: "Pulse",
    mode: "pulse",
  },
};

export const Close: Story = {
  args: {
    label: "Close",
    mode: "close",
  },
};

export const Raise: Story = {
  args: {
    label: "Raise",
    mode: "raise",
  },
};

export const Up: Story = {
  args: {
    label: "Fill Up",
    mode: "up",
  },
};

export const Slide: Story = {
  args: {
    label: "Slide",
    mode: "slide",
  },
};

export const Offset: Story = {
  args: {
    label: "Offset",
    mode: "offset",
  },
};
