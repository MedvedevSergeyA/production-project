import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import ProfilePage from './ProfilePage';

export default {
    title: 'pages/ProfilePage',
    component: ProfilePage,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    args: {
        to: '/',
    },
} as ComponentMeta<typeof ProfilePage>;

const Template: ComponentStory<typeof ProfilePage> = (args) => <ProfilePage {...args} />;

export const Normal = Template.bind({});
Normal.args = {};
Normal.decorators = [StoreDecorator({
    profile: {
        form: {
            username: 'admin',
            age: 25,
            country: Country.Russia,
            lastname: 'Medvedev',
            first: 'Sergey',
            city: 'EKB',
            currency: Currency.RUB,
        },
    },
})];
export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({
    profile: {
        form: {
            username: 'admin',
            age: 25,
            country: Country.Russia,
            lastname: 'Medvedev',
            first: 'Sergey',
            city: 'EKB',
            currency: Currency.RUB,
        },
    },
})];
