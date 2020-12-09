import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import * as HeaderStories from './Header.stories';

import App from '../App';

export default {
  title: 'Example/app',
  component: App,
} as Meta;

const Template: Story = () => <App />;

export const Input = Template.bind({});
Input.args = {
  ...HeaderStories.LoggedIn.args,
};



