import { Meta, Story } from '@storybook/web-components';
import { Components } from '@yoobic/design-system';
import { html } from 'lit-html';

const Template: Story<Components.CuText> = ({ content = 'Some TEXT', size = 14, color='#03060b'}) => {
  return html`<cu-text content=${content} size=${size} color=${color}></cu-text>`;
};

export const Default: Story<Components.CuText> = Template.bind({});
Default.args = {
  content: 'Some Text',
  size: 14,
  color: '#03060b',
};

export default {
  title: 'Stoump/Atoms/Texts',
  argTypes: {
    content: {
      control: { type: 'text' },
    },
    size: {
      control: { type: 'number' },
    },
    color: {
      control: { type: 'color' },
    },
  },
} as Meta;
