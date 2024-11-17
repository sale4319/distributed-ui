import type { StoryObj } from "@storybook/react";
import Button from "./StoryButton";
declare const meta: {
    title: string;
    component: typeof Button;
    parameters: {
        layout: string;
    };
    tags: string[];
    argTypes: {
        backgroundColor: {
            control: "color";
        };
    };
    args: {
        onClick: import("@vitest/spy").Mock<(...args: any[]) => any>;
    };
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Primary: Story;
export declare const Secondary: Story;
export declare const Large: Story;
export declare const Small: Story;
