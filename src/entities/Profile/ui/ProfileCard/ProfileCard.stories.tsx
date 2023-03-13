import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import { ProfileCard } from 'entities/Profile';
import avatar from 'shared/assets/tests/avatar.png';

export default {
    title: 'entities/ProfileCard',
    component: ProfileCard,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ProfileCard>;

const Template: ComponentStory<typeof ProfileCard> = (args) => <ProfileCard {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    data: {
        username: 'admin',
        age: 25,
        country: Country.Russia,
        lastname: 'Medvedev',
        first: 'Sergey',
        city: 'EKB',
        currency: Currency.RUB,
        avatar,
    },
};
export const withError = Template.bind({});
withError.args = {
    error: 'true',
};
export const Loading = Template.bind({});
Loading.args = {
    isLoading: true,
};
