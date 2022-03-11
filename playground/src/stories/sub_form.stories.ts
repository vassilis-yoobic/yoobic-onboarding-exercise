import { Meta, Story } from '@storybook/web-components';
import { Components } from '@yoobic/design-system';
import { html } from 'lit-html';

const Template: Story<Components.SubForm> = ({ identifier= 'sub-form'}) => {
  return html`<sub-form identifier=${identifier}></sub-form>`;
};

export const Default: Story<Components.SubForm> = Template.bind({});
Default.args = {

};

export default {
  title: 'Stoump/Molecules/Subscribe Form',
  argTypes: {

  },
} as Meta;
