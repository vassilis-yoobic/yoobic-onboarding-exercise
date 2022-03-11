import { Meta, Story } from '@storybook/web-components';
import { Components } from '@yoobic/design-system';
import { html } from 'lit-html';

const Template: Story<Components.MyBtn> = ({ identifier = 'button', label = 'Join', size='medium', type = 'Primary-Rounded' }) => {
  return html`<my-btn identifier=${identifier} label=${label} size=${size} type=${type}></my-btn>`;
};

export const Default: Story<Components.MyBtn> = Template.bind({});
Default.args = {
  label: 'get started',
  size: 'Medium',
  type: 'Primary-Rounded',
};

//👇 Each story then reuses that template
export const SecondaryR: Story<Components.MyBtn> = Template.bind({});
SecondaryR.args = {
  label: 'why stencil ?',
  size: 'Medium',
  type: 'Secondary-Rounded',
};

export const PrimarySq: Story<Components.MyBtn> = Template.bind({});
PrimarySq.args = {
  label: 'subscribe',
  size: 'Medium',
  type: 'Primary-Square',
};

export const SecondarySq: Story<Components.MyBtn> = Template.bind({});
SecondarySq.args = {
  label: 'show me more',
  size: 'Small',
  type: 'Secondary-Square',
};

export const ThirdSq: Story<Components.MyBtn> = Template.bind({});
ThirdSq.args = {
  label: '$ npm init stencil',
  size: 'Medium',
  type: 'Third-Square',
};

export const WithGradient: Story<Components.MyBtn> = Template.bind({});
WithGradient.args = {
  label: 'Register now • Stencil Enterprise Webinar: Design Systems at Scale',
  size: 'Small',
  type: 'With-Gradient',
};

export default {
  title: 'Stoump/Atoms/Buttons',
  argTypes: {
    label: {
      control: { type: 'text' },
    },
    size: {
      options: ['Small', 'Medium'],
      control: { type: 'inline-radio' },
    },
    type: {
      options: ['Primary-Rounded', 'Secondary-Rounded', 'Primary-Square', 'Secondary-Square', 'Third-Square', 'With-Gradient'],
      control: { type: 'select' },
    },
  },
} as Meta;
