import { ComponentMeta, ComponentStory } from "@storybook/react";
import NewButton from "./newButton";

export default {
    title: "Components/NewButton", // story 이름
    component: NewButton,
    tags: ['autodocs'],
} as ComponentMeta<typeof NewButton>;

const Template: ComponentStory<typeof NewButton> = (args) => (
    <NewButton {...args} />
);

export const Small = Template.bind({});
Small.args = {
    size: "small",
    label: "Button",
}; // Small의 props 지정

export const Large = Template.bind({});
Large.args = {
    size: "large",
    label: "Button",
}; // Large의 props 지정