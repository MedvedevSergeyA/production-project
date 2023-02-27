import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Text, TextTheme } from 'shared/ui/Text/Text';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';

export default {
    title: 'shared/Text',
    component: Text,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    title: 'Title loremloremlorem',
    text: 'DescriptionDescriptionDescriptionDescription',
};
export const Error = Template.bind({});
Error.args = {
    title: 'Title loremloremlorem',
    text: 'DescriptionDescriptionDescriptionDescription',
    theme: TextTheme.ERROR,
};
export const onlyTitle = Template.bind({});
onlyTitle.args = {
    title: 'Title loremloremlorem',
};
export const onlyText = Template.bind({});
onlyText.args = {
    text: 'DescriptionDescriptionDescriptionDescription',
};
export const PrimaryDark = Template.bind({});
PrimaryDark.args = {
    title: 'Title loremloremlorem',
    text: 'DescriptionDescriptionDescriptionDescription',
};
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];
export const onlyTitleDark = Template.bind({});
onlyTitleDark.args = {
    title: 'Title loremloremlorem',
};
onlyTitleDark.decorators = [ThemeDecorator(Theme.DARK)];
export const onlyTextDark = Template.bind({});
onlyTextDark.args = {
    text: 'DescriptionDescriptionDescriptionDescription',
};
onlyTextDark.decorators = [ThemeDecorator(Theme.DARK)];
