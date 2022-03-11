import { Meta, Story } from '@storybook/web-components';
import { Components } from '@yoobic/design-system';
import { html } from 'lit-html';

const Template: Story<Components.StInput> = ({ identifier = 'input', name = 'email', type='email', placeholder='Email Address' }) => {
  return html`<st-input identifier=${identifier} name=${name} type=${type} placeholder=${placeholder}></st-input>`;
};

export const Default: Story<Components.StInput> = Template.bind({});
Default.args = {
  placeholder: 'Email Address',
  type: 'email',
};

export default {
  title: 'Stoump/Atoms/Input Field',
  argTypes: {
    name: {
      control: { type: 'text' },
    },
    type: {
      control: { type: 'text' },
    },
    placeholder: {
      control: { type: 'text' },
    },
  },
} as Meta;
