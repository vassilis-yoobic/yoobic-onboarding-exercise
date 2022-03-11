import { Meta, Story } from '@storybook/web-components';
import { Components } from '@yoobic/design-system';
import { html } from 'lit-html';

const Template: Story<Components.CuLink> = ({ href = 'Some Link', icon= ''}) => {
  return html`<cu-link href=${href} icon=${icon}></cu-link>`;
};

export const Default: Story<Components.CuLink> = Template.bind({});
Default.args = {
  href: 'Some Link',
  icon: '',
};

export default {
  title: 'Stoump/Atoms/Links',
  argTypes: {
    href: {
      control: { type: 'text' },
    },
    icon: {
      control: { type: 'text' },
    },
  },
} as Meta;
