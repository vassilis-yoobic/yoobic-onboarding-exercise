import { Meta, Story } from '@storybook/web-components';
import { Components } from '@yoobic/design-system';
import { html } from 'lit-html';

const Template: Story<Components.FHeading> = ({ content = 'Some', following_text = 'Text', color='#03060b', color2='#7a798d', size = 32, }) => {
  return html`<f-heading content=${content} following_text=${following_text} color=${color} color2=${color2} size=${size}></f-heading>`;
};

export const Default: Story<Components.FHeading> = Template.bind({});
Default.args = {
  content: 'The magical, reusable web component compiler.',
  following_text : 'Start building in seconds.',
  color: '#03060b',
  color2: '#7a798d',
  size: 32,
};

export const ReverseHeading: Story<Components.FHeading> = Template.bind({});
ReverseHeading.args = {
  content: 'The magical, reusable web component compiler.',
  following_text : 'Start building in seconds.',
  color: '#7a798d',
  color2: '#03060b',
  size: 32,
};

export default {
  title: "Stoump/Atoms/Full Heading",
  argTypes: {
    content: {
      control: { type: 'text' },
    },
    following_text: {
      control: { type: 'text' },
    },
    size: {
      control: { type: 'number' },
    },
    color: {
      control: { type: 'color' },
    },
    color2: {
      control: { type: 'color' },
    },
  },
} as Meta;
