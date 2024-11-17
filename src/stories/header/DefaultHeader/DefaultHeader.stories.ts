import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";

import { DefaultHeader } from "./DefaultHeader";

const meta = {
  title: "Example/DefaultHeader",
  component: DefaultHeader,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
  args: {
    onLogin: fn(),
    onLogout: fn(),
    onCreateAccount: fn(),
  },
} satisfies Meta<typeof DefaultHeader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const LoggedIn: Story = {
  args: {
    user: {
      name: "Jane Doe",
    },
  },
};

export const LoggedOut: Story = {};
