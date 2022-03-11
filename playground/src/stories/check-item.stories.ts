import { Meta, Story } from '@storybook/web-components';
import { Components } from '@yoobic/design-system';
import { html } from 'lit-html';

const Template: Story<Components.LiChecked> = ({ identifier = 'li', label = 'Join', size='medium' }) => {
  return html`<li-checked identifier=${identifier} label=${label} size=${size}></li-checked>`;
};

export const Default: Story<Components.LiChecked> = Template.bind({});
Default.args = {
  label: 'some text',
  size: 'Small',
};

export default {
  title: 'Stoump/Atoms/Checked List Items',
  argTypes: {
    label: {
      control: { type: 'text' },
    },
    size: {
      options: ['Small', 'Medium'],
      control: { type: 'inline-radio' },
    },
  },
} as Meta;
