import { Meta, Story } from '@storybook/web-components';
import { Components } from '@yoobic/design-system';
import { html } from 'lit-html';


export default {
  title: 'Stoump/Organisms/Subscribe Section',
  argTypes: {

  },
} as Meta;

const Template: Story<Components.SubSection> = ({
  identifier= 'sub-form'
}) => {
  return html`<sub-section identifier=${identifier}></sub-section>`;
};

export const Default: Story<Components.SubSection> = Template.bind({});
Default.args = {
  identifier: 'sub-form',
};
