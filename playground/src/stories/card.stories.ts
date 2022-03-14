import { Meta, Story } from '@storybook/web-components';
import { Components } from '@yoobic/design-system';
import { html } from 'lit-html';

export default {
  title: "Stoump/Molecules/Card",
} as Meta;

const Template: Story<Components.CuCard> = () => {
  return html` <cu-card></cu-card>`;
};

export const Default: Story<Components.CuCard> = Template.bind({});
Default.args = {
};
